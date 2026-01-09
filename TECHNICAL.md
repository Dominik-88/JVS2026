# 📚 Technická dokumentace

Podrobná technická dokumentace pro aplikaci Vodárenské areály JVS.

---

## 📋 Obsah

1. [Architektura](#architektura)
2. [Datová struktura](#datová-struktura)
3. [API Reference](#api-reference)
4. [Komponenty](#komponenty)
5. [Styling](#styling)
6. [State Management](#state-management)
7. [Performance](#performance)
8. [Testing](#testing)

---

## 🏗️ Architektura

### Přehled

Aplikace je postavena jako **Single Page Application (SPA)** s následující strukturou:

```
JVS2026/
├── index.html          # Hlavní HTML soubor (33 KB)
├── README.md           # Dokumentace
├── CHANGELOG.md        # Historie změn
├── DEPLOYMENT.md       # Deployment guide
├── TECHNICAL.md        # Technická dokumentace
├── manifest.json       # PWA manifest (budoucí)
└── sw.js              # Service worker (budoucí)
```

### Technologie

| Technologie | Verze | Účel |
|------------|-------|------|
| **HTML5** | - | Sémantický markup |
| **CSS3** | - | Styling, animace |
| **JavaScript** | ES6+ | Logika aplikace |
| **Leaflet.js** | 1.9.4 | Mapová knihovna |
| **OpenStreetMap** | - | Mapové dlaždice |

### Architektonické vzory

- **MVC Pattern**: Model (data) → View (DOM) → Controller (event handlers)
- **Observer Pattern**: LocalStorage events, map events
- **Module Pattern**: Encapsulace funkcí
- **Singleton Pattern**: Map instance, state management

---

## 📊 Datová struktura

### Location Object

```javascript
{
  "district": "PI",           // Okres (string, 2 znaky)
  "name": "VDJ Amerika II",   // Název lokality (string)
  "area": 3303,               // Plocha v m² (number)
  "lat": 49.305131,           // Zeměpisná šířka (number)
  "lng": 14.166126            // Zeměpisná délka (number)
}
```

### Validace

```javascript
// Validační pravidla
const validation = {
  district: /^[A-Z]{2}$/,                    // 2 velká písmena
  name: /^.{3,100}$/,                        // 3-100 znaků
  area: (val) => val > 0 && val < 1000000,  // 0-1M m²
  lat: (val) => val >= 48 && val <= 51,     // Jižní Čechy
  lng: (val) => val >= 13 && val <= 15      // Jižní Čechy
};
```

### LocalStorage Schema

```javascript
// Klíč: 'jvs_completed'
// Hodnota: JSON array názvů dokončených lokalit
{
  "jvs_completed": [
    "VDJ Amerika II",
    "VDJ Drahonice",
    "VDJ Vodňany"
  ]
}
```

---

## 🔌 API Reference

### Globální proměnné

```javascript
let map;                    // Leaflet map instance
let markers = [];           // Array of marker objects
let completedLocations;     // Set of completed location names
let selectedDistricts;      // Set of selected district codes
```

### Inicializační funkce

#### `init()`

Inicializuje aplikaci při načtení stránky.

```javascript
function init() {
  // 1. Načte uložený stav z LocalStorage
  const saved = localStorage.getItem('jvs_completed');
  if (saved) {
    completedLocations = new Set(JSON.parse(saved));
  }

  // 2. Inicializuje mapu
  map = L.map('map').setView([49.0, 14.3], 10);
  
  // 3. Přidá tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // 4. Inicializuje filtry
  initDistricts();

  // 5. Přidá markery
  addMarkers();

  // 6. Aktualizuje statistiky
  updateStats();
}
```

**Volání**: Automaticky při `window.load` eventu

**Závislosti**: `locations` array, DOM elementy

---

### Mapové funkce

#### `addMarkers()`

Přidá markery na mapu podle aktuálních filtrů.

```javascript
function addMarkers() {
  // 1. Vyčistí existující markery
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  // 2. Filtruje lokality
  const filtered = selectedDistricts.size === 0 
    ? locations 
    : locations.filter(l => selectedDistricts.has(l.district));

  // 3. Vytvoří markery
  filtered.forEach(location => {
    const isCompleted = completedLocations.has(location.name);
    
    const icon = L.divIcon({
      className: 'custom-marker' + (isCompleted ? ' completed' : ''),
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });

    const marker = L.marker([location.lat, location.lng], { icon })
      .bindPopup(createPopup(location, isCompleted))
      .addTo(map);

    markers.push(marker);
  });
}
```

**Parametry**: Žádné

**Návratová hodnota**: `void`

**Side effects**: Modifikuje `markers` array, přidává DOM elementy

---

#### `createPopup(location, isCompleted)`

Vytvoří HTML obsah pro popup marker.

```javascript
function createPopup(location, isCompleted) {
  return `
    <div class="popup-header">
      <div class="popup-title">${location.name}</div>
      <span class="popup-district">Okres: ${location.district}</span>
    </div>
    <div class="popup-body">
      <div class="popup-info">
        <div class="popup-info-icon">📏</div>
        <div class="popup-info-text">
          <div class="popup-info-label">Plocha</div>
          <div class="popup-info-value">${location.area.toLocaleString('cs-CZ')} m²</div>
        </div>
      </div>
      <div class="popup-actions">
        <button class="popup-btn popup-btn-navigate" onclick="navigate(${location.lat}, ${location.lng})">
          <span>🧭</span>
          <span>Navigovat</span>
        </button>
        <button class="popup-btn popup-btn-complete ${isCompleted ? 'completed' : ''}" 
                onclick="toggleComplete('${location.name}')" 
                ${isCompleted ? 'disabled' : ''}>
          <span>${isCompleted ? '✓' : '☐'}</span>
          <span>${isCompleted ? 'Hotovo' : 'Označit'}</span>
        </button>
        <button class="popup-btn popup-btn-edit" onclick="editLocation('${location.name}')">
          <span>✏️</span>
          <span>Upravit</span>
        </button>
      </div>
    </div>
  `;
}
```

**Parametry**:
- `location` (Object): Location objekt
- `isCompleted` (Boolean): Zda je lokalita dokončená

**Návratová hodnota**: `string` (HTML)

---

### Akční funkce

#### `navigate(lat, lng)`

Otevře navigaci v Google Maps/Waze.

```javascript
function navigate(lat, lng) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Mobilní zařízení - pokus o otevření v nativní aplikaci
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  } else {
    // Desktop - otevře Google Maps web
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  }
}
```

**Parametry**:
- `lat` (Number): Zeměpisná šířka
- `lng` (Number): Zeměpisná délka

**Návratová hodnota**: `void`

**Side effects**: Otevře nové okno/tab

---

#### `toggleComplete(name)`

Označí/odznačí lokalitu jako dokončenou.

```javascript
function toggleComplete(name) {
  if (completedLocations.has(name)) {
    completedLocations.delete(name);
  } else {
    completedLocations.add(name);
  }
  
  // Uloží stav
  localStorage.setItem('jvs_completed', JSON.stringify([...completedLocations]));
  
  // Aktualizuje UI
  addMarkers();
  updateStats();
  
  // Zavře popup
  map.closePopup();
}
```

**Parametry**:
- `name` (String): Název lokality

**Návratová hodnota**: `void`

**Side effects**: Modifikuje `completedLocations`, LocalStorage, DOM

---

### Statistické funkce

#### `updateStats()`

Aktualizuje statistiky v panelu.

```javascript
function updateStats() {
  // Výpočty
  const totalArea = locations.reduce((sum, l) => sum + l.area, 0);
  const completedArea = locations
    .filter(l => completedLocations.has(l.name))
    .reduce((sum, l) => sum + l.area, 0);
  const remainingArea = totalArea - completedArea;
  const completedCount = completedLocations.size;
  const totalCount = locations.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  // Aktualizace DOM
  document.getElementById('totalArea').textContent = totalArea.toLocaleString('cs-CZ');
  document.getElementById('remainingArea').textContent = remainingArea.toLocaleString('cs-CZ');
  document.getElementById('completedCount').textContent = completedCount;
  document.getElementById('totalCount').textContent = totalCount;
  document.getElementById('progressFill').style.width = percentage + '%';
  document.getElementById('progressLabel').textContent = percentage + '% dokončeno';
}
```

**Parametry**: Žádné

**Návratová hodnota**: `void`

**Složitost**: O(n) kde n = počet lokalit

---

### Filtrační funkce

#### `initDistricts()`

Inicializuje district chips.

```javascript
function initDistricts() {
  const districts = [...new Set(locations.map(l => l.district))].sort();
  const container = document.getElementById('districtChips');
  
  districts.forEach(district => {
    const chip = document.createElement('div');
    chip.className = 'district-chip';
    chip.textContent = district;
    chip.onclick = () => toggleDistrict(district, chip);
    container.appendChild(chip);
  });
}
```

**Parametry**: Žádné

**Návratová hodnota**: `void`

**Složitost**: O(n log n) kvůli sort

---

#### `toggleDistrict(district, element)`

Přepne výběr okresu.

```javascript
function toggleDistrict(district, element) {
  if (selectedDistricts.has(district)) {
    selectedDistricts.delete(district);
    element.classList.remove('active');
  } else {
    selectedDistricts.add(district);
    element.classList.add('active');
  }
}
```

**Parametry**:
- `district` (String): Kód okresu
- `element` (HTMLElement): DOM element chipu

**Návratová hodnota**: `void`

---

#### `applyFilters()`

Aplikuje vybrané filtry.

```javascript
function applyFilters() {
  addMarkers();
  toggleFilters();
}
```

**Parametry**: Žádné

**Návratová hodnota**: `void`

---

#### `clearFilters()`

Vymaže všechny filtry.

```javascript
function clearFilters() {
  selectedDistricts.clear();
  document.querySelectorAll('.district-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  addMarkers();
}
```

**Parametry**: Žádné

**Návratová hodnota**: `void`

---

### Utility funkce

#### `resetAll()`

Resetuje všechna data.

```javascript
function resetAll() {
  if (confirm('Opravdu chcete resetovat všechna data? Tato akce je nevratná.')) {
    completedLocations.clear();
    localStorage.removeItem('jvs_completed');
    addMarkers();
    updateStats();
  }
}
```

**Parametry**: Žádné

**Návratová hodnota**: `void`

**Side effects**: Modifikuje LocalStorage, DOM

---

## 🎨 Komponenty

### Header

```html
<header class="header">
  <div class="header-left">
    <div class="logo">💧</div>
    <div class="header-title">
      <h1>Vodárenské areály JVS</h1>
      <small>Management System v3.0</small>
    </div>
  </div>
  <div class="header-actions">
    <button class="btn-header" onclick="toggleFilters()">🔍 Filtry</button>
    <button class="btn-header" onclick="resetAll()">🔄 Reset</button>
  </div>
</header>
```

**Props**: Žádné

**State**: Žádný

**Events**: `toggleFilters()`, `resetAll()`

---

### Stats Panel

```html
<div class="stats-panel">
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-label">Celková plocha</div>
      <div class="stat-value">
        <span id="totalArea">0</span>
        <span class="stat-unit">m²</span>
      </div>
    </div>
    <!-- ... další stat cards ... -->
  </div>
</div>
```

**Props**: Žádné

**State**: `totalArea`, `remainingArea`, `completedCount`, `totalCount`

**Updates**: Při `updateStats()` volání

---

### Filter Panel

```html
<div class="filter-panel hidden" id="filterPanel">
  <div class="filter-header">
    <h3>🔍 Filtry</h3>
    <button class="filter-close" onclick="toggleFilters()">✕</button>
  </div>
  <div class="filter-group">
    <label>Filtrovat podle okresu</label>
    <div class="district-chips" id="districtChips"></div>
  </div>
  <div class="filter-actions">
    <button class="btn btn-secondary" onclick="clearFilters()">Vymazat</button>
    <button class="btn btn-primary" onclick="applyFilters()">Použít</button>
  </div>
</div>
```

**Props**: Žádné

**State**: `selectedDistricts`, `hidden` class

**Events**: `toggleFilters()`, `clearFilters()`, `applyFilters()`

---

## 🎨 Styling

### CSS Custom Properties

```css
:root {
  /* Colors */
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --primary-light: #3b82f6;
  --success: #16a34a;
  --warning: #f59e0b;
  --danger: #dc2626;
  
  /* Grays */
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-900: #0f172a;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Spacing */
  --radius: 12px;
  --radius-lg: 16px;
  
  /* Animation */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animace

```css
/* Float animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Shimmer animation */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 💾 State Management

### State Flow

```
User Action
    ↓
Event Handler
    ↓
State Update (completedLocations, selectedDistricts)
    ↓
LocalStorage Sync
    ↓
UI Update (addMarkers, updateStats)
    ↓
DOM Render
```

### State Persistence

```javascript
// Ukládání
localStorage.setItem('jvs_completed', JSON.stringify([...completedLocations]));

// Načítání
const saved = localStorage.getItem('jvs_completed');
if (saved) {
  completedLocations = new Set(JSON.parse(saved));
}

// Mazání
localStorage.removeItem('jvs_completed');
```

---

## ⚡ Performance

### Optimalizace

1. **DOM Manipulace**
   - Batch updates
   - DocumentFragment pro multiple inserts
   - CSS transforms místo position changes

2. **Event Handling**
   - Event delegation kde možné
   - Debounce/throttle pro scroll/resize

3. **Rendering**
   - CSS containment
   - will-change pro animované elementy
   - GPU acceleration (transform3d)

4. **Memory**
   - Cleanup event listeners
   - Remove unused markers
   - Clear references

### Metriky

```javascript
// Performance monitoring
performance.mark('init-start');
init();
performance.mark('init-end');
performance.measure('init', 'init-start', 'init-end');

const measure = performance.getEntriesByName('init')[0];
console.log(`Init took ${measure.duration}ms`);
```

---

## 🧪 Testing

### Unit Tests (příklad)

```javascript
// Test: toggleComplete
describe('toggleComplete', () => {
  it('should add location to completed set', () => {
    completedLocations.clear();
    toggleComplete('VDJ Amerika II');
    expect(completedLocations.has('VDJ Amerika II')).toBe(true);
  });

  it('should remove location from completed set', () => {
    completedLocations.add('VDJ Amerika II');
    toggleComplete('VDJ Amerika II');
    expect(completedLocations.has('VDJ Amerika II')).toBe(false);
  });
});
```

### Integration Tests

```javascript
// Test: Filter workflow
describe('Filter workflow', () => {
  it('should filter markers by district', () => {
    selectedDistricts.add('PI');
    applyFilters();
    const visibleMarkers = markers.filter(m => m._map !== null);
    expect(visibleMarkers.length).toBe(2); // PI má 2 lokality
  });
});
```

---

## 📞 Podpora

Pro technické dotazy kontaktujte:
- **Email**: d.schmied@lantaron.cz
- **GitHub**: [@Dominik-88](https://github.com/Dominik-88)

---

**Vytvořeno pro JVS a.s. | 2026**
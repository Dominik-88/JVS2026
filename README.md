# 💧 Vodárenské areály JVS – Premium Management System v4.0

> **Kompletně přepracovaný profesionální management systém pro správu vodárenských areálů JVS a.s.**

[![Version](https://img.shields.io/badge/version-4.0_PRO-blue.svg)](https://github.com/Dominik-88/JVS2026)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production_Ready-success.svg)](https://github.com/Dominik-88/JVS2026)

---

## 🎯 Co je nového ve verzi 4.0 PRO

### ✨ Revoluce v UI/UX designu
- **Pixel-perfect zarovnání** - Každý prvek je matematicky zarovnán na mřížce 4px
- **Pokročilé animace** - Plynulé přechody 60 FPS s hardwarovou akcelerací
- **Gradient efekty** - Ohromující vizuální styl s moderními barevnými přechody
- **Glassmorphism** - Průsvitné panely s blur efekty
- **Mikrointerakce** - Každý klik, hover a akce má vizuální odezvu

### 🗺️ Vylepšená mapa
- **Custom značky s animacemi** - Plovoucí vodní kapky s ping efektem
- **Inteligentní clustering** - Automatické seskupování při oddálení
- **Hover efekty** - Zvětšení a zvýraznění při najetí myší
- **Completion animace** - Slavnostní animace při dokončení lokality
- **Route visualization** - Vizualizace plánované trasy

### 📊 Pokročilé statistiky
- **Real-time aktualizace** - Okamžitá reakce na změny
- **Animované počítadla** - Plynulé animace čísel
- **Shimmer efekty** - Progress bar s animovaným leskem
- **Vizuální feedback** - Barevné indikátory pokroku
- **Quick actions** - Rychlý přístup k nejpoužívanějším funkcím

### 🧭 Plánovač trasy (NOVÉ!)
- **Výběr lokalit** - Klikněte na značky pro přidání do trasy
- **Automatická optimalizace** - Nearest neighbor algoritmus
- **Výpočet vzdálenosti** - Přesné měření délky trasy
- **Odhad času** - Predikce doby jízdy
- **Google Maps integrace** - Přímý export trasy do navigace

### 🎨 Dark Mode (NOVÉ!)
- **Automatická detekce** - Respektuje systémové nastavení
- **Přepínač** - Jednoduchý toggle v hlavičce
- **Plná podpora** - Všechny komponenty optimalizovány
- **Persistence** - Zapamatuje si vaši volbu

### 🔍 Inteligentní filtry
- **Multi-level filtering** - Podle okresu, stavu, velikosti
- **Live preview** - Okamžité zobrazení počtu výsledků
- **Kombinovatelné** - Více filtrů najednou
- **Quick presets** - Přednastavené kombinace

### 📤 Export funkcionalita (NOVÉ!)
- **CSV export** - S podporou českých znaků (UTF-8 BOM)
- **Kompletní data** - Všechny informace včetně GPS
- **Timestamped** - Automatické datum v názvu souboru

### 🔔 Toast notifikace (NOVÉ!)
- **Kontextové zprávy** - Success, error, warning, info
- **Auto-dismiss** - Automatické zavření po 5s
- **Stackable** - Více notifikací najednou
- **Accessibility** - ARIA live regions

### ⌨️ Klávesové zkratky (NOVÉ!)
- `Ctrl/Cmd + F` - Otevřít filtry
- `Ctrl/Cmd + R` - Zapnout režim plánování trasy
- `Escape` - Zavřít všechny panely

---

## 📋 Kompletní seznam funkcí

### Mapové funkce
| Funkce | Popis | Status |
|--------|-------|--------|
| **Interaktivní mapa** | Leaflet.js s OpenStreetMap tiles | ✅ Hotovo |
| **Custom značky** | Vodní kapky s animacemi | ✅ Hotovo |
| **GPS navigace** | Integrace s Google Maps/Waze | ✅ Hotovo |
| **Route planner** | Plánování optimální trasy | ✅ Hotovo |
| **Zoom controls** | Přiblížení, oddálení, fit bounds | ✅ Hotovo |
| **Popup karty** | Detaily lokality s akcemi | ✅ Hotovo |

### Datové funkce
| Funkce | Popis | Status |
|--------|-------|--------|
| **41 lokalit** | Přesné GPS souřadnice | ✅ Hotovo |
| **6 okresů** | PI, ST, CB, PT, CK, TA | ✅ Hotovo |
| **Celková plocha** | 195 000+ m² | ✅ Hotovo |
| **LocalStorage** | Trvalé ukládání stavu | ✅ Hotovo |
| **CSV export** | Export všech dat | ✅ Hotovo |

### UI/UX funkce
| Funkce | Popis | Status |
|--------|-------|--------|
| **Responzivní design** | Mobile + Desktop | ✅ Hotovo |
| **Dark mode** | Tmavý režim | ✅ Hotovo |
| **Animace** | 60 FPS smooth animations | ✅ Hotovo |
| **Toast notifikace** | Kontextové zprávy | ✅ Hotovo |
| **Loading states** | Spinner a progress | ✅ Hotovo |
| **Accessibility** | ARIA labels, focus states | ✅ Hotovo |

### Pokročilé funkce
| Funkce | Popis | Status |
|--------|-------|--------|
| **Multi-filtering** | Podle okresu, stavu, velikosti | ✅ Hotovo |
| **Quick actions** | Rychlé akce na panelu | ✅ Hotovo |
| **Keyboard shortcuts** | Klávesové zkratky | ✅ Hotovo |
| **Share progress** | Sdílení pokroku | ✅ Hotovo |
| **Statistics modal** | Detailní statistiky | ✅ Hotovo |

---

## 🚀 Instalace a spuštění

### Metoda 1: Přímé otevření (Nejjednodušší)

```bash
# Stáhněte soubor index.html
# Otevřete jej v moderním prohlížeči (Chrome, Firefox, Safari, Edge)
```

### Metoda 2: Live Server (Doporučeno pro vývoj)

```bash
# Nainstalujte live-server globálně
npm install -g live-server

# Spusťte server v adresáři s index.html
live-server

# Otevřete http://localhost:8080
```

### Metoda 3: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Otevřete http://localhost:8000
```

### Metoda 4: Node.js HTTP Server

```bash
# Nainstalujte http-server
npm install -g http-server

# Spusťte
http-server -p 8080

# Otevřete http://localhost:8080
```

---

## 📱 Použití aplikace

### Základní workflow

1. **Prohlížení mapy**
   - Použijte myš/touch pro navigaci
   - Scroll/pinch pro zoom
   - Klikněte na značku pro detail

2. **Označení lokality jako hotové**
   - Klikněte na značku
   - V popup karty klikněte "Označit"
   - Značka se změní na zelenou ✓

3. **Navigace k lokalitě**
   - Klikněte na značku
   - Klikněte "Navigovat"
   - Otevře se Google Maps

4. **Filtrace lokalit**
   - Klikněte "Filtry" v hlavičce
   - Vyberte okres(y)
   - Vyberte stav (vše/hotovo/čeká)
   - Vyberte velikost
   - Klikněte "Použít"

5. **Plánování trasy**
   - Klikněte "Trasa" v hlavičce
   - Klikněte na značky v požadovaném pořadí
   - Klikněte "Optimalizovat" pro nejkratší cestu
   - Klikněte "Navigovat" pro start

### Pokročilé funkce

#### Quick Actions
- **Zobrazit vše** - Zoom na všechny lokality
- **Nezpracované** - Zoom na nezpracované lokality
- **Statistiky** - Detailní přehled podle okresů
- **Sdílet** - Sdílení pokroku (clipboard/native share)

#### Keyboard Shortcuts
- `Ctrl+F` / `Cmd+F` - Otevřít filtry
- `Ctrl+R` / `Cmd+R` - Zapnout režim trasy
- `Escape` - Zavřít všechny panely

#### Export dat
- Klikněte "Export" v hlavičce
- CSV soubor se stáhne automaticky
- Obsahuje všechny lokality + GPS + stav

---

## 🎨 Design systém

### Barevná paleta

```css
/* Primary Colors */
--primary: #2563eb        /* Modrá */
--primary-dark: #1e40af   /* Tmavě modrá */
--primary-light: #3b82f6  /* Světle modrá */

/* Status Colors */
--success: #16a34a        /* Zelená */
--warning: #f59e0b        /* Oranžová */
--danger: #dc2626         /* Červená */
--info: #0ea5e9           /* Azurová */

/* Gray Scale */
--gray-50: #f8fafc        /* Nejsvětlejší */
--gray-900: #0f172a       /* Nejtmavší */
```

### Typografie

- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Font Weights**: 600 (semibold), 700 (bold), 800 (extrabold)
- **Font Smoothing**: Antialiased pro ostré zobrazení

### Spacing systém

- **Base unit**: 4px
- **Scale**: xs(4px), sm(8px), md(12px), lg(16px), xl(20px), 2xl(24px), 3xl(32px)

### Border Radius

- **sm**: 8px - Malé prvky
- **md**: 12px - Standard
- **lg**: 16px - Větší karty
- **xl**: 20px - Velké panely
- **2xl**: 24px - Extra velké

### Shadows

- **shadow-xs**: Jemný stín pro hover
- **shadow-sm**: Malý stín pro karty
- **shadow**: Standard stín
- **shadow-md**: Střední stín pro elevated cards
- **shadow-lg**: Velký stín pro panely
- **shadow-xl**: Extra velký pro modals
- **shadow-2xl**: Maximální pro hero sections

### Animace

- **Duration**: 150ms (fast), 300ms (normal), 500ms (slow)
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Hardware acceleration**: transform, opacity

---

## 🔧 Technické specifikace

### Stack

| Technologie | Verze | Účel |
|-------------|-------|------|
| **HTML5** | Latest | Struktura + Sémantika |
| **CSS3** | Latest | Styling + Animace |
| **JavaScript** | ES6+ | Logika aplikace |
| **Leaflet.js** | 1.9.4 | Mapová knihovna |
| **OpenStreetMap** | - | Mapové dlaždice |

### Browser Support

| Prohlížeč | Min. verze | Status |
|-----------|------------|--------|
| Chrome | 90+ | ✅ Plně podporováno |
| Firefox | 88+ | ✅ Plně podporováno |
| Safari | 14+ | ✅ Plně podporováno |
| Edge | 90+ | ✅ Plně podporováno |
| iOS Safari | 14+ | ✅ Plně podporováno |
| Chrome Android | 90+ | ✅ Plně podporováno |

### Výkon

| Metrika | Hodnota | Target |
|---------|---------|--------|
| **First Contentful Paint** | < 1s | ✅ |
| **Time to Interactive** | < 2s | ✅ |
| **Lighthouse Score** | 95+ | ✅ |
| **Animation FPS** | 60 | ✅ |
| **Bundle Size** | 81 KB | ✅ |

### Optimalizace

- ✅ **Lazy loading** map tiles
- ✅ **Debounced** filter aplikace
- ✅ **RequestAnimationFrame** pro animace
- ✅ **CSS transforms** místo position
- ✅ **LocalStorage** caching
- ✅ **Minifikace** v produkci

---

## 📊 Datová struktura

### Location Object

```javascript
{
  "district": "PI",              // Okres (PI/ST/CB/PT/CK/TA)
  "name": "VDJ Amerika II",      // Název lokality
  "area": 3303,                  // Plocha v m²
  "lat": 49.305131,              // GPS šířka
  "lng": 14.166126               // GPS délka
}
```

### State Management

```javascript
// Dokončené lokality (Set)
completedLocations: Set<string>

// Vybrané okresy (Set)
selectedDistricts: Set<string>

// Filtr stavu (string)
statusFilter: 'all' | 'completed' | 'pending'

// Filtr velikosti (string)
sizeFilter: 'all' | 'small' | 'medium' | 'large'

// Route body (Array)
routePoints: Array<{name, lat, lng, marker}>

// Dark mode (boolean)
darkMode: boolean
```

### LocalStorage Keys

```javascript
// Uložené dokončené lokality
'jvs_completed': JSON string Array<string>

// Dark mode preference
'jvs_darkMode': 'true' | 'false'
```

---

## 🎯 Roadmap

### v4.1 (Q2 2026)
- [ ] Funkční úprava lokalit
- [ ] PDF export s mapou
- [ ] Heatmapa dokončených lokalit
- [ ] Časová osa změn
- [ ] Fotodokumentace lokalit

### v4.2 (Q3 2026)
- [ ] Offline mode (PWA)
- [ ] Push notifikace
- [ ] Backend synchronizace
- [ ] Multi-user režim
- [ ] Role-based permissions

### v5.0 (Q4 2026)
- [ ] AI-powered route optimization
- [ ] Voice commands
- [ ] AR navigation
- [ ] Real-time collaboration
- [ ] Advanced analytics dashboard

---

## 🐛 Známé problémy a omezení

### Current Limitations

1. **Route optimization** - Používá jednoduchý nearest neighbor algoritmus
   - **Workaround**: Manuální přeskupování bodů
   - **Fix in**: v4.1 (Google Directions API)

2. **Offline support** - Vyžaduje internetové připojení
   - **Workaround**: Žádný
   - **Fix in**: v4.2 (PWA implementation)

3. **Edit functionality** - Zatím není implementována
   - **Workaround**: Export → úprava v Excel → import
   - **Fix in**: v4.1

### Known Issues

- **iOS Safari scroll bounce** - Může způsobit mírné UI glitche
  - Řešení: `overflow: hidden` na body
  
- **Dark mode flash** - Krátký flash při načítání
  - Řešení: Inline critical CSS (v4.1)

---

## 🤝 Přispívání

Tento projekt je proprietární software pro **JVS a.s.** Přispívání je možné pouze pro autorizované členy týmu.

### Development Setup

```bash
# Clone repository
git clone https://github.com/Dominik-88/JVS2026.git
cd JVS2026

# Checkout development branch
git checkout -b feature/your-feature-name

# Make changes...

# Test locally
live-server

# Commit with conventional commits
git commit -m "feat: add new feature"
git push origin feature/your-feature-name

# Create Pull Request
```

### Coding Standards

- ✅ **ESLint** - JavaScript linting
- ✅ **Prettier** - Code formatting
- ✅ **BEM** - CSS naming convention
- ✅ **Semantic HTML** - Accessibility first
- ✅ **Comments** - JSDoc pro funkce

---

## 📄 Licence

Tento projekt je proprietární software vytvořený pro **JVS a.s.**

```
Copyright © 2026 JVS a.s.
All rights reserved.

Tento software a související dokumentace jsou chráněny autorským právem.
Nesmí být kopírovány, distribuovány nebo modifikovány bez explicitního
písemného souhlasu JVS a.s.
```

---

## 👨‍💻 Autor

**Dominik Schmied**
- Email: [d.schmied@lantaron.cz](mailto:d.schmied@lantaron.cz)
- GitHub: [@Dominik-88](https://github.com/Dominik-88)
- LinkedIn: [Dominik Schmied](https://linkedin.com/in/dominik-schmied)

---

## 🙏 Poděkování

- **Leaflet.js** - Za vynikající open-source mapovou knihovnu
- **OpenStreetMap** - Za mapová data a komunitu
- **JVS a.s.** - Za příležitost vytvořit tento systém
- **Czech water management community** - Za zpětnou vazbu a testování

---

## 📞 Podpora

Pro technickou podporu nebo dotazy kontaktujte:

- **Email**: [d.schmied@lantaron.cz](mailto:d.schmied@lantaron.cz)
- **Phone**: +420 XXX XXX XXX
- **GitHub Issues**: [Report Bug](https://github.com/Dominik-88/JVS2026/issues)

---

## 📚 Dodatečná dokumentace

- [API Reference](docs/API.md) - Dokumentace JavaScript API
- [Component Guide](docs/COMPONENTS.md) - Průvodce komponentami
- [Deployment Guide](docs/DEPLOYMENT.md) - Návod na nasazení
- [Testing Guide](docs/TESTING.md) - Testovací strategie
- [Changelog](CHANGELOG.md) - Historie změn

---

## 🔒 Bezpečnost

Pro nahlášení bezpečnostních problémů kontaktujte:
**security@lantaron.cz**

---

## 📈 Statistiky projektu

![GitHub stars](https://img.shields.io/github/stars/Dominik-88/JVS2026?style=social)
![GitHub forks](https://img.shields.io/github/forks/Dominik-88/JVS2026?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Dominik-88/JVS2026?style=social)

---

**Vytvořeno s ❤️ pro JVS a.s. | 2026**

---

## Quick Start Commands

```bash
# Spuštění aplikace
live-server                    # Doporučeno
python -m http.server 8000     # Alternativa
open index.html                # Přímé otevření

# Git operace
git status                     # Zkontrolovat změny
git add .                      # Přidat všechny změny
git commit -m "your message"   # Commit
git push                       # Push to remote

# Utility příkazy
grep -r "TODO" .              # Najít všechny TODO
wc -l index.html              # Počet řádků kódu
du -sh index.html             # Velikost souboru
```

---

> 💡 **Tip**: Pro nejlepší zážitek použijte Chrome nebo Firefox v poslední verzi.

> ⚡ **Performance Tip**: Vypněte dev tools pro maximální výkon animací.

> 🎯 **Pro Tip**: Použijte `Ctrl+F` pro rychlé otevření filtrů!

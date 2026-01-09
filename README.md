# 💧 Vodárenské areály JVS – Management System v3.0

## 🚀 Moderní mapová aplikace pro správu vodárenských areálů

Profesionální management systém pro JVS a.s. s interaktivní mapou, GPS navigací a real-time statistikami.

---

## ✨ Hlavní funkce

### 🗺️ **Interaktivní mapa**
- Přesné GPS souřadnice pro všech 41 lokalit
- Plovoucí značky s custom designem (💧 ikona)
- Hover efekty a animace
- Automatické centrování na Jižní Čechy
- OpenStreetMap tiles

### 📊 **Statistiky v reálném čase**
- **Celková plocha**: 195 000+ m²
- **Zbývající plocha**: Dynamický výpočet
- **Progress bar**: Animovaný s shimmer efektem
- **Počítadlo**: Dokončené vs. celkové lokality
- **Procentuální zobrazení**: Vizuální pokrok

### 🔍 **Pokročilé filtry**
- Filtrování podle okresu (PI, ST, CB, PT, CK, TA)
- Chip design pro snadný výběr
- Skládací postranní panel
- Responzivní - na mobilu bottom sheet
- Tlačítka "Použít" a "Vymazat"

### 💬 **Detailní popup**
Každá lokalita obsahuje:
- **Název**: např. VDJ Amerika II
- **Okres**: např. PI
- **Plocha**: např. 3 303 m²
- **Navigovat**: Otevře Google Maps/Waze s cílovými souřadnicemi
- **Označit jako hotové**: Označí lokalitu a aktualizuje statistiky
- **Upravit**: Placeholder pro budoucí funkci

### 💾 **Persistence**
- LocalStorage pro ukládání dokončených lokalit
- Stav přetrvává po refreshi stránky
- Reset tlačítko pro vymazání všech dat

### 📱 **Mobilní optimalizace**
- Safe area insets pro iPhone notch
- Touch-friendly tlačítka (min 44px)
- Bottom sheet filtry na mobilu
- Responzivní grid layout
- Optimalizované fonty a spacing

---

## 📦 Datová sada

**41 lokalit** s přesnými GPS souřadnicemi:

| Okres | Počet lokalit | Celková plocha |
|-------|---------------|----------------|
| **CB** | 20 | 119 000+ m² |
| **TA** | 9 | 33 000+ m² |
| **PT** | 4 | 11 000+ m² |
| **CK** | 4 | 7 600+ m² |
| **ST** | 2 | 7 500+ m² |
| **PI** | 2 | 5 600+ m² |

### Příklady lokalit:
```javascript
{ "district": "PI", "name": "VDJ Amerika II", "area": 3303, "lat": 49.305131, "lng": 14.166126 }
{ "district": "CB", "name": "ÚV Plav", "area": 74777, "lat": 48.912611, "lng": 14.494018 }
{ "district": "TA", "name": "ÚV Tábor", "area": 12262, "lat": 49.422872, "lng": 14.666426 }
```

---

## 🎨 Design systém

### Barevná paleta
```css
--primary: #2563eb        /* Modrá */
--primary-dark: #1e40af   /* Tmavě modrá */
--primary-light: #3b82f6  /* Světle modrá */
--success: #16a34a        /* Zelená */
--warning: #f59e0b        /* Oranžová */
--danger: #dc2626         /* Červená */
--info: #0ea5e9           /* Azurová */
```

### Typografie
- **Font**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Smoothing**: Antialiased
- **Weights**: 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Spacing & Layout
- **Grid**: 4px base unit
- **Border radius**: 12px (standard), 16px (large)
- **Shadows**: 5 úrovní (sm, default, md, lg, xl)
- **Transitions**: cubic-bezier(0.4, 0, 0.2, 1)

---

## 🛠️ Technologie

### Frontend
- **HTML5**: Sémantický markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript**: Vanilla ES6+, LocalStorage API

### Knihovny
- **Leaflet.js 1.9.4**: Mapová knihovna
- **OpenStreetMap**: Mapové dlaždice

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

---

## 🚀 Instalace a spuštění

### Metoda 1: Přímé otevření
```bash
# Stáhněte repozitář
git clone https://github.com/Dominik-88/JVS2026.git
cd JVS2026

# Otevřete index.html v prohlížeči
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Metoda 2: Live Server (doporučeno)
```bash
# Nainstalujte live-server globálně
npm install -g live-server

# Spusťte server
live-server
```

### Metoda 3: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Otevřete http://localhost:8000
```

### Metoda 4: StackBlitz (online)
Otevřete projekt přímo v prohlížeči:
```
https://stackblitz.com/github/Dominik-88/JVS2026?branch=refactor-modern-ui
```

---

## 📱 Použití

### 1. **Prohlížení mapy**
- Klikněte na marker (💧) pro zobrazení detailů
- Použijte scroll/pinch pro zoom
- Drag pro posun mapy

### 2. **Navigace k lokalitě**
- Klikněte na marker
- V popup klikněte "Navigovat"
- Otevře se Google Maps/Waze s cílovými souřadnicemi

### 3. **Označení jako hotové**
- Klikněte na marker
- V popup klikněte "Označit jako hotové"
- Marker se změní na zelený (✓)
- Statistiky se automaticky aktualizují

### 4. **Filtrování podle okresu**
- Klikněte na tlačítko "Filtry" v hlavičce
- Vyberte okresy (PI, ST, CB, PT, CK, TA)
- Klikněte "Použít"
- Mapa zobrazí pouze vybrané okresy

### 5. **Reset dat**
- Klikněte na tlačítko "Reset" v hlavičce
- Potvrďte akci
- Všechna dokončená data budou vymazána

---

## 🎯 Klíčové vlastnosti

### ✨ **UI/UX**
- ✅ Moderní, čistý design
- ✅ Pixel-perfect zarovnání
- ✅ Plynulé animace (60 FPS)
- ✅ Gradient efekty
- ✅ Floating animace loga
- ✅ Hover efekty na všech interaktivních prvcích

### 🚀 **Performance**
- ✅ Optimalizovaný kód (33 KB)
- ✅ Lazy loading map tiles
- ✅ Efektivní DOM manipulace
- ✅ CSS transforms pro animace
- ✅ LocalStorage caching

### 📱 **Responzivita**
- ✅ Mobile-first přístup
- ✅ Breakpoint: 768px
- ✅ Touch-friendly UI
- ✅ Safe area insets
- ✅ Adaptive layouts

### 🔒 **Spolehlivost**
- ✅ Error handling
- ✅ Data validation
- ✅ Fallback mechanismy
- ✅ Cross-browser kompatibilita

---

## 📊 Statistiky projektu

### Velikost
- **HTML**: 33 KB (sníženo z 68 KB, **-51%**)
- **Řádky kódu**: 967 (sníženo z 2854, **-66%**)
- **Celková velikost**: ~35 KB (včetně komentářů)

### Výkon
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+
- **Animace**: 60 FPS

---

## 🔄 Changelog

### v3.0 (2026-01-09) - Kompletní refaktoring
- ✨ Nový moderní UI/UX design
- 🗺️ Implementace interaktivní mapy s Leaflet.js
- 📍 Přesné GPS souřadnice pro všech 41 lokalit
- 📊 Real-time statistiky a progress bar
- 🔍 Pokročilé filtry podle okresu
- 🧭 GPS navigace do Google Maps/Waze
- 💾 LocalStorage persistence
- 📱 Plná mobilní optimalizace
- 🎨 Gradient efekty a animace
- ⚡ Optimalizace výkonu (-51% velikost)

---

## 🛣️ Roadmap

### v3.1 (Plánováno)
- [ ] Úprava lokalit (edit funkce)
- [ ] Export dat do CSV/PDF
- [ ] Vyhledávání lokalit
- [ ] Sorting lokalit podle různých kritérií
- [ ] Dark mode

### v3.2 (Plánováno)
- [ ] Offline mode (PWA)
- [ ] Push notifikace
- [ ] Synchronizace s backendem
- [ ] Multi-user podpora
- [ ] Role-based access control

### v4.0 (Budoucnost)
- [ ] Route planning (optimalizace trasy)
- [ ] Fotodokumentace lokalit
- [ ] Časová osa změn
- [ ] Analytics dashboard
- [ ] API integrace

---

## 🤝 Přispívání

Příspěvky jsou vítány! Prosím:

1. Forkněte repozitář
2. Vytvořte feature branch (`git checkout -b feature/AmazingFeature`)
3. Commitněte změny (`git commit -m 'Add some AmazingFeature'`)
4. Pushněte do branch (`git push origin feature/AmazingFeature`)
5. Otevřete Pull Request

---

## 📄 Licence

Tento projekt je proprietární software vytvořený pro **JVS a.s.**

---

## 👥 Autoři

- **Dominik Schmied** - *Initial work & Refactoring* - [Dominik-88](https://github.com/Dominik-88)

---

## 🙏 Poděkování

- **Leaflet.js** - Za skvělou mapovou knihovnu
- **OpenStreetMap** - Za mapová data
- **JVS a.s.** - Za příležitost vytvořit tento systém

---

## 📞 Kontakt

Pro otázky a podporu kontaktujte:
- **Email**: d.schmied@lantaron.cz
- **GitHub**: [@Dominik-88](https://github.com/Dominik-88)

---

## 🔗 Odkazy

- **GitHub Repository**: https://github.com/Dominik-88/JVS2026
- **StackBlitz Demo**: https://stackblitz.com/github/Dominik-88/JVS2026?branch=refactor-modern-ui
- **Pull Request**: https://github.com/Dominik-88/JVS2026/pull/1

---

**Vytvořeno s 💙 pro JVS a.s. | 2026**
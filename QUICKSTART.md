# 🚀 Quick Start Guide

**JVS Management System v4.0 PRO** - Profesionální aplikace pro správu vodárenských areálů

---

## ⚡ Rychlý start (5 minut)

### 1. Otevřete aplikaci

**Možnost A: Lokální soubor**
```bash
# Rozbalte ZIP archiv
unzip jvs-system-v4.0-pro.zip

# Otevřete index.html v prohlížeči
open jvs-refactored/index.html
```

**Možnost B: Live Server**
```bash
# Nainstalujte live-server
npm install -g live-server

# Spusťte server
cd jvs-refactored
live-server
```

### 2. První kroky

1. **Prohlédněte mapu** 🗺️
   - 41 lokalit s GPS souřadnicemi
   - Klikněte na vodní kapku (💧) pro detail

2. **Označte lokalitu** ✅
   - Klikněte na značku
   - V popup kartě: "Označit jako hotové"
   - Značka se změní na zelenou ✓

3. **Navigujte k lokalitě** 🧭
   - Klikněte na značku
   - Tlačítko "Navigovat"
   - Otevře se Google Maps

4. **Filtrujte lokality** 🔍
   - Tlačítko "Filtry" v hlavičce
   - Vyberte okres, stav, velikost
   - "Použít" pro aplikaci filtrů

5. **Naplánujte trasu** 🗺️
   - Tlačítko "Trasa" v hlavičce
   - Klikejte na značky v pořadí
   - "Optimalizovat" pro nejkratší cestu

---

## 📚 Klíčové funkce

| Funkce | Popis | Zkratka |
|--------|-------|---------|
| **Filtry** | Filtrování lokalit | `Ctrl+F` |
| **Trasa** | Plánování trasy | `Ctrl+R` |
| **Export** | CSV export dat | - |
| **Reset** | Vymazat vše | - |
| **Dark mode** | Tmavý režim | 🌙 ikona |

---

## 🎯 Tipy & Triky

### Power User Tips

1. **Klávesové zkratky**
   - `Ctrl+F` - Otevřít filtry
   - `Ctrl+R` - Režim plánování trasy
   - `Escape` - Zavřít panely

2. **Quick Actions** (Statistický panel)
   - **Zobrazit vše** - Zoom na všechny lokality
   - **Nezpracované** - Pouze nedokončené
   - **Statistiky** - Detailní přehled
   - **Sdílet** - Sdílet pokrok

3. **Mobilní gesta**
   - Pinch - Zoom
   - Double tap - Přiblížit
   - Two-finger tap - Oddálit

### Workflow doporučení

**Denní workflow:**
1. Otevřete aplikaci
2. Filtrujte nezpracované lokality
3. Naplánujte optimální trasu
4. Navigujte k první lokalitě
5. Po dokončení označte jako hotové
6. Opakujte pro další lokality

**Týdenní workflow:**
1. Zkontrolujte statistiky
2. Exportujte data do CSV
3. Analyzujte pokrok
4. Naplánujte příští týden

---

## 🆘 Troubleshooting

### Aplikace se nenačítá?

**Řešení:**
```bash
# 1. Zkontrolujte console (F12)
# 2. Zkontrolujte internet připojení
# 3. Vymažte browser cache
# 4. Zkuste jiný prohlížeč
```

### Data zmizela?

**Řešení:**
```javascript
// Zkontrolujte LocalStorage v console
localStorage.getItem('jvs_completed');

// Pokud je null, data byla vymazána
// Obnovte z backupu nebo začněte znovu
```

### Mapa je pomalá?

**Řešení:**
- Zavřete ostatní taby
- Vypněte browser extensions
- Aktualizujte prohlížeč
- Použijte Chrome nebo Firefox

---

## 📞 Potřebujete pomoc?

- 📧 **Email**: d.schmied@lantaron.cz
- 📖 **Dokumentace**: README.md
- ❓ **FAQ**: FAQ.md
- 🐛 **Bug report**: GitHub Issues

---

## 📂 Struktura projektu

```
jvs-refactored/
├── index.html          # Hlavní aplikace (81 KB)
├── README.md           # Hlavní dokumentace
├── CHANGELOG.md        # Historie změn
├── DEPLOYMENT.md       # Průvodce nasazením
├── CONTRIBUTING.md     # Průvodce pro vývojáře
├── LICENSE             # Proprietární licence
└── FAQ.md              # Často kladené otázky
```

---

## ✨ Co je nové v v4.0?

### Hlavní features
- ✅ Kompletně nový design
- ✅ Dark mode
- ✅ Plánovač trasy s optimalizací
- ✅ CSV export
- ✅ Toast notifikace
- ✅ Klávesové zkratky
- ✅ Quick actions
- ✅ Multi-level filtry
- ✅ Vylepšené animace (60 FPS)
- ✅ Mobile optimalizace

### Technické vylepšení
- ⚡ -66% menší codebase
- ⚡ Lepší výkon
- ⚡ Čistější kód
- ⚡ Lepší dokumentace
- ⚡ Accessibility improvements

---

## 🎓 Doporučené zdroje

### Pro uživatele
1. **README.md** - Kompletní přehled
2. **FAQ.md** - Odpovědi na časté otázky
3. **CHANGELOG.md** - Co je nového

### Pro vývojáře
1. **CONTRIBUTING.md** - Jak přispět
2. **DEPLOYMENT.md** - Jak nasadit
3. **Inline dokumentace** - JSDoc v kódu

### Externí zdroje
- [Leaflet.js dokumentace](https://leafletjs.com)
- [OpenStreetMap](https://www.openstreetmap.org)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 🚀 Next Steps

Až zvládnete základy:

1. ⭐ **Prozkoumejte pokročilé funkce**
   - Route optimization
   - Multi-filtering
   - Keyboard shortcuts

2. 📊 **Analyzujte data**
   - Export do CSV
   - Vytvoření grafů v Excelu
   - Tracking pokroku

3. 🔧 **Přizpůsobte aplikaci**
   - Změna barev
   - Přidání vlastních lokalit
   - Custom filters

4. 🤝 **Přispějte**
   - Report bugs
   - Suggest features
   - Contribute code

---

## 📊 Quick Stats

| Metrika | Hodnota |
|---------|---------|
| **Lokality** | 41 |
| **Okresy** | 6 (PI, ST, CB, PT, CK, TA) |
| **Celková plocha** | 195 000+ m² |
| **Funkce** | 40+ |
| **Animace** | 12+ |
| **Velikost aplikace** | 81 KB |
| **Podporované prohlížeče** | 6+ |

---

## 🎉 Gratulujeme!

Jste připraveni používat JVS Management System v4.0 PRO!

**Happy mapping! 🗺️💧**

---

*Pro detailní dokumentaci viz [README.md](README.md)*

*Poslední aktualizace: 9. ledna 2026*

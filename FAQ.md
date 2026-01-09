# ❓ Často Kladené Otázky (FAQ)

Odpovědi na nejčastější dotazy ohledně JVS Management System v4.0 PRO.

---

## 📋 Obsah

1. [Obecné otázky](#obecné-otázky)
2. [Instalace a nastavení](#instalace-a-nastavení)
3. [Používání aplikace](#používání-aplikace)
4. [Technické problémy](#technické-problémy)
5. [Data a soukromí](#data-a-soukromí)
6. [Výkon a optimalizace](#výkon-a-optimalizace)
7. [Mobilní zařízení](#mobilní-zařízení)
8. [Vývoj a přispívání](#vývoj-a-přispívání)

---

## Obecné otázky

### Co je JVS Management System?

JVS Management System je profesionální webová aplikace pro správu vodárenských areálů JVS a.s. Umožňuje:
- 🗺️ Interaktivní mapu s GPS lokacemi
- 📊 Real-time statistiky a pokrok
- 🧭 GPS navigaci k lokalitám
- 🗺️ Plánování optimálních tras
- 📥 Export dat do CSV

### Jaké jsou minimální požadavky?

**Hardware:**
- Jakékoli zařízení s internetovým připojením
- Doporučeno: 2GB+ RAM

**Software:**
- Moderní webový prohlížeč:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
- Aktivované JavaScript
- LocalStorage podporováno

### Je aplikace zdarma?

Ano, aplikace je proprietární software vytvořený pro JVS a.s. a je dostupný pro autorizované uživatele bez dalších poplatků.

### Potřebuji účet nebo registraci?

Ne, aplikace funguje kompletně v prohlížeči bez nutnosti registrace nebo přihlášení. Všechna data jsou uložena lokálně ve vašem prohlížeči.

### Funguje aplikace offline?

**Částečně.** 
- ✅ Aplikace samotná funguje offline
- ✅ Uložená data zůstávají dostupná
- ❌ Mapové dlaždice vyžadují internet
- ❌ GPS navigace vyžaduje internet

*Plná offline podpora je plánována ve verzi 4.2 (Q3 2026)*

---

## Instalace a nastavení

### Jak nainstaluji aplikaci?

Aplikace nevyžaduje instalaci! Stačí:

1. Otevřít `index.html` v prohlížeči
2. Nebo navštívit nasazenou URL
3. Hotovo! 🎉

### Jak nastavím aplikaci na vlastním serveru?

Viz [DEPLOYMENT.md](DEPLOYMENT.md) pro detailní instrukce. Základní postup:

```bash
# 1. Nahrát soubory na server
scp index.html user@server:/var/www/jvs/

# 2. Nastavit web server (Nginx/Apache)
# 3. Otevřít v prohlížeči
```

### Mohu změnit barvy nebo design?

Ano! Všechny barvy jsou definovány jako CSS custom properties:

```css
:root {
  --primary: #2563eb;        /* Změňte na vaši barvu */
  --success: #16a34a;
  --danger: #dc2626;
  /* ... */
}
```

### Jak přidám vlastní lokality?

Upravte `locations` array v JavaScriptu:

```javascript
const locations = [
  {
    "district": "CB",
    "name": "Moje nová lokalita",
    "area": 5000,
    "lat": 49.123456,
    "lng": 14.654321
  },
  // ... další lokality
];
```

---

## Používání aplikace

### Jak označím lokalitu jako dokončenou?

1. Klikněte na značku (💧) na mapě
2. V popup kartě klikněte "Označit jako hotové"
3. Značka se změní na zelenou ✓
4. Statistiky se automaticky aktualizují

### Jak navigovat k lokalitě?

1. Klikněte na značku
2. V popup kartě klikněte "Navigovat" 🧭
3. Otevře se Google Maps s cílovou lokací

### Jak filtruji lokality?

1. Klikněte "Filtry" 🔍 v hlavičce
2. Vyberte okresy (PI, ST, CB, PT, CK, TA)
3. Vyberte stav (vše/hotovo/čeká)
4. Vyberte velikost (<1k/1-5k/>5k m²)
5. Klikněte "Použít" ✓

### Jak vytvořím optimální trasu?

1. Klikněte "Trasa" 🗺️ v hlavičce
2. Klikněte na značky v požadovaném pořadí
3. Klikněte "Optimalizovat" ✨ pro nejkratší cestu
4. Klikněte "Navigovat" 🧭 pro start v Google Maps

### Jak exportuji data?

1. Klikněte "Export" 📥 v hlavičce
2. CSV soubor se automaticky stáhne
3. Otevřete v Excelu nebo Google Sheets

### Jak resetuji všechna data?

1. Klikněte "Reset" 🔄 v hlavičce
2. Potvrďte akci
3. Všechna dokončená data budou vymazána

**⚠️ Pozor:** Tato akce je nevratná!

### Jak zapnu tmavý režim?

Klikněte na ikonu měsíce 🌙 v hlavičce. Preference se uloží automaticky.

---

## Technické problémy

### Mapa se nenačítá

**Možné příčiny:**
1. 🌐 Žádné internetové připojení
2. 🚫 Blokován přístup k OpenStreetMap
3. 🔒 CORS policy

**Řešení:**
```bash
# Zkontrolujte console (F12)
# Zkontrolujte network tab
# Zkontrolujte, že Leaflet.js CDN je dostupný
```

### LocalStorage je plný

**Chyba:** "QuotaExceededError"

**Řešení:**
1. Resetujte data (Reset tlačítko)
2. Vymažte browser cache
3. Zkontrolujte LocalStorage quota:

```javascript
// Chrome: ~10MB
// Firefox: ~10MB
// Safari: ~5MB
```

### Statistiky se neaktualizují

**Řešení:**
1. Obnovte stránku (F5)
2. Vymažte browser cache
3. Zkontrolujte console na errors
4. Vypněte browser extensions

### Tlačítka nefungují

**Možné příčiny:**
1. JavaScript je zakázán
2. Browser extension blokuje
3. JavaScript error

**Řešení:**
1. Zapněte JavaScript v nastavení
2. Vypněte ad-blockers
3. Zkontrolujte console (F12)

### Popup se nezobrazuje

**Řešení:**
1. Zkontrolujte z-index konflikty
2. Zkontrolujte CSS loading
3. Vymažte browser cache

### Animace jsou trhané

**Řešení:**
1. Zavřete zbytečné taby
2. Vypněte browser extensions
3. Aktualizujte grafické ovladače
4. Použijte hardware acceleration:

```
chrome://flags
Enable GPU rasterization
Enable hardware-accelerated video decode
```

---

## Data a soukromí

### Kde jsou uložena moje data?

Všechna data jsou uložena **lokálně** ve vašem prohlížeči pomocí LocalStorage API. Žádná data nejsou odesílána na server.

### Jsou moje data bezpečná?

✅ **Ano.** Data jsou uložena pouze ve vašem prohlížeči a:
- Nejsou sdílena s třetími stranami
- Nejsou odesílána na internet
- Zůstávají na vašem zařízení
- Jsou mazána při vymazání browser dat

### Co se stane, když vymažu cookies/cache?

**LocalStorage je oddělen od cookies**, ale:
- ⚠️ Vymazání "Site data" smaže LocalStorage
- ✅ Vymazání pouze "Cookies" data zachová
- ✅ Vymazání pouze "Cache" data zachová

**Doporučení:** Před vymazáním exportujte data!

### Mohu exportovat/zálohovat data?

Ano! Několik možností:

**1. CSV Export (built-in)**
```
Klikněte "Export" → Stáhne CSV soubor
```

**2. Manuální backup**
```javascript
// V browser console
const backup = {
  completed: localStorage.getItem('jvs_completed'),
  darkMode: localStorage.getItem('jvs_darkMode')
};
console.log(JSON.stringify(backup));
// Zkopírujte a uložte
```

**3. Browser export**
```
Chrome DevTools → Application → LocalStorage
Right-click → Copy
```

### Mohu importovat data?

**Momentálně ne.** Import funkcionalita je plánována ve verzi 4.1.

**Workaround:**
```javascript
// V browser console
localStorage.setItem('jvs_completed', '["VDJ Amerika II","VDJ Zdoba"]');
// Obnovte stránku
```

---

## Výkon a optimalizace

### Proč je aplikace pomalá?

**Možné příčiny:**
1. 🌐 Pomalé internetové připojení (načítání map)
2. 💻 Starý hardware
3. 🔌 Příliš mnoho otevřených tabů
4. 🔌 Browser extensions

**Optimalizace:**
- Zavřete zbytečné taby
- Vypněte extensions
- Aktualizujte prohlížeč
- Používejte Chrome/Firefox

### Jak zlepším výkon animací?

```css
/* Přidejte do CSS */
* {
  will-change: auto !important;
}

/* Nebo vypněte animace */
* {
  animation: none !important;
  transition: none !important;
}
```

### Kolik dat aplikace spotřebuje?

**První načtení:**
- HTML/CSS/JS: ~81 KB
- Leaflet.js: ~140 KB
- Mapové dlaždice: ~500 KB - 2 MB (podle zoomu)
- **Celkem: ~700 KB - 2.2 MB**

**Další návštěvy:**
- Browser cache: ~10 KB
- Mapové dlaždice: variabilní

### Lze aplikaci zkomprimovat?

Ano! Minifikace může ušetřit ~30%:

```bash
# HTML minify
npm install -g html-minifier
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# Nebo použijte online nástroje
# https://www.willpeavy.com/tools/minifier/
```

---

## Mobilní zařízení

### Funguje na mobilu?

✅ **Ano!** Aplikace je plně responzivní a optimalizovaná pro:
- 📱 Telefony (320px+)
- 📱 Tablety (768px+)
- 💻 Desktopy (1024px+)

### Proč filtry vypadají jinak na mobilu?

Na mobilu se filtry zobrazují jako **bottom sheet** (panel zdola) místo bočního panelu. To zajišťuje lepší thumb reach a UX.

### Jak zoomovat na mapě?

- **Pinch gesture** - Štípnutí dvěma prsty
- **Double tap** - Dvojité klepnutí přiblíží
- **Two-finger tap** - Dvojité klepnutí dvěma prsty oddálí
- **+/- tlačítka** - V levém horním rohu

### Mohu nainstalovat jako aplikaci?

**Momentálně ne.** PWA (Progressive Web App) podpora je plánována ve verzi 4.2.

**Workaround (iOS):**
1. Otevřete v Safari
2. Klepněte na Share → Add to Home Screen
3. Vytvoří shortcut na domovské obrazovce

**Workaround (Android):**
1. Otevřete v Chrome
2. Menu → Add to Home screen
3. Vytvoří shortcut

### GPS nefunguje na mobilu

**Řešení:**
1. Povolit location permissions v nastavení prohlížeče
2. Povolit location pro konkrétní website
3. Zkontrolovat, že GPS je zapnutá na zařízení

---

## Vývoj a přispívání

### Jak mohu přispět?

Viz [CONTRIBUTING.md](CONTRIBUTING.md) pro detailní instrukce.

**Rychlý start:**
```bash
# 1. Fork repository
# 2. Clone
git clone https://github.com/your-username/JVS2026.git

# 3. Create branch
git checkout -b feature/my-feature

# 4. Make changes
# 5. Commit
git commit -m "feat: add awesome feature"

# 6. Push & Create PR
```

### Kde najdu API dokumentaci?

JavaScript funkce jsou dokumentovány pomocí JSDoc komentářů přímo v kódu. Pro full API reference viz inline dokumentace.

### Můžu použít tento kód ve svém projektu?

⚠️ **Ne.** Tento software je proprietární a licencovaný pro JVS a.s. Viz [LICENSE](LICENSE) pro detaily.

### Jak nahlásit bug?

1. Zkontrolujte [existing issues](https://github.com/Dominik-88/JVS2026/issues)
2. Pokud není nalezen, vytvořte nový issue
3. Použijte bug report template
4. Přiložte screenshots/console errors

### Kde mohu požádat o novou funkci?

Vytvořte [feature request issue](https://github.com/Dominik-88/JVS2026/issues/new) s detailním popisem.

---

## 🆘 Stále potřebujete pomoc?

### Kontaktní možnosti

**Technical Support:**
- 📧 Email: d.schmied@lantaron.cz
- 🐛 GitHub Issues: [Create Issue](https://github.com/Dominik-88/JVS2026/issues)
- 💬 GitHub Discussions: [Start Discussion](https://github.com/Dominik-88/JVS2026/discussions)

**Business Inquiries:**
- 📧 Email: info@jvs.cz
- 📞 Phone: +420 XXX XXX XXX

### Response Times

- 🔴 **Critical bugs**: 24 hodin
- 🟡 **Normal bugs**: 2-3 dny
- 🟢 **Feature requests**: 1-2 týdny
- 🔵 **Questions**: 1-2 dny

---

## 📚 Další zdroje

- [README.md](README.md) - Přehled projektu
- [CHANGELOG.md](CHANGELOG.md) - Historie změn
- [DEPLOYMENT.md](DEPLOYMENT.md) - Průvodce nasazením
- [CONTRIBUTING.md](CONTRIBUTING.md) - Průvodce přispíváním
- [LICENSE](LICENSE) - Licenční podmínky

---

**Nenašli jste odpověď? [Zeptejte se!](mailto:d.schmied@lantaron.cz)**

*Poslední aktualizace: 9. ledna 2026*

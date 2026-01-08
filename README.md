# 💧 Vodárenské areály – Ultra Management System v3.0

> Profesionální management systém pro správu vodárenských areálů JVS a.s. s pokročilými funkcemi, offline podporou a mobilní optimalizací.

![Version](https://img.shields.io/badge/version-3.0.0-blue)
![PWA](https://img.shields.io/badge/PWA-enabled-green)
![Mobile](https://img.shields.io/badge/mobile-optimized-orange)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 🚀 **NOVÉ FUNKCE V3.0**

### ✨ Hlavní vylepšení

#### 📱 **Mobilní optimalizace**
- ✅ Plná podpora iPhone 14+ s Safe Area
- ✅ Haptic Feedback (vibrační odezva)
- ✅ Swipe gestures pro rychlou navigaci
- ✅ Touch-optimalizované ovládací prvky
- ✅ Responzivní design pro všechny velikosti obrazovek

#### 🎯 **PWA (Progressive Web App)**
- ✅ Instalovatelná jako nativní aplikace
- ✅ Offline režim s Service Worker
- ✅ Push notifikace
- ✅ Background sync
- ✅ App shortcuts (rychlé akce)

#### 📸 **Fotodokumentace**
- ✅ Přidávání fotografií k objektům
- ✅ Camera API integrace
- ✅ Galerie s náhledem
- ✅ Fullscreen zobrazení
- ✅ Lokální ukládání (max 5MB/foto)

#### 🗺️ **Pokročilá mapa**
- ✅ Marker clustering
- ✅ Heatmapa hustoty objektů
- ✅ Geolokace uživatele
- ✅ "Najdi nejbližší objekt"
- ✅ Kontextové menu (long press)

#### 📊 **Analytics & Reporting**
- ✅ Real-time statistiky
- ✅ Chart.js grafy
- ✅ Finanční trendy
- ✅ Export do CSV/JSON/PDF
- ✅ Prediktivní analýzy

#### 🌙 **Dark Mode**
- ✅ Automatické přepínání podle systému
- ✅ Manuální toggle
- ✅ Optimalizované barvy pro noční režim

#### ⚡ **Performance**
- ✅ Lazy loading
- ✅ Debounced search
- ✅ Auto-save každých 30s
- ✅ LocalStorage persistence
- ✅ Optimalizované animace

---

## 📦 **INSTALACE**

### Metoda 1: GitHub Pages (Doporučeno pro iPhone)

#### Krok 1: Vytvoření GitHub repozitáře

1. **Otevřete Safari na iPhone** a přejděte na [github.com](https://github.com)
2. Přihlaste se k účtu
3. Klikněte na **"+"** vpravo nahoře → **"New repository"**
4. Vyplňte:
   - **Repository name**: `vodarny-management`
   - **Description**: `Vodárenské areály management systém`
   - ✅ Zaškrtněte **"Public"**
   - ✅ Zaškrtněte **"Add a README file"**
5. Klikněte **"Create repository"**

#### Krok 2: Nahrání souborů

**Varianta A: Přes webové rozhraní (jednodušší)**

1. V repozitáři klikněte na **"Add file"** → **"Create new file"**
2. Do pole **"Name your file"** napište: `index.html`
3. Zkopírujte celý obsah souboru `index.html` (viz výše)
4. Vložte do editoru
5. Scroll dolů a klikněte **"Commit new file"**
6. Opakujte pro:
   - `sw.js`
   - `manifest.json`
   - `README.md`

**Varianta B: Přes GitHub Desktop (pokročilé)**

1. Stáhněte [GitHub Desktop](https://desktop.github.com/)
2. Clone repozitář
3. Zkopírujte všechny soubory do složky
4. Commit & Push

#### Krok 3: Aktivace GitHub Pages

1. V repozitáři přejděte na **"Settings"**
2. V levém menu klikněte na **"Pages"**
3. V sekci **"Source"** vyberte:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Klikněte **"Save"**
5. Počkejte 1-2 minuty
6. Obnovte stránku – zobrazí se zelený banner s URL:


#### Krok 4: Instalace na iPhone

1. **Otevřete URL** v Safari na iPhone
2. Klikněte na **ikonu sdílení** (čtverec se šipkou nahoru)
3. Scroll dolů a vyberte **"Přidat na plochu"**
4. Upravte název (např. "Vodárny JVS")
5. Klikněte **"Přidat"**
6. ✅ **Hotovo!** Aplikace je nyní na vaší domovské obrazovce

---

### Metoda 2: Netlify (Alternativa)

1. Přejděte na [netlify.com](https://netlify.com)
2. Přihlaste se přes GitHub
3. Klikněte **"Add new site"** → **"Import an existing project"**
4. Vyberte váš GitHub repozitář
5. Build settings:
- **Build command**: (prázdné)
- **Publish directory**: `/`
6. Klikněte **"Deploy site"**
7. Po dokončení získáte URL: `https://random-name.netlify.app`
8. Otevřete na iPhone a přidejte na plochu

---

### Metoda 3: Cloudflare Pages

1. Přejděte na [pages.cloudflare.com](https://pages.cloudflare.com)
2. Přihlaste se
3. **"Create a project"** → **"Connect to Git"**
4. Vyberte GitHub repozitář
5. Build settings:
- **Build command**: (prázdné)
- **Build output directory**: `/`
6. **"Save and Deploy"**
7. URL: `https://vodarny-management.pages.dev`

---

## 🎨 **VYTVOŘENÍ IKON**

Pro plnou PWA funkcionalitu potřebujete ikony:

### Online generátor (nejjednodušší)

1. Přejděte na [favicon.io](https://favicon.io/favicon-generator/)
2. Vytvořte ikonu s:
- **Text**: 💧 (emoji kapky)
- **Background**: `#2563eb` (modrá)
- **Font**: Arial Black
3. Stáhněte ZIP
4. Nahrajte do repozitáře:
- `icon-192.png` (192×192)
- `icon-512.png` (512×512)

### Manuální vytvoření

Pokud máte logo:
1. Otevřete v editoru (Photoshop, GIMP, Canva)
2. Vytvořte čtvercové verze:
- 192×192 px → uložte jako `icon-192.png`
- 512×512 px → uložte jako `icon-512.png`
3. Nahrajte do repozitáře

---

## 📱 **POUŽITÍ APLIKACE**

### Základní workflow

#### 1️⃣ **Filtrace objektů**
Otevřete aplikace
V panelu vpravo vyberte záložku "🔍 Filtry"
Používejte:
Vyhledávání podle názvu
Filtr okresu
Kategorie filtrů
Stav filtru
Klikněte na statistické karty pro rychlý filtr
prostý text


#### 2️⃣ **Záznam práce**
Přepněte na záložku "⚡ Akce"
Vyplňte formulář:
Jméno zaměstnance
Vyberte objekt
Odpracované hodiny
Pozemek m²
Ujeto km
Referenční bod
Poznámka (volitelné)
"💾 Uložit záznam práce"
prostý text


#### 3️⃣ **Finanční záznam**
V tabu "⚡ Akce" přejděte dolů
Vyplňte:
Příjem (Kč)
Náklad (Kč)
Popis transakcí
Referenční bod
Sledujte vypočtený zisk
"💰 Uložit finanční záznam"
prostý text


#### 4️⃣ **Fotodokumentace**
Přepněte na záložku „📸 Foto“
Vyberte objekt z rozbalovací nabídky
Klikněte na "📷 Přidat fotografii"
Vyfotit nebo vybrat z galerie
Fotografie se automaticky provede
Klikněte na foto pro celou obrazovku
prostý text


#### 5️⃣ **Export dat**
Klikněte na "💾 Export" v horní liště
Vyberte formát:
CSV - Seznam objektů
CSV - Důkazní práce
CSV - Finance
JSON - Kompletní data
PDF - Profesionální zpráva
Soubor se automaticky stáhne
prostý text


---

## 🔧 **POKROČILÉ FUNKCE**

### Geolokace

**Najdi nejbližší objekt:**
Povolte přístup k poloze (při prvním spuštění)
Klikněte na "📍 Nejbližší" v horní liště
Mapa se automaticky přiblíží k nejbližšímu objektu
Zobrazuje se vzdálenost v km
prostý text


### Kontextové menu

**Long press na marker:**
Stiskněte a podržte značku na mapě (0,5s)
Otevře se kontextové menu s akcemi:
➕ Přidat práci
📸 Zobrazit fotografie
🧭 Navigovat
prostý text


### Dark Mode

**Přepnutí tématu:**
Klikněte na ikonu 🌙 v horní liště
Téma se přepne mezi světlým/tmavým
Nastavení se automaticky provede
prostý text


### Offline režim

**Práce bez internetu:**
Aplikace automaticky cachuje všechna data
Při offline režimu:
✅ Mapa funguje (pokud byla načtena)
✅ Všechny záznamy se ukládají lokálně
✅ Fotografie se ukládají do LocalStorage
⚠️ Export funguje, ale bez online mapových dlaždic
Po obnovení připojení se data automaticky synchronizují
prostý text


---

## 📊 **DATOVÁ STRUKTURA**

### LocalStorage

Aplikace ukládá data do `localStorage` pod klíčem `appState`:

```javascript
{
 totalProfit: 0, // Celkový zisk v Kč
 logs: [], // Historie záznamů
 photos: {}, // Fotografie {objectName: [photoDataUrls]}
 syncStatus: 'online', // 'online' | 'offline' | 'syncing'
 darkMode: false, // Dark mode zapnutý/vypnutý
 filters: {
 name: '',
 okres: 'all',
 kategorie: 'all',
 status: 'all'
 }
}
Záloha dat

Export kompletních dat:

prostý text

1. Klikněte "💾 Export"
2. Vyberte "JSON - Kompletní data"
3. Stáhne se soubor `export_YYYY-MM-DD.json`
4. Obsahuje:
   - Všechny objekty
   - Všechny záznamy práce
   - Všechny finanční záznamy
   - Všechny fotografie (Base64)
   - Nastavení aplikace
Obnovení ze zálohy:

javascriptu

// V konzoli prohlížeče:
const backup = /* vložte obsah JSON souboru */;
localStorage.setItem('appState', JSON.stringify(backup.state));
location.reload();
🐛 ŘEŠENÍ POTÍŽÍ

Problém: Mapa se nenačítá

Řešení:

1. Zkontrolujte internetové připojení
2. Obnovte stránku (pull down)
3. Vyčistěte cache:
   - Safari → Nastavení → Safari → Vymazat historii a data
4. Přeinstalujte aplikaci:
   - Smažte ikonu z plochy
   - Otevřete URL v Safari
   - Přidejte znovu na plochu
Problém: Data se neukládají

Řešeni

1. Zkontrolujte, zda není zapnutý režim Soukromé prohlížení
2. Zkontrolujte volné místo v zařízení
3. Otevřete Safari → Nastavení → Safari
4. Ujistěte se, že "Blokovat všechny cookies" je VYPNUTO
Problém: Fotografie se nenačítají

Řešení:

1. Povolte přístup ke kameře:
   - Nastavení → Safari → Kamera → Povolit
2. Zkontrolujte velikost fotografie (max 5MB)
3. Zkontrolujte volné místo v LocalStorage:
   - Safari má limit ~5-10MB pro LocalStorage
   - Smažte staré fotografie nebo exportujte data
Problém: Push notifikace nefungují

Řešení:

1. Povolte notifikace:
   - Nastavení → Notifikace → Safari → Povolit
2. Push notifikace vyžadují HTTPS
3. GitHub Pages automaticky používá HTTPS ✅
Problém: Aplikace je pomalá

Řešení:

1. Vyčistěte historii záznamů:
   - Tab "📋 Evidence" → "🗑️ Smazat"
2. Smažte staré fotografie
3. Exportujte data a resetujte aplikaci:
   - Export → JSON
   - Safari → Vymazat data webu
   - Znovu načtěte aplikaci
🔐 BEZPEČNOST

Ochrana osobních údajů

✅ Všechna data jsou uložena lokálně v zařízení
✅ Žádné odesílání na server (pokud není implementováno)
✅ Fotografie jsou v Base64 v LocalStorage
⚠️ Záloha je vaší odpovědností (pravidelný export)

Doporučení

1. Pravidelně exportujte data (týdně)
2. Ukládejte exporty na bezpečné místo (iCloud, Google Drive)
3. Nesdílejte URL aplikace s neautorizovanými osobami
4. Používejte silné heslo pro GitHub účet
🚀 BUDOUCÍ VYLEPŠENÍ

Plánované funkce v4.0

Integrace backendu (Node.js + MongoDB)
Víceuživatelská podpora s autentizací
Synchronizace v reálném čase mezi zařízeními
Profesionální fotografie cloudového úložiště
Predikce údržby s využitím umělé inteligence
Automatické plánování inspekcí
Pokročilé PDF zprávy s grafy
Integrace s Kalendářem Google
QR kódy pro objekty
Mobilní aplikace (React Native)
📞 PODPORA

Kontakt

E-mail : support@jvs.cz
Telefon : +420 XXX XXX XXX
Problémy na GitHubu : [repozitář]/problémy
Dokumentace

Technická dokumentace : viz.DOCUMENTATION.md
Seznam změn : viz.CHANGELOG.md
Reference API : vizAPI.md
📄 LICENCE

Licence MIT

Autorská práva (c) 2024 JVS as

Tímto se uděluje bezplatně povolení jakékoli osobě, která získá kopii tohoto softwaru a souvisejících dokumentačních souborů („Software“), nakládat se Softwarem bez omezení, včetně, bez omezení, práv používat, kopírovat, upravovat, slučovat, publikovat, distribuovat, sublicencovat a/nebo prodávat kopie Software, a umožnit osobám, kterým je Software poskytnut, aby tak činily, za následujících podmínek:

Výše uvedené upozornění na autorská práva a toto upozornění na povolení musí být součástí všech kopií nebo podstatných částí softwaru.

SOFTWARE JE POSKYTOVÁN „TAK, JAK JE“, BEZ JAKÉKOLI ZÁRUKY, VÝSLOVNÉ NEBO PŘEDPOKLÁDANÉ, VČETNĚ, ALE NEJEN, ZÁRUK OBCHODOVATELNOSTI, VHODNOSTI PRO URČITÝ ÚČEL A NEPORUŠENÍ PRÁV. AUTOŘI ANI DRŽITELÉ AUTORSKÝCH PRÁV V ŽÁDNÉM PŘÍPADĚ NEBUDOU ODPOVĚDNI ZA ŽÁDNÉ NÁROKY, ŠKODY NEBO JINÉ ZÁVAZKY, AŤ UŽ V ZÁVISLOSTI OD SMLOUVY, DĚLSKÉHO PORUŠENÍ NEBO JINAK, VYPLÝVAJÍCÍ Z, NA ZÁKLADĚ NEBO V SOUVISLOSTI SE SOFTWAREM NEBO S POUŽÍVÁNÍM NEBO JINÝMI ÚKONY V JEHO OBSAHU.

🙏 PODĚKOVÁNÍ

Děkujeme všem, kteří přispěli k vývoji tohoto projektu:

Leaflet.js - Open-source mapová knihovna
Chart.js - Krásné grafy
OpenStreetMap - Mapová data
GitHub - Hosting a verzování
JVS as - Zadání a testování
Vytvořeno s ❤️ pro JVS as

Verze : 3.0.0 Ultra
Datum : 2024-01-08
Autor : AI Development Team

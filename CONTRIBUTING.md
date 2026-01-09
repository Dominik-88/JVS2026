# 🤝 Contributing Guide - Průvodce přispíváním

Děkujeme za váš zájem přispět do projektu JVS Management System! Tento průvodce vás provede celým procesem.

---

## 📋 Obsah

1. [Code of Conduct](#code-of-conduct)
2. [Jak přispět](#jak-přispět)
3. [Development setup](#development-setup)
4. [Coding standards](#coding-standards)
5. [Git workflow](#git-workflow)
6. [Pull request proces](#pull-request-proces)
7. [Issue guidelines](#issue-guidelines)
8. [Testing](#testing)
9. [Documentation](#documentation)

---

## Code of Conduct

### Naše závazky

- 🤝 Vytvářet přátelské a inkluzivní prostředí
- 🎯 Zaměřit se na to, co je nejlepší pro projekt
- 💬 Používat konstruktivní jazyk
- 🙏 Respektovat rozdílné názory
- ✨ Přijímat zpětnou vazbu s grácií

### Nepřijatelné chování

- ❌ Trolling, urážlivé komentáře
- ❌ Obtěžování jakéhokoliv druhu
- ❌ Zveřejňování soukromých informací
- ❌ Spam a reklama
- ❌ Jiné neetické chování

---

## Jak přispět

### Typy příspěvků

1. **🐛 Bug reports** - Nahlášení chyb
2. **✨ Feature requests** - Návrhy nových funkcí
3. **📝 Documentation** - Vylepšení dokumentace
4. **💻 Code contributions** - Opravy a nové funkce
5. **🎨 Design improvements** - UI/UX vylepšení
6. **🌍 Translations** - Překlady do jiných jazyků

### Co potřebujeme

**Vysoká priorita:**
- 🔴 Bug fixes pro kritické chyby
- 🔴 Performance optimalizace
- 🟡 Accessibility improvements
- 🟡 Mobile responsiveness fixes
- 🟢 Documentation updates

**Střední priorita:**
- 🟡 New features z roadmapy
- 🟡 UI/UX enhancements
- 🟢 Code refactoring
- 🟢 Test coverage

**Nízká priorita:**
- 🟢 Nice-to-have features
- 🟢 Visual tweaks
- 🟢 Minor optimizations

---

## Development Setup

### Požadavky

- **Git** 2.0+
- **Moderní prohlížeč** (Chrome 90+, Firefox 88+, Safari 14+)
- **Text editor** (VS Code doporučeno)
- **Live server** (live-server, Python http.server, nebo VS Code extension)

### Instalace

```bash
# 1. Forkněte repository na GitHubu
# Klikněte na "Fork" button

# 2. Klonujte váš fork
git clone https://github.com/your-username/JVS2026.git
cd JVS2026

# 3. Přidejte upstream remote
git remote add upstream https://github.com/Dominik-88/JVS2026.git

# 4. Vytvořte feature branch
git checkout -b feature/my-awesome-feature

# 5. Spusťte development server
live-server
# nebo
python -m http.server 8000
```

### Doporučené VS Code extensions

```json
{
  "recommendations": [
    "ritwickdey.liveserver",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "formulahendry.auto-close-tag",
    "formulahendry.auto-rename-tag",
    "bradlc.vscode-tailwindcss",
    "kisstkondoros.vscode-codemetrics"
  ]
}
```

---

## Coding Standards

### HTML

```html
<!-- ✅ Správně -->
<div class="stats-panel" role="complementary" aria-label="Statistiky">
  <h2 class="panel-title">Statistiky</h2>
  <p class="panel-description">Přehled dokončených lokalit</p>
</div>

<!-- ❌ Špatně -->
<div class="statsPanel">
  <h2>Statistiky</h2>
  <p>Přehled dokončených lokalit</p>
</div>
```

**Pravidla:**
- ✅ Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`)
- ✅ ARIA attributes pro accessibility
- ✅ Kebab-case pro class names
- ✅ Data attributes pro JS hooks
- ✅ Alt text pro všechny obrázky
- ❌ Inline styles (použijte CSS classes)
- ❌ Deprecated tags (`<font>`, `<center>`, atd.)

### CSS

```css
/* ✅ Správně - BEM-like naming */
.stats-panel {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Positioning */
  position: fixed;
  top: 92px;
  left: 20px;
  
  /* Box model */
  padding: var(--spacing-2xl);
  margin: 0;
  
  /* Visual */
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  
  /* Animation */
  transition: var(--transition);
}

.stats-panel__header {
  margin-bottom: var(--spacing-xl);
}

.stats-panel--hidden {
  opacity: 0;
  pointer-events: none;
}

/* ❌ Špatně */
.sp {
  background: #fff;
  padding: 24px;
}
```

**Pravidla:**
- ✅ CSS Variables pro barvy, spacing, atd.
- ✅ Mobile-first přístup
- ✅ BEM-like naming convention
- ✅ Logické seskupení properties
- ✅ Comments pro složité části
- ❌ !important (kromě nutných případů)
- ❌ Hardcoded hodnoty (použijte variables)
- ❌ Deep nesting (max 3 úrovně)

### JavaScript

```javascript
// ✅ Správně
/**
 * Přidá marker na mapu pro danou lokalitu
 * @param {Object} location - Objekt lokality s GPS souřadnicemi
 * @param {boolean} isCompleted - Zda je lokalita dokončena
 * @returns {L.Marker} Leaflet marker instance
 */
function addMarker(location, isCompleted) {
  const icon = L.divIcon({
    className: `custom-marker${isCompleted ? ' completed' : ''}`,
    iconSize: [44, 44],
    iconAnchor: [22, 44]
  });
  
  const marker = L.marker([location.lat, location.lng], { icon })
    .bindPopup(() => createPopup(location, isCompleted))
    .addTo(map);
  
  return marker;
}

// ❌ Špatně
function am(l, c) {
  var i = L.divIcon({
    className: 'cm' + (c ? ' c' : ''),
    iconSize: [44, 44]
  });
  return L.marker([l.lat, l.lng], { icon: i }).addTo(map);
}
```

**Pravidla:**
- ✅ camelCase pro variables a functions
- ✅ UPPER_CASE pro konstanty
- ✅ JSDoc comments pro funkce
- ✅ Arrow functions kde je to vhodné
- ✅ Template literals místo string concatenation
- ✅ Destructuring kde je to možné
- ✅ Error handling (try-catch)
- ❌ var (použijte let/const)
- ❌ Zkrácené názvy proměnných
- ❌ Magic numbers (použijte named constants)

### Naming Conventions

```javascript
// Variables & Functions
const totalArea = 195000;          // camelCase
let selectedDistricts = new Set(); // camelCase
function updateStats() {}          // camelCase

// Constants
const MAX_LOCATIONS = 1000;        // UPPER_CASE
const API_ENDPOINT = '/api/v1';    // UPPER_CASE

// Classes
class RouteOptimizer {}            // PascalCase

// CSS Classes
.stats-panel {}                    // kebab-case
.btn-primary {}                    // kebab-case

// IDs
<div id="filterPanel">             // camelCase
<div id="routePanel">              // camelCase
```

---

## Git Workflow

### Branch naming

```bash
# Feature branches
feature/route-optimization
feature/dark-mode-toggle
feature/export-pdf

# Bug fix branches
bugfix/marker-overlap
bugfix/ios-safari-scroll
fix/localstorage-quota

# Documentation
docs/api-reference
docs/deployment-guide

# Refactoring
refactor/stats-calculation
refactor/css-architecture

# Performance
perf/lazy-loading
perf/animation-optimization
```

### Commit messages

Používáme [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format
<type>(<scope>): <subject>

# Types
feat:     Nová funkce
fix:      Bug fix
docs:     Documentation
style:    Formatting, missing semi colons, atd.
refactor: Code refactoring
perf:     Performance improvements
test:     Testing
chore:    Maintenance

# Examples
feat(map): add route optimization algorithm
fix(filters): resolve district filter not applying
docs(readme): update installation instructions
style(css): improve button hover effects
refactor(markers): extract marker creation logic
perf(animations): use CSS transforms instead of position
test(stats): add unit tests for area calculation
chore(deps): update Leaflet to v1.9.4
```

### Commit best practices

```bash
# ✅ Správně
git commit -m "feat(export): add CSV export with UTF-8 BOM support"
git commit -m "fix(popup): resolve popup positioning on mobile devices"
git commit -m "docs(api): add JSDoc comments for all public functions"

# ❌ Špatně
git commit -m "updated stuff"
git commit -m "fix bug"
git commit -m "WIP"
```

---

## Pull Request proces

### Před vytvořením PR

```bash
# 1. Ujistěte se, že jste na aktuální verzi
git checkout main
git pull upstream main

# 2. Rebase your feature branch
git checkout feature/my-feature
git rebase main

# 3. Otestujte vše lokálně
# - Zkontrolujte console na errors
# - Otestujte na mobile
# - Zkontrolujte všechny features

# 4. Pushněte do vašeho forku
git push origin feature/my-feature
```

### PR Template

```markdown
## 📝 Description
Stručný popis změn

## 🎯 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## 🧪 Testing
Jak jste testovali změny?

## 📸 Screenshots
(pokud jsou relevantní)

## ✅ Checklist
- [ ] Kód je otestovaný
- [ ] Console je bez errors/warnings
- [ ] Mobile responsiveness zkontrolována
- [ ] Documentation aktualizována
- [ ] Commit messages následují conventional commits
```

### Code Review Process

1. **Automatic checks** - GitHub Actions (pokud nastaveno)
2. **Code review** - Minimálně 1 schválení
3. **Testing** - Reviewer otestuje změny
4. **Merge** - Squash and merge do main

### Co revieweři hledají

- ✅ Kód funguje podle očekávání
- ✅ Dodržuje coding standards
- ✅ Bez console errors/warnings
- ✅ Mobile responsiveness
- ✅ Performance impact
- ✅ Accessibility considerations
- ✅ Documentation aktualizována

---

## Issue Guidelines

### Bug Report Template

```markdown
## 🐛 Bug Description
Jasný popis problému

## 📋 Steps to Reproduce
1. Jděte na '...'
2. Klikněte na '...'
3. Scroll dolů na '...'
4. Vidíte chybu

## ✅ Expected Behavior
Co by se mělo stát

## ❌ Actual Behavior
Co se skutečně stalo

## 📸 Screenshots
(pokud jsou relevantní)

## 🌍 Environment
- OS: [e.g. Windows 10, macOS 12]
- Browser: [e.g. Chrome 96, Firefox 95]
- Device: [e.g. iPhone 13, Desktop]
- Screen size: [e.g. 1920x1080, 375x667]

## 📝 Additional Context
Jakékoliv další informace
```

### Feature Request Template

```markdown
## 💡 Feature Description
Jasný popis funkce

## 🎯 Problem
Jaký problém to řeší?

## 💭 Proposed Solution
Jak by to mohlo fungovat?

## 🔄 Alternatives
Jiné možné přístupy?

## 📸 Mockups
(pokud máte)

## 📊 Priority
- [ ] High (critical)
- [ ] Medium (important)
- [ ] Low (nice to have)
```

---

## Testing

### Manual Testing Checklist

```markdown
## Desktop Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## Mobile Testing
- [ ] iOS Safari
- [ ] Chrome Android
- [ ] Samsung Internet

## Features to Test
- [ ] Map loading and interaction
- [ ] Marker popups
- [ ] Filters application
- [ ] Statistics updates
- [ ] Route planning
- [ ] Dark mode toggle
- [ ] Export functionality
- [ ] LocalStorage persistence
- [ ] Keyboard shortcuts
- [ ] Toast notifications

## Responsive Testing
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

## Performance
- [ ] Page load < 2s
- [ ] Animations 60 FPS
- [ ] No memory leaks
- [ ] LocalStorage quota check
```

### Browser DevTools Checks

```javascript
// Console - žádné errors/warnings
console.log('No errors should appear here');

// Network - check for failed requests
// Performance - Lighthouse audit > 90

// LocalStorage - verify data structure
localStorage.getItem('jvs_completed');
localStorage.getItem('jvs_darkMode');

// Memory - check for leaks
// Open Performance Monitor in Chrome DevTools
```

---

## Documentation

### Code Comments

```javascript
// ✅ Správně - Vysvětluje PROČ, ne CO
/**
 * Optimalizuje trasu pomocí nearest neighbor algoritmu.
 * Tento přístup není optimální pro TSP, ale je rychlý
 * a poskytuje dostatečně dobré výsledky pro <50 lokalit.
 */
function optimizeRoute() {
  // Implementace...
}

// ❌ Špatně - Zbytečné, vysvětluje zřejmé
// This function optimizes the route
function optimizeRoute() {
  // Loop through route points
  for (let i = 0; i < routePoints.length; i++) {
    // ...
  }
}
```

### README Updates

Když přidáváte novou funkci, aktualizujte:

- [ ] README.md - Feature list
- [ ] CHANGELOG.md - Under "Unreleased"
- [ ] Inline code comments
- [ ] JSDoc comments

---

## 🎖️ Recognition

Všichni přispěvatelé budou uznáni v:

- README.md contributors section
- CHANGELOG.md
- GitHub contributors page
- Release notes

---

## 📞 Questions?

- 💬 GitHub Discussions
- 📧 Email: d.schmied@lantaron.cz
- 🐛 GitHub Issues (pro technical questions)

---

## License

Přispěním do tohoto projektu souhlasíte s tím, že váš příspěvek bude licencován pod stejnou licencí jako projekt (Proprietary License - JVS a.s.).

---

**Děkujeme, že pomáháte vylepšovat JVS Management System! 🙏**

*Poslední aktualizace: 9. ledna 2026*

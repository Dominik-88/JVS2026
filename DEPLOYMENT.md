# 🚀 Deployment Guide - Průvodce nasazením

Tento průvodce vás provede všemi možnostmi nasazení aplikace JVS Management System v4.0 PRO.

---

## 📋 Obsah

1. [Příprava před nasazením](#příprava-před-nasazením)
2. [Lokální testování](#lokální-testování)
3. [Statické hosting platformy](#statické-hosting-platformy)
4. [Cloud platformy](#cloud-platformy)
5. [Vlastní server](#vlastní-server)
6. [CDN konfigurace](#cdn-konfigurace)
7. [HTTPS a SSL](#https-a-ssl)
8. [Monitoring a Analytics](#monitoring-a-analytics)
9. [Backup strategie](#backup-strategie)
10. [Troubleshooting](#troubleshooting)

---

## 1. Příprava před nasazením

### ✅ Pre-deployment checklist

- [ ] Zkontrolovat funkčnost všech features
- [ ] Otestovat na všech podporovaných prohlížečích
- [ ] Otestovat responsivitu (mobile, tablet, desktop)
- [ ] Zkontrolovat console na errors/warnings
- [ ] Optimalizovat obrázky a assety
- [ ] Minifikovat HTML/CSS/JS (volitelné)
- [ ] Nastavit správné meta tagy
- [ ] Zkontrolovat GPS souřadnice
- [ ] Testovat LocalStorage funkčnost
- [ ] Zkontrolovat CORS nastavení pro mapy

### 🔍 Quality Assurance

```bash
# Validace HTML
https://validator.w3.org/

# Lighthouse audit (Chrome DevTools)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

# Cross-browser testing
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
```

---

## 2. Lokální testování

### Metoda 1: Live Server (Doporučeno)

```bash
# Instalace
npm install -g live-server

# Spuštění
cd jvs-refactored
live-server

# Pokročilé nastavení
live-server --port=8080 --host=0.0.0.0 --open=/index.html
```

### Metoda 2: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# S custom portem
python3 -m http.server 3000
```

### Metoda 3: Node.js http-server

```bash
# Instalace
npm install -g http-server

# Spuštění
http-server -p 8080 -o

# S CORS
http-server -p 8080 --cors
```

### Metoda 4: VS Code Live Server Extension

1. Nainstalujte extension "Live Server"
2. Otevřete `index.html`
3. Klikněte pravým tlačítkem → "Open with Live Server"

---

## 3. Statické hosting platformy

### 🌐 GitHub Pages (ZDARMA)

**Výhody**: Zdarma, snadné CI/CD, custom domain support
**Nevýhody**: Pouze public repositories (free tier)

```bash
# Příprava
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Dominik-88/JVS2026.git
git push -u origin main

# Nastavení GitHub Pages
# 1. Jděte do Settings → Pages
# 2. Source: Deploy from branch
# 3. Branch: main, folder: / (root)
# 4. Save

# URL: https://dominik-88.github.io/JVS2026/
```

### ☁️ Netlify (ZDARMA)

**Výhody**: Automatický SSL, custom domains, edge functions
**Nevýhody**: 100GB bandwidth/měsíc na free tier

```bash
# Metoda 1: Drag & Drop
# 1. https://app.netlify.com/drop
# 2. Přetáhněte složku s projektem
# 3. Hotovo!

# Metoda 2: Netlify CLI
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod

# Metoda 3: GitHub integration
# 1. Připojte GitHub účet
# 2. Vyberte repository
# 3. Build settings: (žádné, statický site)
# 4. Deploy
```

**netlify.toml** (volitelné):

```toml
[build]
  publish = "."
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 🔷 Vercel (ZDARMA)

**Výhody**: Edge network, automatický SSL, analytics
**Nevýhody**: Bandwidth limity na free tier

```bash
# Instalace
npm install -g vercel

# Deploy
vercel

# Produkční deploy
vercel --prod

# GitHub integration
# 1. https://vercel.com/new
# 2. Import Git Repository
# 3. Automatic deployments
```

**vercel.json** (volitelné):

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 🚀 Cloudflare Pages (ZDARMA)

**Výhody**: Unlimited bandwidth, workers, global CDN
**Nevýhody**: Build time limity

```bash
# Metoda 1: Wrangler CLI
npm install -g wrangler
wrangler login
wrangler pages project create jvs-system
wrangler pages publish .

# Metoda 2: GitHub integration
# 1. https://pages.cloudflare.com/
# 2. Connect GitHub
# 3. Select repository
# 4. Deploy
```

### 📦 Firebase Hosting

**Výhody**: Google infrastructure, custom domains, SSL
**Nevýhody**: Vyžaduje Firebase projekt

```bash
# Instalace
npm install -g firebase-tools

# Login
firebase login

# Inicializace
firebase init hosting
# Vyberte: Use existing project nebo Create new
# Public directory: . (current)
# Single-page app: Yes
# GitHub actions: No (zatím)

# Deploy
firebase deploy --only hosting

# Custom domain
# Firebase Console → Hosting → Add custom domain
```

**firebase.json**:

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=7200"
          }
        ]
      }
    ]
  }
}
```

---

## 4. Cloud platformy

### ☁️ AWS S3 + CloudFront

**Výhody**: Škálovatelné, levné, globální CDN
**Nevýhody**: Komplexnější nastavení

```bash
# 1. Vytvořte S3 bucket
aws s3 mb s3://jvs-system

# 2. Uploadujte soubory
aws s3 sync . s3://jvs-system --acl public-read

# 3. Aktivujte static website hosting
aws s3 website s3://jvs-system --index-document index.html

# 4. Vytvořte CloudFront distribution
# AWS Console → CloudFront → Create Distribution
# Origin: S3 bucket
# SSL: Request certificate from ACM
```

### 🌊 Azure Static Web Apps

```bash
# Azure CLI
az login
az staticwebapp create \
    --name jvs-system \
    --resource-group myResourceGroup \
    --source . \
    --location "westeurope" \
    --branch main \
    --app-location "/" \
    --output-location "."
```

### ☁️ Google Cloud Storage

```bash
# 1. Vytvořte bucket
gsutil mb gs://jvs-system

# 2. Upload
gsutil -m cp -r * gs://jvs-system

# 3. Make public
gsutil iam ch allUsers:objectViewer gs://jvs-system

# 4. Configure website
gsutil web set -m index.html -e 404.html gs://jvs-system
```

---

## 5. Vlastní server

### 🐧 Linux Server (Ubuntu/Debian)

#### Nginx konfigurace

```bash
# Instalace Nginx
sudo apt update
sudo apt install nginx

# Vytvořte konfiguraci
sudo nano /etc/nginx/sites-available/jvs-system
```

```nginx
server {
    listen 80;
    server_name jvs.example.com;
    root /var/www/jvs-system;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Aktivace site
sudo ln -s /etc/nginx/sites-available/jvs-system /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Upload souborů
scp -r * user@server:/var/www/jvs-system/
```

#### Apache konfigurace

```bash
# Instalace Apache
sudo apt install apache2

# Vytvořte konfiguraci
sudo nano /etc/apache2/sites-available/jvs-system.conf
```

```apache
<VirtualHost *:80>
    ServerName jvs.example.com
    DocumentRoot /var/www/jvs-system

    <Directory /var/www/jvs-system>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Security headers
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"

    ErrorLog ${APACHE_LOG_DIR}/jvs-error.log
    CustomLog ${APACHE_LOG_DIR}/jvs-access.log combined
</VirtualHost>
```

```bash
# Aktivace
sudo a2ensite jvs-system
sudo a2enmod headers rewrite
sudo systemctl reload apache2
```

### 🪟 Windows Server (IIS)

1. Instalujte IIS role
2. Vytvořte nový website
3. Nastav root na složku s aplikací
4. Konfigurujte MIME types
5. Nastavte SSL certificate

---

## 6. CDN konfigurace

### Cloudflare (Doporučeno)

```bash
# 1. Přidejte doménu do Cloudflare
# 2. Změňte nameservers
# 3. Nastavte DNS records:

# A record
jvs.example.com → your-server-ip (proxied)

# 4. Page Rules:
# Cache Level: Cache Everything
# Browser Cache TTL: 1 year (static assets)
```

### Optimalizace

- Enable Auto Minify (HTML, CSS, JS)
- Enable Brotli compression
- Polish images (optional)
- Enable HTTP/2
- Enable HTTP/3 (QUIC)

---

## 7. HTTPS a SSL

### Let's Encrypt (ZDARMA)

```bash
# Certbot instalace
sudo apt install certbot python3-certbot-nginx

# Získání certifikátu (Nginx)
sudo certbot --nginx -d jvs.example.com

# Získání certifikátu (Apache)
sudo certbot --apache -d jvs.example.com

# Auto-renewal
sudo certbot renew --dry-run
```

### Cloudflare SSL

- Free: Flexible SSL (Cloud flare to origin unencrypted)
- Recommended: Full (strict) - Vyžaduje SSL na origin

---

## 8. Monitoring a Analytics

### Google Analytics 4

```html
<!-- Přidejte do <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="jvs.example.com" src="https://plausible.io/js/script.js"></script>
```

### Uptime monitoring

- **UptimeRobot** - https://uptimerobot.com (ZDARMA)
- **Pingdom** - https://pingdom.com
- **StatusCake** - https://statuscake.com

---

## 9. Backup strategie

### Automatický backup script

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y-%m-%d_%H-%M-%S)
BACKUP_DIR="/backups/jvs-system"
SOURCE="/var/www/jvs-system"

# Vytvoř backup
tar -czf "$BACKUP_DIR/jvs-backup-$DATE.tar.gz" "$SOURCE"

# Smaž staré backupy (>30 dní)
find "$BACKUP_DIR" -name "jvs-backup-*.tar.gz" -mtime +30 -delete

echo "Backup completed: jvs-backup-$DATE.tar.gz"
```

```bash
# Přidejte do crontab (denní backup ve 2:00)
crontab -e
0 2 * * * /path/to/backup.sh
```

---

## 10. Troubleshooting

### Běžné problémy

#### 404 Not Found

```bash
# Zkontrolujte root directory
ls -la /var/www/jvs-system/

# Zkontrolujte permissions
sudo chown -R www-data:www-data /var/www/jvs-system
sudo chmod -R 755 /var/www/jvs-system
```

#### CORS errors

```nginx
# Nginx - přidejte do location block
add_header Access-Control-Allow-Origin "*" always;
```

#### LocalStorage not working

- Zkontrolujte HTTPS (LocalStorage vyžaduje secure context)
- Zkontrolujte browser privacy settings
- Zkontrolujte storage quota

#### Mapy se nenačítají

- Zkontrolujte internet připojení
- Zkontrolujte CORS policy
- Zkontrolujte console pro errors
- Ověřte Leaflet.js CDN dostupnost

---

## 📞 Podpora

Pokud narazíte na problémy:

1. Zkontrolujte console v DevTools
2. Zkontrolujte network tab
3. Zkontrolujte server logs
4. Kontaktujte: d.schmied@lantaron.cz

---

**Poslední aktualizace: 9. ledna 2026**

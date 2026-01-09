# 🚀 Deployment Guide

Návod pro nasazení aplikace Vodárenské areály JVS do produkce.

---

## 📋 Obsah

1. [Požadavky](#požadavky)
2. [Lokální vývoj](#lokální-vývoj)
3. [GitHub Pages](#github-pages)
4. [Netlify](#netlify)
5. [Vercel](#vercel)
6. [Vlastní server](#vlastní-server)
7. [Docker](#docker)
8. [Troubleshooting](#troubleshooting)

---

## 🔧 Požadavky

### Minimální požadavky
- Moderní webový prohlížeč (Chrome 90+, Firefox 88+, Safari 14+)
- HTTP server (pro lokální vývoj)
- Git (pro verzování)

### Doporučené
- Node.js 16+ (pro development tools)
- npm nebo yarn (package manager)
- VS Code (editor)

---

## 💻 Lokální vývoj

### Metoda 1: Live Server (doporučeno)

```bash
# Nainstalujte live-server globálně
npm install -g live-server

# Klonujte repozitář
git clone https://github.com/Dominik-88/JVS2026.git
cd JVS2026

# Přepněte na refactor branch
git checkout refactor-modern-ui

# Spusťte server
live-server

# Aplikace běží na http://localhost:8080
```

### Metoda 2: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Otevřete http://localhost:8000
```

### Metoda 3: Node.js HTTP Server

```bash
# Nainstalujte http-server
npm install -g http-server

# Spusťte server
http-server -p 8000

# Otevřete http://localhost:8000
```

### Metoda 4: VS Code Live Server

1. Nainstalujte rozšíření "Live Server"
2. Otevřete `index.html`
3. Klikněte pravým tlačítkem → "Open with Live Server"

---

## 🌐 GitHub Pages

### Automatické nasazení

```bash
# 1. Přepněte na main branch
git checkout main

# 2. Mergněte refactor branch
git merge refactor-modern-ui

# 3. Pushněte do GitHub
git push origin main

# 4. Povolte GitHub Pages v nastavení repozitáře
# Settings → Pages → Source: main branch → Save
```

### Ruční nasazení

```bash
# 1. Vytvořte gh-pages branch
git checkout -b gh-pages

# 2. Pushněte do GitHub
git push origin gh-pages

# 3. Nastavte GitHub Pages na gh-pages branch
```

### URL aplikace
```
https://dominik-88.github.io/JVS2026/
```

---

## 🚀 Netlify

### Metoda 1: Drag & Drop

1. Otevřete [Netlify](https://app.netlify.com/)
2. Přetáhněte složku projektu do "Sites"
3. Aplikace je okamžitě nasazena

### Metoda 2: Git Integration

1. Připojte GitHub repozitář
2. Nastavte build settings:
   ```
   Build command: (prázdné)
   Publish directory: .
   ```
3. Deploy site

### Metoda 3: Netlify CLI

```bash
# Nainstalujte Netlify CLI
npm install -g netlify-cli

# Přihlaste se
netlify login

# Inicializujte projekt
netlify init

# Nasaďte
netlify deploy --prod
```

### Custom doména

```bash
# V Netlify dashboard
Domain settings → Add custom domain → jvs-vodarna.netlify.app
```

---

## ⚡ Vercel

### Metoda 1: Vercel CLI

```bash
# Nainstalujte Vercel CLI
npm install -g vercel

# Přihlaste se
vercel login

# Nasaďte
vercel

# Produkční nasazení
vercel --prod
```

### Metoda 2: Git Integration

1. Importujte GitHub repozitář
2. Nastavte framework: "Other"
3. Deploy

### URL aplikace
```
https://jvs2026.vercel.app
```

---

## 🖥️ Vlastní server

### Apache

```apache
# .htaccess
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Komprese
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/html "access plus 1 hour"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Nginx

```nginx
server {
    listen 80;
    server_name jvs-vodarna.cz;
    root /var/www/jvs2026;
    index index.html;

    # Komprese
    gzip on;
    gzip_types text/html text/css application/javascript;

    # Cache
    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Nasazení

```bash
# 1. Připojte se k serveru
ssh user@server.com

# 2. Klonujte repozitář
cd /var/www
git clone https://github.com/Dominik-88/JVS2026.git
cd JVS2026
git checkout refactor-modern-ui

# 3. Nastavte oprávnění
chmod -R 755 .

# 4. Restartujte server
sudo systemctl restart nginx  # nebo apache2
```

---

## 🐳 Docker

### Dockerfile

```dockerfile
FROM nginx:alpine

# Kopírujte soubory
COPY index.html /usr/share/nginx/html/
COPY manifest.json /usr/share/nginx/html/
COPY sw.js /usr/share/nginx/html/

# Nginx konfigurace
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Build a spuštění

```bash
# Build image
docker build -t jvs2026 .

# Spusťte container
docker run -d -p 8080:80 --name jvs-app jvs2026

# Otevřete http://localhost:8080
```

### Docker Compose

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

```bash
# Spusťte
docker-compose up -d

# Zastavte
docker-compose down
```

---

## 🔍 Troubleshooting

### Problém: Mapa se nenačítá

**Řešení:**
```javascript
// Zkontrolujte konzoli prohlížeče
// Ujistěte se, že Leaflet.js je načten
console.log(typeof L); // mělo by vrátit "object"

// Zkontrolujte síťové požadavky
// OpenStreetMap tiles by měly být načteny
```

### Problém: LocalStorage nefunguje

**Řešení:**
```javascript
// Zkontrolujte, zda je LocalStorage dostupný
if (typeof(Storage) !== "undefined") {
    console.log("LocalStorage je podporován");
} else {
    console.log("LocalStorage není podporován");
}

// Zkontrolujte kvótu
navigator.storage.estimate().then(estimate => {
    console.log(`Použito: ${estimate.usage} / ${estimate.quota}`);
});
```

### Problém: Markery se nezobrazují

**Řešení:**
```javascript
// Zkontrolujte GPS souřadnice
locations.forEach(loc => {
    console.log(`${loc.name}: ${loc.lat}, ${loc.lng}`);
});

// Zkontrolujte zoom level
map.setView([49.0, 14.3], 10);
```

### Problém: Responzivita nefunguje

**Řešení:**
```html
<!-- Zkontrolujte viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Zkontrolujte CSS media queries -->
@media (max-width: 768px) {
    /* Mobile styles */
}
```

### Problém: CORS chyby

**Řešení:**
```bash
# Spusťte lokální server místo otevření souboru
# Soubor: file:///path/to/index.html ❌
# Server: http://localhost:8080 ✅

# Použijte live-server nebo http-server
npm install -g live-server
live-server
```

---

## 📊 Performance optimalizace

### Komprese

```bash
# Gzip komprese
gzip -9 index.html
gzip -9 styles.css
gzip -9 script.js
```

### Minifikace

```bash
# HTML minifikace
npm install -g html-minifier
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# CSS minifikace
npm install -g csso-cli
csso styles.css -o styles.min.css

# JavaScript minifikace
npm install -g terser
terser script.js -o script.min.js -c -m
```

### CDN

```html
<!-- Použijte CDN pro knihovny -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

---

## 🔒 Bezpečnost

### HTTPS

```bash
# Certbot (Let's Encrypt)
sudo certbot --nginx -d jvs-vodarna.cz
```

### Security Headers

```nginx
# Nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' https:; script-src 'self' 'unsafe-inline' https://unpkg.com; style-src 'self' 'unsafe-inline' https://unpkg.com;" always;
```

---

## 📞 Podpora

Pro pomoc s nasazením kontaktujte:
- **Email**: d.schmied@lantaron.cz
- **GitHub Issues**: https://github.com/Dominik-88/JVS2026/issues

---

**Vytvořeno pro JVS a.s. | 2026**
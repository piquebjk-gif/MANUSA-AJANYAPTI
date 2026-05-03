#!/bin/bash

echo "AI Nexus - Windows Masaüstü Uygulaması Derleme Aracı"
echo "===================================================="
echo ""

# Kontrol et: Electron kurulu mu?
if ! command -v electron &> /dev/null; then
    echo "Electron bulunamadı. Kuruluyor..."
    npm install -g electron electron-builder
fi

# Kontrol et: Web build var mı?
if [ ! -d "web" ]; then
    echo "Web build bulunamadı. Oluşturuluyor..."
    npm run build 2>/dev/null || echo "Web build oluşturulamadı"
fi

# Electron uygulamasını derle
echo ""
echo "Electron uygulaması derleniyor..."
cd electron-app

# Dependencies kur
npm install

# Windows installer oluştur
echo "Windows installer oluşturuluyor..."
npm run build:win

echo ""
echo "Derleme tamamlandı!"
echo "Çıktı: dist/ klasöründe bulunabilir"

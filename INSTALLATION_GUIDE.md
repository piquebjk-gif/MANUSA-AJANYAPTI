# MED AJANS - Kurulum Kılavuzu

## Sistem Gereksinimleri

- **Node.js:** 18.0+
- **Python:** 3.9+
- **Docker:** 20.0+ (opsiyonel)
- **RAM:** 4GB minimum
- **Disk:** 10GB minimum

## Hızlı Kurulum

### 1. Bağımlılıkları Yükle

```bash
cd /home/ubuntu/ai-nexus
npm install
pip install -r requirements.txt
```

### 2. Ortam Değişkenlerini Ayarla

Manus Management UI'da Secrets panelinden API keys'i ayarlayın:
- LLM_API_KEY
- INSTAGRAM_ACCESS_TOKEN
- FACEBOOK_ACCESS_TOKEN
- TikTok credentials
- Database URL

### 3. Veritabanını Konfigüre Et

```bash
npm run db:push
npm run db:migrate
```

### 4. Sistemi Başlat

```bash
# Geliştirme modu
npm run dev

# Üretim modu
npm run build
npm start
```

### 5. Android APK Oluştur

```bash
npm run android:build
```

### 6. Windows Masaüstü Uygulaması Oluştur

```bash
npm run electron:build
```

## Ajanları Tetikle

```bash
# Instagram DM yanıtlama
curl -X POST http://localhost:3000/api/agents/start \
  -d '{"agentId": 1, "platform": "instagram"}'

# Facebook Mesajları
curl -X POST http://localhost:3000/api/agents/start \
  -d '{"agentId": 2, "platform": "facebook"}'

# TikTok Otomasyonu
curl -X POST http://localhost:3000/api/agents/start \
  -d '{"agentId": 3, "platform": "tiktok"}'
```

## Lisans

MED AJANS tamamen **ücretsiz** ve **API tabanlı**. Tüm özellikleri kullanabilirsiniz.


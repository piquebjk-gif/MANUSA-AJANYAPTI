# AI Nexus - Mobil Uygulama Tasarımı

## Genel Konsept
Claude/Anthropic modellerine benzer, gelişmiş yapay zeka yeteneklerine sahip modern mobil asistan uygulaması. Kullanıcılar metin sohbeti, kod yazma, görsel analiz, dosya işleme ve daha birçok gelişmiş özellikten yararlanabilir.

## Ekran Listesi

### 1. **Splash Screen** (Başlangıç Ekranı)
- AI Nexus logosu ve uygulama adı
- Yükleme animasyonu
- Otomatik olarak Home ekranına geçiş

### 2. **Home Screen** (Ana Ekran)
- Hoş geldiniz mesajı
- Son konuşmalar listesi (geçmiş sohbetler)
- Hızlı başlama butonları:
  - Yeni Sohbet
  - Kod Yardımcısı
  - Görsel Analiz
  - Dosya İşleme
- Önerilen sorular (örnek prompts)

### 3. **Chat Screen** (Sohbet Ekranı)
- Sohbet geçmişi (mesajlar ve yanıtlar)
- Metin giriş alanı (multi-line)
- Ek dosya/görsel yükleme butonu
- Gönder butonu
- Mesajlarda kopyala, yeniden oluştur, sil seçenekleri
- Yazıyor... göstergesi
- Durdur butonu (aktif istek için)

### 4. **Code Assistant Screen** (Kod Yardımcısı)
- Kod yazma/düzenleme alanı
- Dil seçimi (Python, JavaScript, TypeScript, vb.)
- Kod açıklaması paneli
- Hata ayıklama önerileri
- Kopyala ve Çalıştır butonları

### 5. **Image Analysis Screen** (Görsel Analiz)
- Görsel seçme/yükleme alanı
- Seçilen görselin önizlemesi
- Analiz sonuçları paneli
- Detaylı açıklama
- Görsel işleme seçenekleri

### 6. **File Processing Screen** (Dosya İşleme)
- Dosya seçme alanı
- Desteklenen dosya türleri gösterimi
- İşlem türü seçimi (analiz, dönüştürme, özetleme)
- İşlem sonuçları
- İndirme/Paylaşma seçenekleri

### 7. **Settings Screen** (Ayarlar)
- Tema seçimi (Açık/Koyu)
- Dil seçimi
- API Anahtarı yönetimi (isteğe bağlı)
- Sohbet Geçmişi Temizle
- Hakkında
- Gizlilik Politikası

### 8. **Conversation Detail Screen** (Sohbet Detayı)
- Geçmiş sohbetin tam görünümü
- Sohbeti düzenleme seçenekleri
- Sohbeti silme seçeneği
- Sohbeti paylaşma seçeneği

## Birincil İçerik ve İşlevsellik

### Ana Ekran (Home)
- **Başlık**: "AI Nexus - Gelişmiş Yapay Zeka Asistanı"
- **Son Konuşmalar**: Tarih ve konu başlıklarıyla liste
- **Hızlı Erişim Kartları**: 4 ana özelliğe erişim
- **Önerilen Sorular**: Başlangıç için örnek sorular

### Sohbet Ekranı (Chat)
- **Mesaj Balonu**: Kullanıcı (sağ, mavi) ve AI (sol, gri)
- **Metin Giriş**: Placeholder "Sorunuzu yazın..."
- **Dosya Ekleme**: Görsel ve dosya yükleme seçeneği
- **İşlem Göstergeleri**: Yazıyor..., Yükleniyor...

### Kod Yardımcısı
- **Kod Editörü**: Sözdizimi vurgulama
- **Dil Seçimi**: Dropdown menü
- **Çıktı Paneli**: Sonuçlar ve hata mesajları
- **Aksiyon Butonları**: Kopyala, Çalıştır, Temizle

### Görsel Analiz
- **Görsel Alanı**: Yükleme ve önizleme
- **Analiz Sonuçları**: Yapılandırılmış veri gösterimi
- **Detay Paneli**: Genişletilmiş açıklama

### Dosya İşleme
- **Dosya Seçici**: Sürükle-bırak veya dokunma
- **İşlem Seçimi**: Dropdown menü
- **Sonuç Gösterimi**: Metin veya indirilebilir dosya
- **Paylaşma**: Sosyal medya veya e-posta

## Anahtar Kullanıcı Akışları

### Akış 1: Yeni Sohbet Başlatma
1. Home ekranında "Yeni Sohbet" butonuna dokunma
2. Chat ekranına yönlendir
3. Soru yazma
4. Gönder butonuna dokunma
5. AI yanıtını görüntüleme
6. Sohbeti devam ettirme veya sonlandırma

### Akış 2: Kod Yazma ve Açıklama
1. Home ekranında "Kod Yardımcısı" butonuna dokunma
2. Code Assistant ekranına yönlendir
3. Dil seçimi
4. Kod yazma veya yapıştırma
5. "Açıkla" veya "Hata Ayıkla" butonuna dokunma
6. Sonuçları görüntüleme

### Akış 3: Görsel Analiz
1. Home ekranında "Görsel Analiz" butonuna dokunma
2. Image Analysis ekranına yönlendir
3. Görsel seçme (kamera veya galeri)
4. Analiz butonuna dokunma
5. Sonuçları görüntüleme ve detayları okuma

### Akış 4: Dosya İşleme
1. Home ekranında "Dosya İşleme" butonuna dokunma
2. File Processing ekranına yönlendir
3. Dosya seçme
4. İşlem türü seçimi
5. İşleme butonuna dokunma
6. Sonuçları indirme veya paylaşma

### Akış 5: Ayarlar Yönetimi
1. Tab bar'dan "Ayarlar" sekmesine dokunma
2. Settings ekranına yönlendir
3. Tema, dil veya diğer seçenekleri değiştirme
4. Değişiklikler otomatik kaydedilir

## Renk Seçimleri

### Ana Renkler
- **Primary (Mavi)**: `#0a7ea4` - Güven ve teknoloji hissi
- **Secondary (Mor)**: `#8b5cf6` - Yaratıcılık ve inovasyon
- **Accent (Yeşil)**: `#10b981` - Başarı ve pozitif geri bildirim

### Arka Plan Renkleri
- **Light Mode**:
  - Background: `#ffffff` (Beyaz)
  - Surface: `#f5f5f5` (Açık Gri)
  - Border: `#e5e7eb` (Hafif Gri)

- **Dark Mode**:
  - Background: `#0f172a` (Koyu Lacivert)
  - Surface: `#1e293b` (Koyu Gri)
  - Border: `#334155` (Orta Gri)

### Metin Renkleri
- **Foreground**: `#11181c` (Açık) / `#ecedee` (Koyu)
- **Muted**: `#687076` (Açık) / `#9ba1a6` (Koyu)

### Durum Renkleri
- **Success**: `#22c55e` (Yeşil)
- **Warning**: `#f59e0b` (Turuncu)
- **Error**: `#ef4444` (Kırmızı)

## Tasarım İlkeleri

1. **Minimalist Arayüz**: Temiz ve odaklanmış tasarım
2. **Hızlı Erişim**: Sık kullanılan özellikler kolay ulaşılabilir
3. **Görsel Geri Bildirim**: Tüm etkileşimler anında geri bildirim verir
4. **Responsive Tasarım**: Tüm ekran boyutlarında mükemmel görünüm
5. **Erişilebilirlik**: Yüksek kontrast ve okunaklı yazı tipleri
6. **Modern Estetiği**: iOS HIG standartlarına uygun tasarım

## Navigasyon Yapısı

```
Root
├── (tabs)
│   ├── Home
│   │   ├── New Chat → Chat Screen
│   │   ├── Code Assistant → Code Screen
│   │   ├── Image Analysis → Image Screen
│   │   ├── File Processing → File Screen
│   │   └── Recent Conversations → Conversation Detail
│   ├── Explore
│   │   ├── Featured Prompts
│   │   └── Templates
│   ├── Favorites
│   │   └── Saved Conversations
│   └── Settings
│       ├── Theme
│       ├── Language
│       ├── API Keys
│       └── About
```

## Animasyonlar ve Geçişler

- **Sayfa Geçişleri**: 250ms fade-in
- **Buton Basma**: 80ms scale (0.97)
- **Mesaj Görünümü**: 200ms slide-up
- **Modal Açılış**: 300ms slide-up
- **Yükleme Göstergesi**: Sürekli dönen animasyon

## Tipografi

- **Başlıklar**: SF Pro Display, 28px, Bold
- **Alt Başlıklar**: SF Pro Display, 20px, Semibold
- **Gövde Metni**: SF Pro Text, 16px, Regular
- **Küçük Metin**: SF Pro Text, 12px, Regular
- **Monospace (Kod)**: SF Mono, 13px, Regular

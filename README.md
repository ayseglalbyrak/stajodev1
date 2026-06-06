# stajodev1 — Aysal Doğal Bakım Markası Web Sitesi

Staj dönemi boyunca geliştirilen bu proje, **Aysal** adlı bir doğal güzellik ve bakım markasının tanıtım ve kayıt sayfasıdır. Saf HTML, CSS ve JavaScript kullanılarak sıfırdan oluşturulmuştur.

---

## 🖼️ Proje Önizlemesi

Sayfa; logo ve başlık içeren bir header, gezinme çubuğu, 2×2 ürün görseli grid'i, marka açıklaması ve kullanıcı kayıt formundan oluşmaktadır.

---

## 📁 Dosya Yapısı

```
stajodev1/
└── stajödev/
    ├── index.html      # Ana sayfa (header, nav, resim grid, kayıt formu, footer)
    ├── style.css       # Tüm stil tanımlamaları
    ├── script.js       # Form doğrulama (validation) mantığı
    └── images/
        ├── logo.png
        ├── sac.webp
        ├── tırnak.jpeg
        ├── bakım.jpg
        └── cilt.jpg
```

---

## ✨ Özellikler

### 📄 Sayfa Yapısı
- **Header** — Logo + "Hoş Geldiniz" başlığı, `#b08b8b` arka plan rengiyle
- **Navigasyon** — Ana Sayfa, Cilt Bakımı, Saç Bakımı, Tırnak Bakımı, Markamız, İletişim bağlantıları
- **2×2 Resim Grid** — Saç, tırnak, genel bakım ve cilt görsellerinden oluşan CSS Grid düzeni
- **Marka Açıklaması** — Aysal'ın ürün felsefesini anlatan paragraf
- **Kayıt Formu** — Sağ tarafta sabit genişlikte, `#ffe4b5` arka planlı kart tasarımı
- **Footer** — Telif hakkı bilgisi

### 📋 Kayıt Formu Alanları
| Alan | Tür | Kural |
|---|---|---|
| Ad | text | Zorunlu, max 20 karakter |
| Soyad | text | Zorunlu, max 20 karakter |
| E-posta | email | Regex ile format doğrulama |
| Kullanıcı Adı | text | Zorunlu |
| Şifre | password | Zorunlu |
| Ürün Kategorisi | select | Cilt / Saç / Tırnak Bakım |
| Cinsiyet | radio | Bay / Bayan |

### ✅ JavaScript Form Doğrulama
- Boş alan kontrolü
- 20 karakter sınırı kontrolü
- E-posta format doğrulaması (`regex`)
- Başarılı kayıtta `alert` bildirimi ve form sıfırlama

### 🎨 CSS Özellikleri
- Flexbox ile yan yana iki sütunlu layout (sol: resim + açıklama / sağ: form)
- CSS Grid ile 2×2 resim düzeni
- `object-fit: cover` ile düzgün kırpılmış görseller
- Hover efektli navigasyon
- Box-shadow ve border-radius ile modern form kartı tasarımı
- Renk paleti: `#ffe4b5` (krem), `#b08b8b` (gül kurusu), `#bd5459` (vişne), `#444` (koyu gri)

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım |
|---|---|
| HTML5 | Sayfa yapısı ve form elemanları |
| CSS3 | Flexbox, Grid, responsive düzen |
| JavaScript (Vanilla) | Form doğrulama ve event handling |

---

## 🚀 Çalıştırma

Herhangi bir kurulum gerekmez. Repoyu klonlayıp `index.html` dosyasını tarayıcıda açmanız yeterlidir:

```bash
git clone https://github.com/ayseglalbyrak/stajodev1.git
cd stajodev1/stajödev
# index.html dosyasını tarayıcıda aç
```

---

## 👩‍💻 Geliştirici

**Ayşegül Albyrak**  
[GitHub](https://github.com/ayseglalbyrak)

---

*© 2025 Aysal — Tüm hakları saklıdır.*

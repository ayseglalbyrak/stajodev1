document.addEventListener("DOMContentLoaded", function() {
  const form = document.forms["registerForm"];
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const ad = form["ad"].value.trim();
    const soyad = form["soyad"].value.trim();
    const email = form["email"].value.trim();
    const kullanici = form["kullanici"].value.trim();
    const sifre = form["sifre"].value.trim();

    if (ad.length === 0 || soyad.length === 0) {
      alert("Ad ve Soyad boş bırakılamaz!");
      return;
    }
    if (ad.length > 20 || soyad.length > 20) {
      alert("Ad ve Soyad 20 karakterden fazla olamaz!");
      return;
    }

    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!regex.test(email)) {
      alert("Geçerli bir e-posta giriniz!");
      return;
    }

    if (!kullanici || !sifre) {
      alert("Kullanıcı adı ve şifre boş olamaz!");
      return;
    }

    alert("Kayıt başarılı!");
    form.reset();
  });
});

// Sayfa kaydırıldığında header arka planını koyulaştır
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// İleride buraya mobil menü açma/kapama fonksiyonu eklenebilir
console.log("Görmenin Ötesinde projesi yüklendi!");

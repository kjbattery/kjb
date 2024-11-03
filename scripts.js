// Menunggu dokumen dimuat
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    
    // Menambahkan event listener untuk scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Jika halaman discroll lebih dari 50px
            header.classList.add('scrolled'); // Tambahkan kelas 'scrolled'
        } else {
            header.classList.remove('scrolled'); // Hapus kelas 'scrolled' jika kembali ke atas
        }
    });
    
    // Mengatur font header menggunakan JavaScript
    header.style.fontFamily = "'Montserrat', sans-serif";
    
    // Menambahkan animasi fade-in saat box layanan muncul
    const serviceBoxes = document.querySelectorAll('.service-box');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, { threshold: 0.5 });

    serviceBoxes.forEach(box => {
        observer.observe(box);
    });

    const items = document.querySelectorAll('.testimonial-item');
    let index = 0;

    function showItem(i) {
        items.forEach((item, idx) => {
            if (idx === i) {
                item.style.display = 'block'; // Tampilkan item
                item.style.opacity = '1'; // Ubah opacity untuk animasi fade-in
                item.style.zIndex = '1'; // Bawa item ke depan
            } else {
                item.style.display = 'none'; // Sembunyikan item lainnya
                item.style.opacity = '0'; // Pastikan opacity 0 untuk transisi yang mulus
                item.style.zIndex = '0'; // Kembalikan z-index item lainnya
            }
        });
    }

    function moveCarousel() {
        index++;
        if (index >= items.length) {
            index = 0;
        }
        showItem(index);
    }

    // Atur tampilan awal
    showItem(index);
    setInterval(moveCarousel, 3000);
    
});

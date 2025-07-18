document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('body');
    const raindropsCount = 120; // Jumlah tetesan hujan
    const rainImagesCount = 15; // Jumlah gambar hujan
    
    // Tambahkan overlay untuk efek hujan
    const rainOverlay = document.createElement('div');
    rainOverlay.className = 'rain-overlay';
    container.appendChild(rainOverlay);
    
    // Warna biru muda untuk tetesan hujan
    const rainColors = ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6'];
    
    // Buat tetesan hujan
    for (let i = 0; i < raindropsCount; i++) {
        createRaindrop();
    }
    
    // Buat gambar hujan
    for (let i = 0; i < rainImagesCount; i++) {
        createRainImage();
    }
    
    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        
        // Posisi acak di bagian atas layar
        const posX = Math.random() * 100;
        const startY = -10; // Mulai dari atas layar
        
        // Ukuran tetesan (tipis dan panjang)
        const width = 0.5 + Math.random() * 1; // Lebar 0.5px - 1.5px
        const height = 10 + Math.random() * 20; // Panjang 10px - 30px
        
        // Kecepatan jatuh (semakin panjang, semakin cepat)
        const duration = 0.5 + Math.random() * 1; // 0.5 - 1.5 detik
        const delay = Math.random() * 2; // Delay awal acak
        
        // Opasitas (semakin tipis semakin transparan)
        const opacity = 0.1 + Math.random() * 0.4; // 0.1 - 0.5
        
        // Terapkan gaya
        raindrop.style.cssText = `
            position: fixed;
            left: ${posX}%;
            top: ${startY}%;
            width: ${width}px;
            height: ${height}px;
            background: linear-gradient(to bottom, 
                rgba(255, 255, 255, ${opacity}) 0%, 
                ${rainColors[Math.floor(Math.random() * rainColors.length)]} 100%);
            border-radius: 50%;
            opacity: ${opacity};
            pointer-events: none;
            z-index: 1;
            transform: translateX(-50%) rotate(10deg);
            animation: rain ${duration}s linear ${delay}s infinite;
            filter: blur(0.5px);
        `;
        
        // Tambahkan ke container
        container.appendChild(raindrop);
        
        // Hapus dan buat tetesan baru setelah selesai animasi
        setTimeout(() => {
            raindrop.remove();
            createRaindrop();
        }, (duration + delay) * 1000);
    }
    
    function createRainImage() {
        const rainImg = document.createElement('img');
        rainImg.src = 'images/rain-image.png';
        rainImg.className = 'rain-image';
        
        // Posisi awal di sisi kiri (5-15%) atau kanan (90-100%) layar
        const isLeftSide = Math.random() > 0.5;
        const posX = isLeftSide ? 
            (5 + Math.random() * 10) : // 5-15% dari lebar layar (sisi kiri)
            (90 + Math.random() * 10); // 90-100% dari lebar layar (sisi kanan)
            
        const startY = -50; // Mulai dari atas layar
        
        // Ukuran gambar (acak antara 20x20px dan 40x40px)
        const size = 20 + Math.random() * 20;
        
        // Kecepatan jatuh lebih lambat dari tetesan hujan
        const duration = 5 + Math.random() * 10; // 5-15 detik
        const delay = Math.random() * 5; // Delay awal acak
        
        // Opasitas (lebih transparan dari tetesan)
        const opacity = 0.1 + Math.random() * 0.3; // 0.1 - 0.4
        
        // Rotasi acak
        const rotation = Math.random() * 360;
        
        // Terapkan gaya
        rainImg.style.cssText = `
            position: fixed;
            left: ${posX}%;
            top: ${startY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            pointer-events: none;
            z-index: 1;
            transform: translateX(-50%) rotate(${rotation}deg);
            animation: rainImage ${duration}s linear ${delay}s infinite;
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
            /* Pastikan gambar tidak melebihi batas sisi */
            max-width: 40px;
            max-height: 40px;
            /* Pastikan tidak ada margin atau padding yang mengganggu */
            margin: 0;
            padding: 0;
        `;
        
        // Tambahkan ke container
        container.appendChild(rainImg);
        
        // Hapus dan buat gambar baru setelah selesai animasi
        setTimeout(() => {
            rainImg.remove();
            createRainImage();
        }, (duration + delay) * 1000);
    }
});

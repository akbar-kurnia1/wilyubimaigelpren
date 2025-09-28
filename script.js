const tombolno = document.getElementById('tombolno');
const tombolyes = document.getElementById('tombolyes');

// biar tombolnya bisa lari
tombolno.addEventListener('mouseover', () => {
    // kata ai sih ini biar tombolnya ga lari kemana-mana pas di zoom out (makasih ai soalnya gapaham)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // deklarasi ukuran tombol
    const btnWidth = tombolno.offsetWidth;
    const btnHeight = tombolyes.offsetHeight;
    
    // inisialisasi area lari
    const runawayZoneWidth = 500; // Lebar
    const runawayZoneHeight = 300; // Tinggi

    // Hitung posisi awal (pojok kiri atas) dari area lari agar berada di tengah
    const zoneStartX = (viewportWidth - runawayZoneWidth) / 2;
    const zoneStartY = (viewportHeight - runawayZoneHeight) / 2;

    // acak posisi tombol no kalo cursor mendekat
    const newX = zoneStartX + Math.random() * (runawayZoneWidth - btnWidth);
    const newY = zoneStartY + Math.random() * (runawayZoneHeight - btnHeight);

    // posisi baru tombol no
    tombolno.style.left = newX + 'px';
    tombolno.style.top = newY + 'px';
});

// kalo tombol yes di klik
tombolyes.addEventListener('click', () => {
    // ganti isi container
    document.querySelector('.container').innerHTML = '<h1>Yeyyy!!!</h1><img src="https://media1.tenor.com/m/G2tnkBFGsZkAAAAC/peach-and-goma-goma-and-peach.gif" alt="wii Bears">';
});

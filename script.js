const tombolno = document.getElementById('tombolno');
const tombolyes = document.getElementById('tombolyes');

// kalo tombol no dideketin cursor
tombolno.addEventListener('mouseover', () => {
    // kata AI sih ini biar tombolnya ga lari kemana-mana pas di zoom out (makasih AI soalnya gapaham)
    // inisialisasi
    const lebar = window.innerWidth;
    const tinggi = window.innerHeight;
    const LebarTombol = tombolno.offsetWidth;
    const TinggiTombol = tombolyes.offsetHeight;
    const LebarLari = 500; // Lebar, ini buat laptop btw
    const TinggiLari = 300; // Tinggi, kalo buat hp ini dinaikin
    // rencana mau bikin lebar/tinggi versi hp disini, tapi dicoba di hp gak masalah tadi

    // titik tengah area tombolnya lari
    const AreaX = (lebar - LebarLari) / 2;
    const AreaY = (tinggi - TinggiLari) / 2;

    // acak posisi tombol no kalo dideketin cursor
    const AreaXnew = AreaX + Math.random() * (LebarLari - LebarTombol);
    const AreaYnew = AreaY + Math.random() * (TinggiLari - TinggiTombol);

    // posisi baru tombol no
    tombolno.style.left = AreaXnew + 'px';
    tombolno.style.top = AreaYnew + 'px';
});

// kalo tombol yes di klik
tombolyes.addEventListener('click', () => {
    // ganti isi container pake yeyy sama ubah link gif
    document.querySelector('.container').innerHTML = '<h1>Yeyyy!!!</h1><img src="https://media1.tenor.com/m/G2tnkBFGsZkAAAAC/peach-and-goma-goma-and-peach.gif" alt="Yeyyy">';
});

const tombolno = document.getElementById('tombolno');
const tombolyes = document.getElementById('tombolyes');
const posisiAwalKiri = tombolno.offsetLeft;
const posisiAwalAtas = tombolno.offsetTop;
tombolno.style.left = posisiAwalKiri + 'px';
tombolno.style.top = posisiAwalAtas + 'px';
let lagiLari = false;
function pindahTombol() {
    const lebar = window.innerWidth;
    const tinggi = window.innerHeight;
    const LebarTombol = tombolno.offsetWidth;
    const TinggiTombol = tombolno.offsetHeight;
    const LebarLari = 500;
    const TinggiLari = 300;
    const AreaX = (lebar - LebarLari) / 2;
    const AreaY = (tinggi - TinggiLari) / 2;
    const AreaXnew = AreaX + Math.random() * (LebarLari - LebarTombol);
    const AreaYnew = AreaY + Math.random() * (TinggiLari - TinggiTombol);
    tombolno.style.left = AreaXnew + 'px';
    tombolno.style.top = AreaYnew + 'px';
}
window.addEventListener('mousemove', (event) => {
    if (!lagiLari) {
        const JarakAman = 80; 
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const rectTombol = tombolno.getBoundingClientRect();
        const bahayaKiri = rectTombol.left - JarakAman;
        const bahayaKanan = rectTombol.right + JarakAman;
        const bahayaAtas = rectTombol.top - JarakAman;
        const bahayaBawah = rectTombol.bottom + JarakAman;
        if (mouseX > bahayaKiri && mouseX < bahayaKanan && 
            mouseY > bahayaAtas && mouseY < bahayaBawah) 
        {
            pindahTombol();
            lagiLari = true;
            setTimeout(() => {
                lagiLari = false;
            }, 300);
        }
    }
});
tombolyes.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = '<h1>Yeyyy!!!</h1><img src="https://media1.tenor.com/m/G2tnkBFGsZkAAAAC/peach-and-goma-goma-and-peach.gif" alt="Yeyyy">';
});
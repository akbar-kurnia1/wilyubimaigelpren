const tombolno = document.getElementById('tombolno');
const tombolyes = document.getElementById('tombolyes');
const posisiAwalKiri = tombolno.offsetLeft;
const posisiAwalAtas = tombolno.offsetTop;
tombolno.style.left = posisiAwalKiri + 'px';
tombolno.style.top = posisiAwalAtas + 'px';
tombolno.addEventListener('mouseover', () => {
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
});
tombolyes.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = '<h1>Yeyyy!!!</h1><img src="https://media1.tenor.com/m/G2tnkBFGsZkAAAAC/peach-and-goma-goma-and-peach.gif" alt="Yeyyy">';
});
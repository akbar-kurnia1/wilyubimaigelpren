const noButton = document.getElementById('tombolno');
const yesButton = document.getElementById('tombolyes');
const initialLeftPosition = noButton.offsetLeft;
const initialButtonPositionTop = noButton.offsetTop;
noButton.style.left = initialLeftPosition + 'px';
noButton.style.top = initialButtonPositionTop + 'px';
let isRunning = false;
function moveButton() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const runWidth = 500;
    const runHeight = 300;
    const areaX = (windowWidth - runWidth) / 2;
    const areaY = (windowHeight - runHeight) / 2;
    const areaXnew = areaX + Math.random() * (runWidth - buttonWidth);
    const areaYnew = areaY + Math.random() * (runHeight - buttonHeight);
    noButton.style.left = areaXnew + 'px';
    noButton.style.top = areaYnew + 'px';
}
window.addEventListener('mousemove', (event) => {
    if (!isRunning) {
        const minimumSafeDistance = 80; 
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const noButtonRect = noButton.getBoundingClientRect();
        const boundaryLeft = noButtonRect.left - minimumSafeDistance;
        const boundaryRight = noButtonRect.right + minimumSafeDistance;
        const boundaryTop = noButtonRect.top - minimumSafeDistance;
        const boundaryBottom = noButtonRect.bottom + minimumSafeDistance;
        if (mouseX > boundaryLeft && mouseX < boundaryRight && 
            mouseY > boundaryTop && mouseY < boundaryBottom) 
        {
            moveButton();
            isRunning = true;
            setTimeout(() => {
                isRunning = false;
            }, 300);
        }
    }
});
yesButton.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = '<h1>Yeyyy!!!</h1><img src="https://media1.tenor.com/m/G2tnkBFGsZkAAAAC/peach-and-goma-goma-and-peach.gif" alt="Yeyyy">';
});
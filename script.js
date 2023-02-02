const atunes = document.querySelectorAll('.atun');
const body = document.getElementsByTagName('body')[0];

window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth;
    const xDecimalFactor = (xDecimal * 2) - 1;
    const yDecimal = mouseY / window.innerHeight;
    const yDecimalFactor = (yDecimal * 2) - 1;

    atunes.forEach(x => {
        x.style.transform = `translateX(${-xDecimalFactor * 30}%)`;
        x.style.transform += `translateY(${-yDecimalFactor * 30}%)`;

        const { left, top, width, height } = x.getBoundingClientRect();
        let centerX = left + width / 2;
        centerX = centerX / window.innerWidth;
        let centerY = top + height / 2;
        centerY = centerY / window.innerHeight;

        const xDiff = xDecimal - centerX;
        const yDiff = yDecimal - centerY;

        const angle = Math.atan(yDiff/xDiff) + 'rad';
        x.style.transform += `rotate(${angle})`;

        if (xDiff <= 0){
            x.style.transform += 'scaleX(-1)'
        }

    })
}
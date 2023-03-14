const atunes = document.querySelectorAll('.atun');
const body = document.getElementsByTagName('body')[0];

['mousemove', 'touchmove'].forEach(function (e) {
    window.addEventListener(e, e => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const xDecimal = mouseX / window.innerWidth;
        const xDecimalFactor = (xDecimal * 2) - 1;
        const yDecimal = mouseY / window.innerHeight;
        const yDecimalFactor = (yDecimal * 2) - 1;

        atunes.forEach(x => {
            // x.style.transform = `translateX(${-xDecimalFactor * 30}%)`;
            // x.style.transform += `translateY(${-yDecimalFactor * 30}%)`;


            const { left, top, width, height } = x.getBoundingClientRect();
            let centerX = left + width / 2;
            centerX = centerX / window.innerWidth;
            let centerY = top + height / 2;
            centerY = centerY / window.innerHeight;

            const xDiff = xDecimal - centerX;
            const yDiff = yDecimal - centerY;

            const angle = Math.atan(yDiff / xDiff) + 'rad';
            // x.style.transform += `rotate(${angle})`;

            // if (xDiff <= 0) {
            //     x.style.transform += 'scaleX(-1)'
            // }
            let scaleAtun;
            if (xDiff <= 0) {
                scaleAtun = -1;
            } else {
                scaleAtun = 1;
            }

            const animActions = [
                {
                    transform: `translateX(${-xDecimalFactor * 50}%)
                    translateY(${-yDecimalFactor * 50}%)
                    rotate(${angle})
                    scaleX(${scaleAtun}`
                },

                // scaleX(${scaleAtun})
                // {transform: `translateY(${-yDecimalFactor * 30}%)`},
                // {transform: `translateY(${-yDecimalFactor * 30}%)`},
            ]

            x.animate(animActions, {
                duration: 3000, fill: 'forwards'
            })

        })
    }, false)
});

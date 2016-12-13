function moveClock() {
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const time = new Date();

    const second = time.getSeconds();
    const degreeSecond = ((second / 60) * 360) + 90;

    const min = time.getMinutes();
    const degreeMin = ((min / 60) * 360) + 90;

    const hour = time.getHours();
    const degreehour = ((hour / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${degreeSecond}deg)`;
    minHand.style.transform = `rotate(${degreeMin}deg)`;
    hourHand.style.transform = `rotate(${degreehour}deg)`;
}

setInterval(moveClock, 1000);
const countDown = () => {
    const countDate = new Date("April 12 , 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time Rules
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calc Rules from gap
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute) / seconds);

    document.getElementById("day").innerText = textDay.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
    });
    document.getElementById("hour").innerText = textHour.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
    });
    document.getElementById("minute").innerText = textMinute.toLocaleString(
        "en-US", {
            minimumIntegerDigits: 2,
        }
    );
    document.getElementById("second").innerText = textSeconds.toLocaleString(
        "en-US", {
            minimumIntegerDigits: 2,
        }
    );
    const progress_value = Math.ceil((gap * 100) / countDate);
    document.querySelector(".progress-bar").style.width = +progress_value + 8 + "%";
};
countDown();
setInterval(countDown, 1000);

function move(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 150;
        const y = (window.innerWidth - e.pageY * speed) / 150;
        layer.style.transform = `translate(${x}px,${y}px)`;
    });
}

if (window.innerWidth >= 800) {
    document.addEventListener("mousemove", move);
}

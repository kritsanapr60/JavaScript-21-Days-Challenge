(() => {
    // เริ่มเขียนโค้ด
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function setElementInnerTextHTML(id, data) {
        const element = document.getElementById(id);
        element.innerText = data;
    }

    function run() {
        const now = new Date().getTime();
        const newYear = new Date("December 31, 2022 00:00:00").getTime();
        const unixTimeLeft = newYear - now;

        setElementInnerTextHTML("days", Math.floor(unixTimeLeft / DAY));
        setElementInnerTextHTML("hours", Math.floor((unixTimeLeft % DAY) / HOUR));
        setElementInnerTextHTML(
            "minutes",
            Math.floor((unixTimeLeft % HOUR) / MINUTE)
        );
        setElementInnerTextHTML(
            "seconds",
            Math.floor((unixTimeLeft % MINUTE) / SECOND)
        );

        console.log(`now : ${now}`);
        console.log(`newYear : ${newYear}`);
        console.log(`unixTimeLeft : ${unixTimeLeft}`);
        console.log(`DAY : ${unixTimeLeft / DAY}`);
        console.log(`HOUR : ${(unixTimeLeft % DAY) / HOUR}`);
        console.log(`MINUTES : ${(unixTimeLeft % HOUR) / MINUTE}`);
        console.log(`SECOND : ${(unixTimeLeft % MINUTE) / SECOND}`);

        setInterval(run, SECOND);
    }

    run();
})();
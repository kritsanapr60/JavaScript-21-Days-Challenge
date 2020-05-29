(() => {
    // เริ่มเขียนโค้ด
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;


    function setElementInnerText(id, text) { //สร้างฟังก์ชันเเทนการ getElemant ทุกค่าเพื่อที่จะเรียกใช้ฟังก์ชั่นเดียวจะง่ายกว่า
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countDown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2020 00:00:00').getTime();
        const unixTimeLeft = newYear - now;

        console.log(unixTimeLeft);
        setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
        setElementInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));
        setElementInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));
        setElementInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));

    }

    function run() {
        countDown();
        setInterval(countDown, 1000);
    }
    run();
})();
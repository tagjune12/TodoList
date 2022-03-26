function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const clock = document.querySelector("#clock");
    if (clock) {
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
}

function showClock() {
    console.log("showClock");
    getClock(); // 웹사이트가 실행되자마자 바로 보여주기 위해 한번 호출
    return setInterval(getClock, 1000);
}

export default showClock;

const clock = document.getElementById("clock")!;
const countDown = document.getElementById("countDown")!;

function loop(): void {
    const now = new Date();
    const happyNewYear = new Date(2023,1-1,1,0,0,0,0);
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clock.innerHTML = `⏰${hours}:${minutes}:${seconds}`;
    countDown.innerHTML = `<span style="font-size: 2rem;">新年まであと</span><br><span style="font-weight: 900;">${Math.trunc(happyNewYear.getTime()/1000 - now.getTime()/1000)}</span>秒`;
    window.requestAnimationFrame(loop);
}

loop();
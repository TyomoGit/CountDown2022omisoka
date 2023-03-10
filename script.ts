const clock = document.getElementById("clock")!;
const countDown = document.getElementById("countDown")!;

function loop(): void {
    const now = new Date();
    // const now = new Date(2023,1-1,1);
    const happyNewYear = new Date(2023,1-1,1,0,0,0,0);
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clock.innerHTML = `β°${hours}:${minutes}:${seconds}`;
    if(now.getTime() >= happyNewYear.getTime()){
        countDown.innerHTML = "πππ<br>γγγΎγγ¦γγγ§γ¨γ"
    }else{
        countDown.innerHTML = `<span style="font-size: 2rem;">ζ°εΉ΄γΎγ§γγ¨</span><br><span style="font-weight: 900;">${Math.trunc(happyNewYear.getTime()/1000 - now.getTime()/1000)}</span>η§`;
    }
    window.requestAnimationFrame(loop);
}

loop();
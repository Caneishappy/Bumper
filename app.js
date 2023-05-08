const links = [
    //You links here. [https://example.com,] "," after the link
    ];
let time = 905000 //905000 ms = 15 min & 5 s

let runs = 0

async function openLinks() {
    console.log("openLinks() started");
    for (let link of links){
        await new Promise(app => setTimeout(app, (Math.floor(Math.random() * 2000 - 1000) + 1000)))
            let currentDate = new Date();
            console.log("bump time: "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
            let windowHandle = window.open(link) 
            console.log(link + " was opend.")
            await new Promise(app => setTimeout(app, 1500))
            windowHandle.close();
        }
    }

console.log("First run initiated")      //First time run
openLinks()


let t = Math.floor(time / 1000);
setInterval(() => {//Loop
    let bar = document.getElementById("bar");
    let width = (((t * 1000)*100) / time) * -1 + 100;
    bar.style.width = width + "%";
    let MTimer = Math.floor(t / 60);
    let STimer = Math.floor(t - MTimer * 60 );
    document.getElementById("timer").innerHTML = `
    ${"Next bump in: " + String(MTimer) + "min " +  String(STimer) + "s"}
    `;
    document.getElementById("percent").innerHTML = `
    ${Math.floor(width) + "%"}
    `;
    t --
    if (t <= 0) { 
        t = Math.floor(time / 1000);
        runs ++
        console.log("Interval " + runs + "canceled.");
        openLinks();
    }
}, 1000);

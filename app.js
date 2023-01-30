const links = [
//"https://rocket-league.com/ajaxfunctions/bumpTrade.php?alias=1a9c7a0d-3e9b-4004-8186-9642a4ce2535", 
//"https://rocket-league.com/ajaxfunctions/bumpTrade.php?alias=35149785-a037-4ab0-aed1-f5ee6ceaf6da", 
//"https://rocket-league.com/ajaxfunctions/bumpTrade.php?alias=6211dd39-0dca-46cb-9306-25c3138347aa",
"https://google.de"
];

let time = 905000 + (Math.floor(Math.random() * 2000 - 1000))



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

console.log("First run initiated")      //First time run start
openLinks()

let t = Math.floor(time / 1000);
let timerid =  setInterval(() => {
    t --
    let MTimer = Math.floor(t / 60);
    let STimer = Math.floor(t - MTimer * 60 );
    //console.log(String(MTimer) + "min " +  String(STimer) + "s");
    document.getElementById("timer").innerHTML = `
    ${"Next bump in: " + String(MTimer) + "min " +  String(STimer) + "s"}
    `;
    if (t < 1) {
        clearInterval(timerid);
        console.log("Interval canceled")
    }
}, 1000);                               //First time run end

//Main loop:
    setInterval(() => {
        let time = 905000 + (Math.floor(Math.random() * 2000 - 1000))
        console.log("Run initiaed");
        openLinks();
        let t = Math.floor(time / 1000); 
        let timerid =  setInterval(() => {//Loop for the timer
            t --
            let MTimer = Math.floor(t / 60);
            let STimer = Math.floor(t - MTimer * 60 );
            //console.log(String(MTimer) + "min " +  String(STimer) + "s"); 
            document.getElementById("timer").innerHTML = `
            ${"Next bump in: " + String(MTimer) + "min " +  String(STimer) + "s"}
            `;
            if (t < 1) {
                clearInterval(timerid);
                console.log("Interval canceled")
            }
        }, 1000);
    }, time); //905000 ms = 15 min & 5 s + random time 1 s - 2 s
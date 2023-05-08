const links0 = [
];

const links1= [
    // If you have the same traed 2 times than add the 2. one here.
];

const links2= [
    // If you have the same trade 3 times than the 3. one here here.
    
];
let time = 905000 //905000 ms = 15 min & 5 s
let runs = 0

async function openLinks(links) {
    console.log("openLinks() started");
    for (let link of links){
        await new Promise(app => setTimeout(app, (Math.floor(Math.random() * 2000 - 1000) + 1000)))
            let currentDate = new Date();
            console.log("bump time: "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
            let windowHandle = window.open(link) 
            console.log(link + " was opend.")
            await new Promise(app => setTimeout(app, 3500))
            windowHandle.close();
        }
    }

console.log("First run initiated")      //First time run start
openLinks(links0)

async function SecondInterval(){
    if (links1 !=""){
        openLinks(links1);
    }
}

async function ThirdInterval(){
    if (links2 !=""){
        openLinks(links2);
    }
}

if (links1 !="" && links2 != ""){
    console.log("2+3 running")
    let counter = 1
        let timerid =  setInterval(() => {
            let currentDate = new Date();
            console.log("2+/3 Running");
            if (counter == 1 && links1 !=""){
                SecondInterval();
            }
            if (counter == 2 && links2 !=""){
                ThirdInterval();
            }
            if (counter == 2){
                counter = -1;
            }
            counter ++
    }, (time/3));
};

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
        openLinks(links0);
    }
}, 1000);

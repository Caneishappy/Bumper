const links = [
    //Your links
    ];
    
    let time = 905000
    
    
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
    let timerid =  setInterval(() => {//Loop for the timer
        let bar = document.getElementById("bar");
        let width = (((t * 1000)*100) / time) * -1 + 100;
        bar.style.width = width + "%";
        t --
        let MTimer = Math.floor(t / 60);
        let STimer = Math.floor(t - MTimer * 60 );
        document.getElementById("timer").innerHTML = `
        ${"Next bump in: " + String(MTimer) + "min " +  String(STimer) + "s"}
        `;
        document.getElementById("percent").innerHTML = `
        ${Math.floor(width) + "%"}
        `
        if (t < 1) {
            clearInterval(timerid);
            console.log("Interval canceled")
        }
    }, 1000);                               //First time run end
    
    //Main loop:
        setInterval(() => {
            let time = 905000
            console.log("Run initiaed");
            openLinks();
            let t = Math.floor(time / 1000); 
    let timerid =  setInterval(() => {//Loop for the timer
        let bar = document.getElementById("bar");
        let width = time / (((t * 1000)*100) / time)  * -1 + 100
        bar.style.width = width + "%";
        t --
        let MTimer = Math.floor(t / 60);
        let STimer = Math.floor(t - MTimer * 60 );
        document.getElementById("timer").innerHTML = `
        ${"Next bump in: " + String(MTimer) + "min " +  String(STimer) + "s"}
         \n
         ${width + "%"}`;
        if (t < 1) {
            clearInterval(timerid);
            console.log("Interval canceled")
        }
        }, 1000); 
        }, time); //905000 ms = 15 min & 5 s + random time 1 s - 2 s

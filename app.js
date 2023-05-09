const links0 = [
    // Your links go here. Like this:
    //  "https://example.com",
    "https://example.com",
];

const links1= [
    // If you have the same traed 2 times than add the 2. one here.
];

const links2= [
    // If you have the same trade 3 times than the 3. one here here.
    
];
let time = 905000 //905000 ms = 15 min & 5 s
let runs = 0;

async function openLinks(links) {
    console.log("openLinks()" + links + "started");
    for (let link of links) {
        await new Promise((app) =>
            setTimeout(app, 1000)
        );
        let currentDate = new Date();
        console.log(
            "bump time: " +
                currentDate.getHours() +
                ":" +
                currentDate.getMinutes() +
                ":" +
                currentDate.getSeconds()
        );
        let windowHandle = window.open(link);
        console.log(link + " was opend.");
        await new Promise((app) => setTimeout(app, 1000));
        windowHandle.close();
    }
}

console.log("First run initiated"); //First time run start
openLinks(links0);

async function SecondInterval() {
    if (links1 != "") {
        openLinks(links1);
        let currentDate = new Date();
        console.log(
            "bump 1 time: " +
                currentDate.getMinutes() +
                ":" +
                currentDate.getSeconds()
        );
    }
}

async function ThirdInterval() {
    if (links2 != "") {
        openLinks(links2);
        let currentDate = new Date();
        console.log(
            "bump 2 time: " +
                currentDate.getMinutes() +
                ":" +
                currentDate.getSeconds()
        );
    }
}
let counter = 1;
if (links1 == "" && links2 == "") {
    t = Math.floor(time / 1000);
} else {
    t = Math.floor(time / 1000 / 3);
}
setInterval(() => {
    //Loop
    let bar = document.getElementById("bar");
    if (links1 == "" || links2 == "") {
        width = (t / (time / 1000)) * 100 * -1 + 100;
    } else {
        width = (t / (time / 3 / 1000)) * 100 * -1 + 100;
    }
    bar.style.width = width + "%";
    let MTimer = Math.floor(t / 60);
    let STimer = Math.floor(t - MTimer * 60);
    document.getElementById("timer").innerHTML = `
            ${"Next bump in: " + String(MTimer) + "min " + String(STimer) + "s"}
            `;
    document.getElementById("percent").innerHTML = `
            ${Math.floor(width) + "%"}
            `;
    t--;
    if (t <= 0) {
        if (links1 != "" || links2 != "") {
            t = Math.floor(time / 1000);
        } else {
            t = Math.floor(time / 1000 / 3);
        }
        console.log("2+/3 Running: " + counter);
        if (counter == 0) {
            openLinks(links0);
            console.log("links 0 bump: " + counter);
        }
        if (counter == 1 && links1 != "") {
            SecondInterval();
            console.log("links 1 bump: " + counter);
        }
        if (counter == 2 && links2 != "") {
            ThirdInterval();
            console.log("links 2 bump: " + counter);
        }
        if (counter == 2) {
            console.log("Counter reset: " + counter);
            counter = -1;
        }
        runs++;
        counter++;
    }
}, 1000);

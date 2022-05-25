import nodeHTMLToImage from "node-html-to-image";
import { setWallpaper, setSolidColorWallpaper } from 'wallpaper';
import cron from 'node-cron';
import https from 'https';
const firstPart = "<html><body><style>body {--animation-speed: 10000s;--delay-time: -";
const secoPart = `s;background-color: rgb(37, 29, 24);width: 1920px;height: 1080px;margin: unset;}@keyframes sunrise {0% {transform: rotate(-45deg);}100% {transform: rotate(315deg);}}@keyframes dawn {0% {opacity: 1;}19% {opacity: 0;}90% {opacity: 0;}95% {opacity: 1;}100% {opacity: 1;}}@keyframes noon {0% {opacity: 0;}2% {opacity: 0;}15% {opacity: 1;}35% {opacity: 1;}55% {opacity: 0;}100% {opacity: 0;}}@keyframes dusk {0% {opacity: 0;}46% {opacity: 0;}50% {opacity: 1;}56% {opacity: 0;}100% {opacity: 0;}}@keyframes midnight {0% {opacity: 0.5;}5% {opacity: 0;}55% {opacity: 0;}65% {opacity: 1;}95% {opacity: 1;}100% {opacity: 0.5;}}@keyframes sunLight {0% {background-color: rgb(255, 163, 25);}10% {background-color: rgb(254, 215, 102);}43% {background-color: rgb(254, 215, 102);}50% {background-color: rgb(255, 163, 25);}100% {background-color: rgb(255, 163, 25);}}.sky {width: 1920px;height: 1080px;position: fixed;top: 0;left: 0;/* max-height: 600px; */overflow: hidden;}.sky__phase {position: absolute;top: 0;left: 0;height: 100%;width: 100%;transition: opacity 0.2s;}.sky__dawn {background: linear-gradient(11deg,rgba(254, 215, 102, 1) 0%,rgba(205, 237, 246, 1) 100%);animation: linear dawn infinite var(--animation-speed);animation-delay: var(--delay-time);animation-play-state: running;}.sky__noon {background: linear-gradient(0deg,rgba(205, 237, 246, 1) 0%,rgba(36, 123, 160, 1) 100%);animation: linear noon infinite var(--animation-speed);animation-delay: var(--delay-time);animation-play-state: running;}.sky__dusk {background: linear-gradient(0deg,rgba(255, 32, 110, 1) 0%,rgba(10, 0, 94, 1) 100%);animation: linear dusk infinite var(--animation-speed);animation-delay: var(--delay-time);animation-play-state: running;}.sky__midnight {background: linear-gradient(0deg,rgba(2, 0, 20, 1) 0%,rgba(10, 0, 94, 1) 100%);animation: linear midnight infinite var(--animation-speed);animation-delay: var(--delay-time);animation-play-state: running;}.orbit {top: 200px;position: relative;width: 1300px;height: 1300px;margin: 200px auto;transform: rotate(-45deg);animation: linear sunrise infinite var(--animation-speed);animation-delay: var(--delay-time);animation-play-state: running;}.sun {position: absolute;top: -40px;left: -40px;width: 80px;height: 80px;background-color: rgb(254, 215, 102);border-radius: 50%;box-shadow: 0 0 14px 14px rgba(254, 215, 102, 0.2);animation: linear sunLight infinite var(--animation-speed);animation-delay: var(--delay-time);animation-play-state: running;}.moon {position: absolute;bottom: -40px;right: -40px;width: 80px;height: 80px;border-radius: 50%;background-color: #fff;box-shadow: 0 0 7px 7px rgba(255, 255, 255, 0.2);}#sky__stars > div {width: 3px;height: 3px;background-color: #fff;border-radius: 50%;position: absolute;}</style><div class="sky"><div class="sky__phase sky__dawn"></div><div class="sky__phase sky__noon"></div><div class="sky__phase sky__dusk"></div><div class="sky__phase sky__midnight"><div id="sky__stars"><div style="left: 2%; top: 72%;"></div><div style="left: 96%; top: 24%;"></div><div style="left: 74%; top: 31%;"></div><div style="left: 32%; top: 26%;"></div><div style="left: 45%; top: 95%;"></div><div style="left: 78%; top: 89%;"></div><div style="left: 38%; top: 94%;"></div><div style="left: 67%; top: 28%;"></div><div style="left: 99%; top: 67%;"></div><div style="left: 29%; top: 48%;"></div><div style="left: 41%; top: 23%;"></div><div style="left: 74%; top: 98%;"></div><div style="left: 62%; top: 39%;"></div><div style="left: 55%; top: 16%;"></div><div style="left: 2%; top: 33%;"></div><div style="left: 62%; top: 91%;"></div><div style="left: 19%; top: 49%;"></div><div style="left: 55%; top: 70%;"></div><div style="left: 49%; top: 63%;"></div><div style="left: 90%; top: 11%;"></div><div style="left: 34%; top: 73%;"></div><div style="left: 19%; top: 12%;"></div><div style="left: 60%; top: 24%;"></div><div style="left: 48%; top: 12%;"></div><div style="left: 14%; top: 6%;"></div><div style="left: 32%; top: 59%;"></div><div style="left: 21%; top: 62%;"></div><div style="left: 65%; top: 69%;"></div><div style="left: 96%; top: 7%;"></div><div style="left: 17%; top: 5%;"></div><div style="left: 56%; top: 66%;"></div><div style="left: 22%; top: 99%;"></div><div style="left: 91%; top: 13%;"></div><div style="left: 1%; top: 99%;"></div><div style="left: 15%; top: 78%;"></div><div style="left: 61%; top: 68%;"></div><div style="left: 68%; top: 81%;"></div><div style="left: 88%; top: 95%;"></div><div style="left: 43%; top: 86%;"></div><div style="left: 23%; top: 33%;"></div><div style="left: 55%; top: 75%;"></div><div style="left: 1%; top: 14%;"></div><div style="left: 62%; top: 89%;"></div><div style="left: 15%; top: 61%;"></div><div style="left: 32%; top: 47%;"></div><div style="left: 10%; top: 52%;"></div><div style="left: 35%; top: 60%;"></div><div style="left: 65%; top: 81%;"></div><div style="left: 61%; top: 75%;"></div><div style="left: 49%; top: 2%;"></div></div></div><div class="orbit"><div class="sun"></div><div class="moon"></div></div></div></body></html>`;
const times = {
    dawn: {
        lead: 5,
        maintain: 5,
        fall: 19
    },
    noon: {
        lead: 13,
        maintain: 20,
        fall: 20
    },
    dusk: {
        lead: 4,
        maintain: 0,
        fall: 6
    },
    midnight: {
        lead: 10,
        maintain: 30,
        fall: 10
    }
};
var cycleData = [360, 720]; // Time sunrise is at, Time range that the 'day' lasts
function getSunDial(alreadyTried = false) {
    console.log("Updating Solar Cycle Data");
    https.get('https://api.sunrise-sunset.org/json?lat=40.0&lng=-88.0&date=today&formatted=0', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            const resData = JSON.parse(data);
            if (resData.status == "UNKNOWN_ERROR") {
                if (!alreadyTried) {
                    // API page says that this could be fixed if we try again
                    console.log("Request failed, trying again");
                    getSunDial(true);
                }
                else {
                    console.log("Request failed twice, defaulting");
                    cycleData = [360, 720];
                    return;
                }
            }
            else if (resData.status == "OK") {
                console.log("Request succeeded");
                let d = new Date(resData.results.sunrise);
                cycleData = [
                    d.getHours() * 60 + d.getMinutes(),
                    resData.results.day_length / 60
                ];
                console.log(cycleData);
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
        console.log("Defaulting");
        cycleData = [360, 720];
    });
}
function whatTimeIsIt() {
    const d = new Date();
    const a = (d.getMinutes() + d.getHours() * 60);
    if (a > cycleData[0] && a < cycleData[1] + cycleData[0]) {
        // It is during the day
        return (a - cycleData[0]) / cycleData[1] * 5000;
    }
    else if (a < cycleData[0]) {
        // It is before sunrise
        let nightLength = 1440 - cycleData[1];
        let timeBeforeMidnight = 1440 - cycleData[1] - cycleData[0];
        return ((a + timeBeforeMidnight) / nightLength) * 5000 + 5000;
    }
    else {
        // if is after sunset
        let timeAfterSunset = a - cycleData[0] - cycleData[1];
        return (timeAfterSunset / (1440 - cycleData[1])) * 5000 + 5000;
    }
}
getSunDial();
cron.schedule("* * * * *", () => {
    console.log("Updating Image");
    nodeHTMLToImage({
        output: "./image.png",
        type: "png",
        waitUntil: "domcontentloaded",
        html: firstPart + whatTimeIsIt() + secoPart
    }).then(() => {
        console.log("Image created");
        setWallpaper("./image.png").then(() => {
            console.log("Image Updated");
        }).catch(err => {
            console.log(err);
            setSolidColorWallpaper("00FF00");
        });
    });
});
cron.schedule("0 3 * * *", () => {
    getSunDial();
});

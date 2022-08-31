const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minute");
const socondsEl = document.getElementById("seconds");
const millisecondsEl= document.getElementById("milliseconds")
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ms = new Date().getMilliseconds();
    let ampm ="AM";

    if (h > 12){
        h -= 12;
        ampm = "PM"
    }
    if(h< 10){
        h = "0"+h;
    }else {
         h;
    }
    if(m < 10){
        m = "0"+m;
    }else{
         m;
    }
    if(s < 10){
        s = "0"+s;
    }else{
         m;
    }


    hourEl.innerText = h;
    minEl.innerText = m;
    socondsEl.innerText = s;
    millisecondsEl.innerText = ms;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 0.001);
}
updateClock()
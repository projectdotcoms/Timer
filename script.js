const start_stop = document.querySelector('.start_stop');
const restart = document.querySelector('.restart');
let second =0;
let minute =0;
let hour =0;

let leadingsecond =0;
let leadingminute =0;
let leadinghour =0;

function stopwatch(){
    second++;
    if(second/60==1){
        second=0;
        minute++;
        if(minute/60==1){
            minute=0;
            hour++;
        }
    }

    if(second<10 ) {
        leadingsecond="0" +second.toString();
    }
    else{
        leadingsecond=second;
    }
    if(minute<10){
        leadingminute="0" +minute.toString();
    }
    else{
        leadingminute=minute;
    }
    if(hour<10){
        leadinghour="0" +hour.toString();
    }
    else{
        leadinghour=hour;
    }
    let display=document.querySelector('.timer').innerText = leadinghour+":"+leadingminute+":"+leadingsecond;
}

let timeinterval =null;
let timestatus = "stopped";

start_stop.addEventListener('click',function()
{
    if(timestatus==='stopped'){
        timeinterval=window.setInterval(stopwatch,1000);
        timestatus="started";
    }
    else{
        window.clearInterval(timeinterval);
        timestatus="stopped";
    }
});

restart.addEventListener('click',function()
{
   window.clearInterval(timeinterval);
   second=0;
   minute=0;
   hour=0;
   document.querySelector('.timer').innerText="00:00:00";
   
});
function showClock(){
    setInterval(changeTime, 1000);
}

function changeTime(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let dan = "";

    if(hr > 12){
        hr -= 12;
        dan = "PM";
    }else{
        dan = "AM";
    }

    hr = (hr<10)? "0" + hr : hr; 
    min = (min<10)? "0" + min : min; 
    sec = (sec<10)? "0" + sec : sec;

    let hrRotation = hr*30;
    let minRotation = min*6;
    let secRotation = sec*6;
    
    document.getElementById('hourH').style.transform = "rotate("+hrRotation+"deg)";
    document.getElementById('minuteH').style.transform = "rotate("+minRotation+"deg)";
    document.getElementById('secondH').style.transform = "rotate("+secRotation+"deg)";

    document.getElementById("digiTime").innerHTML = hr + ":" + min + ":" + sec + " " + dan;
}


// const checkInBtn = document.querySelectorAll(".Check-In");
// const checkOutBtn = document.querySelectorAll(".Check-Out");
// const leaveBtn = document.querySelectorAll(".Leave");

let presentCount = 0;

function increasePresent(btn) {
 
    presentCount = presentCount + 1;
    document.getElementById("present-count").innerHTML = presentCount;

    let now = new Date();               
    let hours = now.getHours();         
    let minutes = now.getMinutes();    

    let period = "AM";
    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours = hours - 12;       
        }
    }
    if (hours === 0) {
        hours = 12;                    
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let timeString = hours + ":" + minutes + " " + period;

    btn.disabled = true;
    btn.innerText =  timeString;
    btn.style.background = "Green";
}
 
let absentCount = 0;

function increaseAbsent(btn) {
    absentCount = absentCount + 1;
    document.getElementById("absent-count").innerHTML = absentCount;

        let now = new Date();               
    let hours = now.getHours();         
    let minutes = now.getMinutes();    

    let period = "AM";
    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours = hours - 12;       
        }
    }
    if (hours === 0) {
        hours = 12;                    
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let timesString = hours + ":" + minutes + " " + period;
 

    btn.disabled = true;
    btn.innerText = timesString;
    btn.style.background = "blue";
}

let leaveCount = 0;

function increaseLeave(Btn) {
    leaveCount = leaveCount + 1;
    document.getElementById("leave-count").innerHTML = leaveCount;

    Btn.disabled = true;
    Btn.innerText = "Absent"
    Btn.style.background = "Red";
}
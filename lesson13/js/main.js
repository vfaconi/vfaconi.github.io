let now = new Date();
    let month = now.getMonth()+1;
    let dayNumber = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let fullDate = month + "/" + dayNumber + "/" + year + " " + hour + ":" + minute + ":" + second;
    document.getElementById("currentDate").textContent = fullDate;

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

}


    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var d = new Date();
    if (week == "Friday") {
        document.getElementById("demo").innerHTML = week[d.getDay()];
    }


    let now = new Date();
    let month = now.getMonth()+1;
    let dayNumber = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let fullDate = month + "/" + dayNumber + "/" + year + " " + hour + ":" + minute + ":" + second;
    document.getElementById("currentDate").textContent = fullDate;



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

 /*Input: Temperature in Fahrenheit and wind speed in miles per hour
        *Processing: Ask for the user the temperature and wind speed, then these values are store in the "t" and "s" variables,
        /*Calculate the wind factor in the windChill function that will return the result,
        /*This result will output to the user trough the doInputOutput function
        *Output: The wind chill factor
        */
        //function to ask the user the temperature and wind speed and output the wind chill factor
        function doInputOutput() { 
            let t = parseFloat(document.getElementById('inputTemperature').value);
            let s = parseFloat(document.getElementById('inputWindSpeed').value);
            let result = windChill(t, s);
            //Display the wind chill factor
            document.getElementById('output').innerHTML = result;
            }

            function windChill(tempF, speed) { 
                //Calculate the wind chill factor
                let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));
                return windChillFactor;
            }     
    

 

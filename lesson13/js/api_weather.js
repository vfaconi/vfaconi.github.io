//current temperature, current condition description, and humidity
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-23.5062&lon=-47.4559&exclude=minutely,hourly&appid=c18d3183d63b91860166aa45180de0ae&units=imperial"

fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {

          console.log(jsObject);
          const temp = jsObject.current.temp; 
          document.getElementById('temp').textContent = temp;
         const humidity = jsObject.current.humidity;
          document.getElementById('humidity').textContent = humidity;
          const descr = jsObject.current.weather[0].description;;
          document.getElementById('descr').textContent = descr;

        });
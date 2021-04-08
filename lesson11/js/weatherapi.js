const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=c18d3183d63b91860166aa45180de0ae"
 


//weather api activity
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

  //preston page
         fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {

          console.log(jsObject);
          const descr = jsObject.weather[0].description; 
          document.getElementById('descrip').textContent = descr;
          document.getElementById('high').textContent = jsObject.main.temp_max;
          const humidity = jsObject.main.humidity;
          document.getElementById('humidity').textContent = humidity;
          const wind = jsObject.wind.speed;
          document.getElementById('wind').textContent = wind;
           

  //wind chill factor
        result = 35.74 + 0.6215 * humidity - 35.75 * (Math.pow(wind, 0.16)) + 0.4275 * humidity * (Math.pow(wind, 0.16)); 
        document.getElementById("output").textContent = Math.round(result);
        });

        
 
 

     
     

 

 //5 day forecast

 const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c18d3183d63b91860166aa45180de0ae&units=imperial"

 fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
  let day = 0;
  const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for(let i=0; i<jsObject.list.length; i++){
   let d = new Date(jsObject.list[i].dt_txt);
   let time = jsObject.list[i].dt_txt;
   if(time.includes("18:00:00")){
    document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = jsObject.list[i].main.temp;
    const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '.png';
    const desc = jsObject.list[i].weather[0].description;
    document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
    day++;
     }
  }
});

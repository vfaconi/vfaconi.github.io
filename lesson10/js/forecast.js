 //5 day forecast

 const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c18d3183d63b91860166aa45180de0ae"

 fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  let day = 0;
  const weekDays = ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'];
  let d = new Date(jsObject.list[4].dt_txt);
  document.getElementById('dayofweek${day+1}').textContent = weekDays[d.getDay()];
  document.getElementById('forecast${day+1}').textContent = jsObject.list[4].main.temp;

});

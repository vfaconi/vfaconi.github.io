//3 day forecast

const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-23.5062&lon=-47.4559&exclude=minutely,hourly,alerts,current&appid=c18d3183d63b91860166aa45180de0ae&units=imperial"


fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let i = 0; i < jsObject.daily.length; i++) {
            let d = new Date;

            if (i == 0) {
                document.getElementById(`dayofWeek${day + 1}`).textContent = dayofWeek[d.getDay()];
                document.getElementById(`forecast${day + 1}`).textContent = jsObject.daily[i].temp.day;
                const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[i].weather[0].icon + '.png';
                const desc = jsObject.daily[i].weather[0].description;
                document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
                day++;
            }

            if (i == 2) {
                document.getElementById(`dayofWeek${day + 1}`).textContent = dayofWeek[d.getDay()+1];
                document.getElementById(`forecast${day + 1}`).textContent = jsObject.daily[i].temp.day;
                const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[i].weather[0].icon + '.png';
                const desc = jsObject.daily[i].weather[0].description;
                document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
                day++;
            }

            if (i == 3) {
                document.getElementById(`dayofWeek${day + 1}`).textContent = dayofWeek[d.getDay()+2];
                document.getElementById(`forecast${day + 1}`).textContent = jsObject.daily[i].temp.day;
                const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[i].weather[0].icon + '.png';
                const desc = jsObject.daily[i].weather[0].description;
                document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
                day++;
            }

        }
    });







const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if ((i == 1) || (i == 5) || (i == 6)) {
        let card = document.createElement('section');
        let city = document.createElement('h1');
        let motto = document.createElement('h2');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');
        
        city.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rain.textContent = 'Rain: ' + towns[i].averageRainfall;
        if (i == 1) {
        image.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/12/29/15/00/town-582871_960_720.jpg');
        } else if (i == 5){
          image.setAttribute('src', 'https://cdn.pixabay.com/photo/2019/09/08/20/51/landscape-4461904_960_720.jpg');
        }else if (i == 6){
          image.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/08/24/03/25/gadsden-1616084_960_720.jpg');
        }
    
        card.appendChild(city);
        card.appendChild(motto);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rain);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
      }
    }

  });
const apiURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (i == 2) {
        let card = document.createElement('section');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        
        event1.textContent = towns.events;
        event2.textContent = towns.events;
        event3.textContent = towns.events;
        
        
        output.appendChild(event1);
        output.appendChild(event2);
        output.appendChild(event3);
     

        document.querySelector('div.output').appendChild(output);
      }
    }

  });

   

        
 
 

     
     

 

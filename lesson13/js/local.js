

fetch("local.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let image = document.createElement('img');
               
        h2.textContent = business[i].nome;
        p1.textContent = 'Address: ' + business[i].information;        
        image.setAttribute('src', business[i].imageurl);
        image.setAttribute('alt', (business[i].nome));
          
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

    }
    
  });
function spotlight() {

    const requestURL = 'data.json';
    const card1 = document.querySelector('.spotlightCard1');
    const card2 = document.querySelector('.spotlightCard2');
    //Get data
    fetch(requestURL)
        .then (function (response) {
            return response.json();
        })
        .then (function(jsonObject) {
            const businesses = jsonObject['businesses'];
            //Filter array with only gold and silver
            const display = businesses.filter(a => a.membership == "gold" && "silver");
            
            //Pick 2 random gold or silver members
            let random1 = Math.floor(Math.random() * display.length);
            let random2 = Math.floor(Math.random() * display.length);

            //Don't pick same member twice
            while (random1 == random2) {
                random2 = Math.floor(Math.random() * display.length);
              };
            //display members
            displaySpotlight1(display, random1);
            displaySpotlight2(display, random2);
        });
    
        function displaySpotlight1(display, business) {
            
            let card = document.createElement('section');
            let busName = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let logo = document.createElement('img');

            busName.textContent = `${display[business].name}`;
            address.textContent = `${display[business].address}`;
            phone.textContent = `${display[business].phone}`;
            website.textContent = `${display[business].website}`;
    
            logo.setAttribute('class', 'companyLogo');
            logo.setAttribute('src', display[business].image);
            logo.setAttribute('alt', `Logo of ${display[business].name}`);
          
            card.appendChild(logo);
            card.appendChild(busName);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
          
            card1.appendChild(card);
        }
        function displaySpotlight2(display, business) {
            
            let card = document.createElement('section');
            let busName = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let logo = document.createElement('img');

            busName.textContent = `${display[business].name}`;
            address.textContent = `${display[business].address}`;
            phone.textContent = `${display[business].phone}`;
            website.textContent = `${display[business].website}`;
    
            logo.setAttribute('class', 'companyLogo');
            logo.setAttribute('src', display[business].image);
            logo.setAttribute('alt', `Logo of ${display[business].name}`);
          
            card.appendChild(logo);
            card.appendChild(busName);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
          
            card2.appendChild(card);
        }
}
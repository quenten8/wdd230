function loadDirectory() {

    const requestURL = 'data.json';
    const cards = document.querySelector('.cards');
    
    fetch(requestURL)
        .then (function (response) {
            return response.json();
        })
        .then (function(jsonObject) {
            const businesses = jsonObject['businesses'];
            businesses.forEach(displayBusinesses);
        });
    
        function displayBusinesses(business) {
            
            let card = document.createElement('section');
            let busName = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let logo = document.createElement('img');

            busName.textContent = `${business.name}`;
            address.textContent = `${business.address}`;
            phone.textContent = `${business.phone}`;
            website.textContent = `${business.website}`;
    

            logo.setAttribute('src', business.image);
            logo.setAttribute('alt', `Logo of ${business.name}`);
            logo.setAttribute('loading', 'lazy');
          
            card.appendChild(busName);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(logo);
          
            cards.appendChild(card);
          }
    }
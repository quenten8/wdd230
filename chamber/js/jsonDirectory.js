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
          
            card.appendChild(logo);
            card.appendChild(busName);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
          
            cards.appendChild(card);
          }

          const listButton = document.querySelector('.listButton');
          const cardButton = document.querySelector('.cardButton');
          const dirFormat = document.querySelector('.cards')
          listButton.addEventListener('click', () => {dirFormat.classList.add('list'),cardButton.classList.remove('list'),listButton.classList.add('list')}, false);
          cardButton.addEventListener('click', () => {dirFormat.classList.remove('list'),listButton.classList.remove('list'),cardButton.classList.add('list')}, false);
          window.onload = () => {if (window.innerWidth < 900) dirFormat.classList.add('list'),cardButton.classList.remove('list'),listButton.classList.add('list')};
    }
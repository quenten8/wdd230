function loadTemples() {

    const requestURL = 'temples.json';
    const cards = document.querySelector('#temples');
    let n = 1;

    fetch(requestURL)
        .then (function (response) {
            return response.json();
        })
        .then (function(jsonObject) {
            const temples = jsonObject['temples'];
            temples.forEach(displayTemples);
        });
    
        function displayTemples(temple) {
            
            let card = document.createElement('section');
            let templeName = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');
            let services = document.createElement('p');
            let history = document.createElement('p');
            let ordinance = document.createElement('p');
            let session = document.createElement('p');
            let closure = document.createElement('p');
            let logo = document.createElement('img');
            let likeButton = document.createElement('button');
            let buttonContent = document.createElement('span');

            templeName.textContent = `${temple.name}`;
            address.textContent = `${temple.address}`;
            phone.textContent = `${temple.phone}`;
            email.textContent = `${temple.email}`;
            services.textContent = `${temple.services}`;
            history.textContent = `${temple.history}`;
            ordinance.textContent = `${temple.ordinanceSchedule}`;
            session.textContent = `${temple.sessionSchedule}`;
            closure.textContent = `${temple.closureSchedule}`;

            logo.setAttribute('src', temple.image);
            logo.setAttribute('alt', `Image of ${temple.name}`);

            likeButton.setAttribute('class', 'likeButton');
            likeButton.setAttribute('id', `button${n}`);
            buttonContent.setAttribute('class', 'btnContent');
            
            card.appendChild(logo);
            card.appendChild(templeName);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(email);
            card.appendChild(services);
            card.appendChild(history);
            card.appendChild(ordinance);
            card.appendChild(session);
            card.appendChild(closure);
            card.appendChild(likeButton);
            likeButton.appendChild(buttonContent);
            cards.appendChild(card);

            if (window.localStorage.getItem(`button${n}`) == 1) {
                buttonContent.classList.add('liked');
            };
            
            const likeBtn = document.querySelector(`#button${n}`)

            likeBtn.addEventListener('click', () => {
            buttonContent.classList.toggle('liked')

            if (window.localStorage.getItem(event.srcElement.id) == 1) {
                localStorage.removeItem(event.srcElement.id)
            }
            else if (window.localStorage.getItem(`button${n}`) == null) {
                localStorage.setItem(event.srcElement.id, 1)
            } }, false);
            
            n++;
            return n;
          }
    }

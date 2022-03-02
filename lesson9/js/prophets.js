function prophets() {

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then (function (response) {
        return response.json();
    })
    .then (function(jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

    function displayProphets(prophet) {
        
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
      
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of birth: ${prophet.birthplace}`;

function suffix(num) {
    const j = num % 10, k = num % 100;
    if (j == 1 && k != 11) {
      return `${num}st`;
    } else if (j == 2 && k != 12) {
      return `${num}nd`;
    } else if (j == 3 && k != 13) {
      return `${num}rd`;
    } else {
      return `${num}th`;
    }
  }
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${suffix(prophet.order)} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
      
        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
      
        cards.appendChild(card);
      }
}
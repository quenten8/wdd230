function interactive() {
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  let newItem = input.value;
  input.value = '';
  const listItem = document.createElement('li');
  const listText = document.createElement('p');
  const listDelButton = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = newItem;
  listItem.appendChild(listDelButton);
  listDelButton.textContent = '❌';
  list.appendChild(listItem);

  listDelButton.onclick = function() {
    list.removeChild(listItem);
  }
  input.focus();
  });
}
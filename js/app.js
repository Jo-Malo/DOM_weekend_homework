document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(animalListItem);

  event.target.reset();
}

const createAnimalListItem = function (form) {
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');

  const name = buildElement('h2', form.name.value);
  animalListItem.appendChild(name);
  const origin = buildElement('h3', form.origin.value);
  animalListItem.appendChild(origin);
  const family = buildElement('p', form.family.value);
  animalListItem.appendChild(family);

  return animalListItem;
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  return element;
}

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulRef = document.querySelector('#ingredients');

const markup = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList = 'item';
  // console.log(li);
  markup.push(li);
}

ulRef.append(...markup);

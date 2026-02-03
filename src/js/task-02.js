const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientUlRef = document.getElementById('ingredients');

function addIngredient(ingredient) {
  const li = document.createElement('li');
  li.classList.add("item")
  li.textContent = ingredient;
  return li;

}

const ingredientsMarkup = ingredients.map(addIngredient)
ingredientUlRef.append(...ingredientsMarkup);
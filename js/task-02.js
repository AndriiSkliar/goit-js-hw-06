const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const makeList = ingredients => {
    return ingredients.map(ingredient => {
        const itemEl = document.createElement("li");
        itemEl.textContent = ingredient;
        itemEl.classList.add("item")

        return itemEl;
})}

const elements = makeList(ingredients);
list.append(...elements)
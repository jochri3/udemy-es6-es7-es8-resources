const fruits = ['Pommes', 'Mangues', 'Ananas', 'Bananes'];

const listeFruits = document.querySelector('#fruits');

for (let fruit of fruits) {
  const element = document.createElement('p');
  element.setAttribute('id', fruit);
  element.appendChild(document.createTextNode(fruit));
  listeFruits.appendChild(element);
}

const btnRechercher = document.querySelector('#btnRechercher');
const searchTerm = document.querySelector('#searchTerm');

btnRechercher.addEventListener('click', function () {
  if (fruits.includes(searchTerm.value)) {
    const element = document.querySelector(`#${searchTerm.value}`);
    element.setAttribute('class', 'selected');
  } else {
    for (let fruit of listeFruits.children) {
      fruit.removeAttribute('class');
    }
  }
});

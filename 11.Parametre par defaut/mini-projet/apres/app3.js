const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const age = document.querySelector('#age');
const pays = document.querySelector('#pays');

const formData = {};

for (let champs of [nom, prenom, age, pays]) {
  champs.addEventListener('input', function () {
    formData[champs.name] = champs.value;
    console.log(formData);
  });
}

const form = document.querySelector('#employeeForm');

function Employe({
  nom,
  prenom,
  age,
  pays,
  id = Math.floor(Math.random() * new Date()),
}) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = parseInt(age);
  this.pays = pays;
  this.id = id;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const employee = new Employe(formData);
  console.log(employee);
});

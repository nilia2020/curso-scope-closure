var a; //declaración
var b = "b"; //declaramos y asignamos
b = "bb"; //reasignación
var a = "aa"; //redeclaración

//global scope
var fruit = "apple"; //global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; //global por que no la declare
  console.log(country);
}
countries();
console.log(country);

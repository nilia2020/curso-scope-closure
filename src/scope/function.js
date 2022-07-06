function saludo() {
  let userName = "Ana";
  console.log(userName);
  if (userName === "Ana") {
    console.log(`Hello ${userName}!`);
  }
}

saludo();
//Desde afuera no puedo acceder
console.log(`Hello ${userName}!`);

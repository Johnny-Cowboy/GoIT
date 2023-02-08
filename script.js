function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

class Przesylka {
  constructor(name, waga) {
    this.name = name;
    this.waga = waga;
  }
}

let przesylka = new Przesylka("List", "");
let przesylka2 = new Przesylka("Paczka", 20);

function mojaFunkcja(id) {
  const element = document.getElementById("id01");
  const element2 = document.getElementById("id02");
  if (id === 1) {
    //Informacja dla przycisku z informacja o przesylce 1
    informacja = "Typ Twojej przesyłki to: " + przesylka.name;
    element.innerHTML = informacja;

    informacja = "Presyłka nie posiada wagi";
    element2.innerHTML = informacja;
  } else if (id === 2) {
    //Informacja dla przycisku z informacja o przesylce 2
    informacja = "Typ Twojej przesyłki to: " + przesylka2.name;
    element.innerHTML = informacja;

    informacja = "Waga Twojej przesyłki to: " + przesylka2.waga + " kg";
    element2.innerHTML = informacja;
  }
}

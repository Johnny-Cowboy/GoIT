function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

const przesylka = {
  name: "",
  ulica: "",
};

const przesylka2 = {
  name: "",
  ulica: "",
};

przesylka.name = "List";
przesylka2.name = "Paczka";
przesylka2.waga = 20;

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

function processCall(recipient, onAvailable, onNotAvailable) {
  // Symuluj dostępność abonenta za pomocą liczby losowej
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Łączenie z ${name}, proszę czekać...`);
  // Logika odbierania połączenia
}

function activateAnsweringMachine(name) {
  console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
  // Logika aktywacji automatycznej sekretarki
}

function leaveHoloMessage(name) {
  console.log(`Abonent ${name} jest niedostępny, nagrywamy hologram.`);
  // Logika nagrywania hologramu
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);

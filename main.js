let name = document.getElementsByClassName('text name');
let population = document.getElementsByClassName('text population');
let landlocked = document.getElementsByClassName('text landlocked');

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      name[i].textContent = data[i].name.common;
      population[i].textContent = data[i].population;
      landlocked[i].textContent = data[i].landlocked;
    }
  });

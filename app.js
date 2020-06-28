const url = "https://restcountries.eu/rest/v2/all";
const countries = [];

fetch(url)
  // .then((data) => console.log(data))
  .then((data) => data.json())
  .then((data) => countries.push(...data));

function findMatches(wordToMatch, countries) {
  return countries.filter((country) => {
    // create regular expression
    const regex = new RegExp(wordToMatch, "gi");
    return country.name.match(regex);
  });
}

function displayMatches() {
  // console.log(this.value);
  const matchArray = findMatches(this.value, countries);

  // console.log(matchArray);
  const html = matchArray
    .map((country) => {
      return `
    <h2 id="country-name">${country.name}</h2>    
    <div class="container active">
    <p class="list-item" id="region">Region : ${country.region}</p>
     <p class="list-item" id="subRegion"> Sub-region: ${country.subregion}</p>
      <p class="list-item" id="capital">Capital : ${country.capital} </p>
  
     <p class="list-item" id="population">Population : ${country.population}</p>
     <a href="${country.flag}" id="flag-link"> View countrie's flag</a></div>`;
    })
    .join("");
  suggestions.innerHTML = html;
}
const searchInput = document.querySelector(".searchInput");
const suggestions = document.querySelector(".suggestions");
const container = document.querySelector(".container");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

// function getRandom() {
//   let random = Math.floor(Math.random() * 100 + 1);
//   return countries[random];
//   console.log(countries[random]);
// }
// getRandom();

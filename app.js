const btnSubmit = document.querySelector(".btn-submit");

const url = "https://restcountries.eu/rest/v2/all";
const countries = [];

fetch(url)
  // .then((data) => console.log(data))
  .then((data) => data.json())

  .then((data) => countries.push(...data));
// .then((data) => console.log(countries));

btnSubmit.addEventListener("click", () => {
  countries.forEach((country) => {
    console.log(country);
    console.log(country.languages);
    const container = document.querySelector(".container");
    const countryDetails = document.querySelector(".country-details");
    const countryName = document.getElementById("country-name");
    container.classList.add("active");
    country.languages.forEach((language) => {
      console.log(language);
      // *****to do *****
      // display languages whatever the length of the array
    });

    countryName.innerHTML = `${country.name}`;

    countryDetails.innerHTML = `    
    <p class="list-item" id="region">Region : ${country.region}</p>
     <p class="list-item" id="capital">Capital : ${country.capital} </p>
    
    <p class="list-item" id="population">Population : ${country.population}</p>
  `;
    country.languages.innerHTML = `<li class="list-item" id="language">Language : ${country.language}</p>`;
    console.log(country.languages);
  });
});

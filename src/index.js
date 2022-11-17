import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import 'notiflix/dist/notiflix-3.2.5.min.css'
import { fetchCountries } from '../fetchCountries';

// const DEBOUNCE_DELAY = 300;

// fetchCountries(ukraine);
let data;

const inputOfCountry = document.querySelector("input#search-box");
// const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

inputOfCountry.addEventListener('input',debounce(
    searchOfCountries, 3000));



function searchOfCountries(event){
    event.preventDefault();
    const inputData = inputOfCountry.value.trim();
    console.log(inputData);
   
    fetchCountries(inputData)
    .then(renderCountryList)
        
        // const markup = data.results.map((item) =>
        //  console.log(markup));
    .catch(console.log);
}

function renderCountryList(data){
    console.log(data);
    // const markup = data.map((item) => {
    // return 
    // `<li class = "country-listInfo">
    // <img class = "country-flag" src = "${item.flags.svg}"/>
    // <h2 class = "country-list-name">${item.name.official}</h2>
    // </li>`})
}


// function renderCountryList(country) {
//     const markup = country
//       .map((country) => {
//         return `
//             <li>
//               <p><b>Name</b>: ${country.name}</p>
//               <p><b>Email</b>: ${country.capital}</p>
             
//             </li>`;
//       })
//       .join("");
//       countryList.innerHTML = markup;
//   }
  



// function renderOfCountryList({responseAPI}){
//     console.log(responseAPI);
//     clearInput();
//     if (responseAPI.lenght>10){
// Notiflix.Notify.info.("Too many matches found. Please enter a more specific name.");}
// else if (responseAPI.lenght ===1)
// {countryInfo.innerHTML = renderCountryInfo(responseAPI[0];)}


//     }


// function renderOfCountry({name,flags,capital,population,language}){
//     console.log(name);
//     // console.log(name);
//     // console.log(capital);
// };
// renderOfCountry();





// .trim()


// https://restcountries.com/v3.1/name/{name}
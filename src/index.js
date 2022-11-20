import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import 'notiflix/dist/notiflix-3.2.5.min.css'
import { fetchCountries } from '../fetchCountries';

// const DEBOUNCE_DELAY = 300;
const refs = {
    countryList:document.querySelector(".country-list"),
    inputOfCountry:document.querySelector("#search-box"),
    countryInfo:document.querySelector(".country-info"),
};

let dataAPI;

// const inputOfCountry = document.querySelector("input#search-box");
// // const countryList = document.querySelector(".country-list");
// const countryInfo = document.querySelector(".country-info");

refs.inputOfCountry.addEventListener('input',debounce(
    searchOfCountries, 3000));

    // fetchCountries().then(resultOfResponse => {
    //     console.log(resultOfResponse);
    //     getCountryInfo(resultOfResponse);
           
    // })
    // function getCountryInfo(dataAPI){

    //     // fetchCountries.then(resultOfResponse => {
    //     // console.log(resultOfResponse);
    //     // // getCountryInfo(resultOfResponse);
           
    // // })
    //     console.log(dataAPI);
    //     // const {}
    //     const markup = dataAPI.map((item) => {
    //         console.log(dataAPI[0]);
    
    //         return `<li class = "country-listInfo">
    //         <img class = "country-flag" src = "${dataAPI[0].flags.svg}"/>
    //         <h2 class = "country-list-name">${dataAPI[0].name}</h2>
    //         </li>`}).join('');
    //         console.log(markup); 
    //         refs.countryList.innerHTML=markup;
    
    // }


function searchOfCountries(event){
    event.preventDefault(); 
    inputData = refs.inputOfCountry.value.trim();
    console.log(inputData);
   
    fetchCountries(inputData)
    .then(renderCountryList)
        
    .catch(console.log);
}




function renderCountryList(dataAPI){
    console.log(dataAPI);
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
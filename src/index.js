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

refs.inputOfCountry.addEventListener('input',debounce(
    searchOfCountries, 3000));


function searchOfCountries(event){
    event.preventDefault(); 
    const inputData = refs.inputOfCountry.value.trim();
    console.log(inputData);
   
    fetchCountries(inputData)
    .then(getCountryInfo)
    // .then(renderOfCountryList) 

    .catch(console.log);
}



function getCountryInfo(resultOfResponse){
    console.log(resultOfResponse);
    const itemOfArray = resultOfResponse.length;
            // console.log(resultOfResponse[0]);
        // console.log(resultOfResponse[1]);
    if (itemOfArray > 10){
        // clearInput();
        Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
    return
    }
else if (itemOfArray < 10 & itemOfArray > 1) {
    for (let i = 0; i <= itemOfArray-1; i += 1) { 
        console.log(i);
     
    const markup = resultOfResponse.map((item) => {
        return `<li class = "country-listInfo">
           <img class = "country-flag" src = "${resultOfResponse[i].flags.svg}"/>
           <h2 class = "country-list-name">${resultOfResponse[i].name}</h2>
           </li>`}).join('');
          
           refs.countryList.insertAdjacentHTML('beforeEnd', markup);
           console.log(markup); 
        }
        return
}
else if (itemOfArray === 1) {
    const markup = resultOfResponse.map((item) => {
     return `<li class = "country-listInfo">
        <img class = "country-flag" src = "${resultOfResponse[0].flags.svg}"/>
        <h2 class = "country-list-name">${resultOfResponse[0].name}</h2>
        <p class = "country-list-name">Capital: ${resultOfResponse[0].capital}</p>
        <p class = "country-list-name">Population: ${resultOfResponse[0].population}</p>
        <p class = "country-list-name">Language: ${resultOfResponse[0].languages[0].name}</p>
        </li>`}).join('');
        // console.log(markup); 
        refs.countryList.innerHTML=markup;
}
return
}

// function renderCountryList(resultOfResponse){
//     console.log(resultOfResponse);
//     // const markup = resultOfResponse.map((item) => {
//     // return 
//     // `<li class = "country-listInfo">
//     // <img class = "country-flag" src = "${item.flags.svg}"/>
//     // <h2 class = "country-list-name">${item.name.official}</h2>
//     // </li>`})
// }
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
  // function renderOfCountryList(resultOfResponse){
//     console.log(resultOfResponse);
//     // const lengthOf = resultOfResponse.includes('lenght');
//     console.log(lengthOf);
  
//     // clearInput();
// //     if (resultOfResponse.lenght > 10){
// // Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");}
// // else  (resultOfResponse.lenght === 1)
// // {refs.countryInfo.innerHTML = getCountryInfo(resultOfResponse[0])}
//    const renderListCountry = resultOfResponse.map(country => renderOfCountryList(country)).join('');
//    refs.countryList.insertAdjacentHTML('beforeend', renderListCountry)
// }

// function renderOfCountry({name,flags,capital,population,language}){
//     console.log(name);
//     // console.log(name);
//     // console.log(capital);
// };

// renderOfCountry();
// .trim()
// https://restcountries.com/v3.1/nam
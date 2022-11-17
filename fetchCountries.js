export {fetchCountries};
import Notiflix from 'notiflix';
const countryList = document.querySelector(".country-list");

function fetchCountries(name){
return fetch(`https://restcountries.com/v2/name/${name}?fields=name,flags,capital,population,languages`)
.then ((response) => {
    console.log(response);
 if (!response.ok){
    console.log(response);
    // throw new Error(response.status);
    throw new Error(Notiflix.Notify.failure("Oops, there is no country with that name"));
}
return response.json();
})
.then(resultOfResponse => {
    console.log(resultOfResponse);
    getCountryInfo(resultOfResponse);
    // const items = resultOfResponse.map(item => item.value
    //     );
    // console.log(items[0]);
    const markup = resultOfResponse.map((item) => {
  
        return `<li class = "country-listInfo">
        <img class = "country-flag" src = "${resultofresponse[0].flag.svg}"/>
        <h2 class = "country-list-name">${resultofresponse[0].name}</h2>
        </li>`}).join('');
        countryList('.country-list').insertAdjasmentHTML('beforeend',markup);
        console.log(markup); 
})

// .catch(error => {
//     console.log(error);
// })
}
// fetchCountries();

function getCountryInfo(data){
    console.log(data);
  

    // const markup = data.map((item) => {
    //     return 
    //     `<li class = "country-listInfo">
    //     <img class = "country-flag" src = "${item.flags.svg}"/>
    //     <h2 class = "country-list-name">${item.name.official}</h2>
    //     </li>`})
    // const name = data.name;

    // // console.log(name);
    // const capital = data.languages[0];
    // console.log(capital);
}
// getCountryInfo();

    // if (page > totalPages) {
    //   return toggleAlertPopup();

    // document.addEventListener(
    //     "scroll",
    //     _.debounce(() => {
    //       console.log("Scroll handler call after 300ms pause");
    //     }, 300)
    //   );

// const name = "ukraine"

// fetch(`https://restcountries.com/v3.1/name/ukraine`)
// .then(response =>{
//     // console.log(response.json());
// return response.json();
// })
// .then(country => {
//     console.log(country);
// });

// const url = `https://restcountries.com/v3.1/name/{name}`;
// return fetch(`https://restcountries.com/v3.1/{${name}}fields={name.official},{capital},{population},{languages}`)
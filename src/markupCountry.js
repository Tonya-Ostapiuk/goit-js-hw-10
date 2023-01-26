export const countryInfo = document.querySelector('.country-info');
export const countryList = document.querySelector('.country-list');

export function markupCountry(data) {
  countryList.innerHTML = '';
    const markup = data
      .map(country => {
        return `<h1>
         <img src="${country.flags.svg}" alt="${
            country.name.official
        }" width="100" height="50" /> 
          ${country.name.official}
        </h1>
        <ul class="country-info list">
          <li class="country-info item">
            <h2>Capital:</h2>
            <p>${country.capital}</p>
          </li>
          <li class="country-info item">
            <h2>Population:</h2>
            <p>${country.population}</p>
          </li>
          <li class="country-info item">
            <h2>Languages:</h2>
            <p>${Object.values(country.languages)}</p>
          </li>
        </ul>`;
      })
      .join('');
  
    countryInfo.innerHTML = markup;
  };

  export function markupCountryItem(data) {
    countryInfo.innerHTML = '';
    const markupItem = data
      .map(country => {
        return  `<h1 class="title">
        <img src="${country.flags.svg}" alt="${
           country.name.official
       }" width="60" height="30" /> 
         ${country.name.official}
       </h1>`;
      })
      .join('');
  
    countryList.innerHTML = markupItem;
  };
  
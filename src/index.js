import './css/styles.css';

import { fetchCountries } from './fetchCountries.js';
import { markupCountry, markupCountryItem} from './markupCountry.js';
import { countryInfo } from './markupCountry.js';
import { countryList } from './markupCountry.js';


import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');


searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));


function onInput(e) {
  let inputCountry = e.target.value.trim();

  if (inputCountry) {
    return fetchCountries(inputCountry)
      .then(data => {
       
        if (data.length === 1) {
        return markupCountry(data);

        } else if (data.length >= 2 && data.length <= 10) {
          return markupCountryItem(data)        
        }

        return Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        )
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name')
      });
  };

};


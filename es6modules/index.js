import Flickity from 'flickity';
import { uniq } from 'lodash';
import jsonp from 'jsonp';
import { apiUrl, urlQuery, callApi } from './src/config';
import { swapImage } from './src/swapImage';

const cakes = [1, 3, 4, 4, 34];
const query = `${apiUrl}${urlQuery}`;
console.log(query);

const getImage = callApi(query);

getImage
  .then((data) => {
    console.log(data);
    const { homeworld } = data;
    callApi(homeworld)
      .then((planet) => {
        const { name: planetName } = planet;
        swapImage('.starwars', planetName);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));

/* eslint-disable */
const swFlick = new Flickity('.carousel', {
    cellSelector: '.cell',
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true
});
/* eslint-enable */

console.log(uniq(cakes));

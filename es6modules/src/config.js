// Named export.
export const apiUrl = 'https://swapi.dev/api';
export const urlQuery = '/people/1/';

export function callApi(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}

/* eslint-disable */


// export { apiUrl, urlQuery, callApi };

// module.exports = uri;
// export default apiUri;

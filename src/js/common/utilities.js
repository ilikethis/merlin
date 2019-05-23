import axios from 'axios';

/**
 * Short hand for document.querySelector
 * @param {string} selector
 * @param {object} scope
 * @return {object}
 */
export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
};

/**
 * Short hand for document.querySelectorAll
 * @param {string} selector
 * @param {object} scope
 * @return {array}
 */
export function qsa(selector, scope) {
  return (scope || document).querySelectorAll(selector);
};

/**
 * Injects and initialize any script required
 * @param {string} uri
 * @return {Promise}
*/
export function httpPromiseHandler(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

/**
 * Axios library handler
 *
 * NOTE:: using the same placeholder to print images
 * TODO:: I think it's better to create a method to
 *        pass the queries (posts|users|photos) instead burn it out
 * @return {array}
 */
export const httpAxiosHandler_ =
  (async () => {
  const basePath = 'https://jsonplaceholder.typicode.com/';
  const [posts, users, pictures] = await Promise.all([
    // axios.get(basePath + 'posts'),
    // axios.get(basePath + 'users'),
    // axios.get(basePath + 'photos')
  ]);

  let response = [];

  // users.data.forEach((itm, i) => {
  //   response.push(Object.assign({}, itm, posts.data[i], pictures.data[i]));
  // });

  return response;
})();

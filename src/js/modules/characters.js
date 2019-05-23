import { DataSelectors } from '../common/constants';
import { httpPromiseHandler, qsa, qs} from '../common/utilities';
import { nun as template } from '../common/nunjucks';
/**
 * Characters class
 */

const BTN_FILTER = '.filter';

class Characters {
  /**
   * @param {element} element return the module/section element
   */
  constructor(element) {
    /**
     * The element
     * @type {HTMLElement}
     * @private
     */
    this.element = element;

    this.filter = null;

    this.url = 'https://rickandmortyapi.com/api/';

    this.init();
  }

  /**
   * Init function
   */
  init() {
    this.filter = document.querySelector(BTN_FILTER);

    console.log(this.filter);

    this.getCharacters();
    this.bindEvents();
  }

  /**
   * get Characters
   */
  getCharacters() {
    const dataResponse = httpPromiseHandler(`${this.url}/character`);

    dataResponse.then((data)=> {
      const characters = JSON.parse(data);

  		this.element.innerHTML = template.renderString(this.element.innerHTML, {characters: characters.results});
    });
  }

  filterCharacters(param) {
    const dataResponse = httpPromiseHandler(`${this.url}/character/${param}`);

    dataResponse.then((data)=> {
      const characters = JSON.parse(data);
  		this.element.innerHTML = template.render(this.element.innerHTML, {characters_: characters.results});
    });
  }

  bindEvents() {
    this.filter.addEventListener('click', (e)=> {
      this.filterCharacters(e.target.value);
    });
  }
}

/**
 * Initializes all the instance of the component
 * @return {Array.<Characters>}
 */
export function init() {
  return [...qsa(DataSelectors.CHARACTERS_MODULE)]
      .map((el) => new Characters(el));
}

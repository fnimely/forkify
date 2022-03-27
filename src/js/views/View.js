import icons from 'url:../../img/icons.svg';
import { numberToFraction } from '../helpers';

export default class View {
  _data;

  /**
   *
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] if false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} a markup string is returend if render=false
   * @this {Object} View instance
   * @author
   * @todo Finish the implementation display number of pages between two pagination
   * ability for user to sort search result by duration or num of ingredients
   * Perform ingrededient validation in view before submitting form
   * Features - shopping list, weekly meal planning feature, get nutrition data for
   * each ingredient from spoonaculart ingredient
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markUp = this._generateMarkup();

    if (!render) return markUp;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  // only change markup when there's a difference btw old(current) markup
  update(data) {
    this._data = data;
    const newMarkUp = this._generateMarkup();

    // convert markup string to DOM object living in memory
    // use obj to comare to actual DOM on the page
    const newDOM = document.createRange().createContextualFragment(newMarkUp); // convert string to DOM(virtual) obj
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    // console.log(newElements);
    // console.log(curElements);

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // change text content of curEl to newEl is they are not the same
      // update the DOM only in places they have changed
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log(newEl.firstChild?.nodeValue.trim());
        curEl.textContent = newEl.textContent;
        // console.log(curEl.textContent);
      }

      // update changed attribute
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
        // console.log(newEl.attributes);
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markUp = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderError(message = this._errorMsg) {
    const markUp = `
        <div class="error">
        <div>
            <svg>
            <use href="${icons}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${message}</p>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderMsg(message = this._msg) {
    const markUp = `
        <div class="message">
        <div>
            <svg>
            <use href="${icons}#icon-smile-triangle"></use>
            </svg>
        </div>
        <p>${message}</p>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
}

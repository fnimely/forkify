import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currPage = this._data.page;
    // Page 1, there are other pages
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    console.log(this._data);

    // page 1, no other page
    if (currPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        </button>
      `;
    }

    // last page
    if (currPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
        </button>
      `;
    }

    // other page
    if (currPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        </button>
      `;
    }

    return '';
  }
}

export default new PaginationView();

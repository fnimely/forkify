import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      // console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const rightBtn = `
      <button data-goto="${
        currPage + 1
      }"  class="btn--inline pagination__btn--next">
      <span>Page ${currPage + 1}</span>
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>
    `;

    const leftBtn = `
      <button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
      </button>
    `;

    // Page 1, there are other pages
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1, no other page
    if (currPage === 1 && numPages > 1) {
      return rightBtn;
    }

    // last page
    if (currPage === numPages && numPages > 1) {
      return leftBtn;
    }

    // other page
    if (currPage < numPages) {
      return leftBtn.concat(rightBtn);
    }
    return '';
  }
}

export default new PaginationView();

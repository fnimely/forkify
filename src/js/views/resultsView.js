import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsViewv extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = `No recipe found from search, please try again.`;
  _msg = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultsViewv();

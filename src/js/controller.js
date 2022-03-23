'user strict';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable'; // polyfil all else
import 'regenerator-runtime/runtime'; // polyfil async await

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // don't diplay spinner or fetch data if there's no id
    if (!id) return;
    recipeView.renderSpinner();

    //  loading recipe
    await model.loadRecipe(id);

    // rendering the recipe
    recipeView.render(model.state.recipe);
    const markUp = `
     `;
  } catch (err) {
    recipeView.renderError();
  }
};
// controlRecipes();

const controllSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    console.log(resultsView);

    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search results
    await model.loadSearchResults(query);

    // render result
    // console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(1));

    // render initial pagination button
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controllPagination = function (goToPage) {
  // render new result
  resultsView.render(model.getSearchResultsPage(goToPage));

  // render new pagination button
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update recipe servings in the state
  model.updateServings(newServings);

  // update the recipe view
  recipeView.render(model.state.recipe);
};

// follows the p-s pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controllSearchResults);
  paginationView.addHandlerClick(controllPagination);
};
init();

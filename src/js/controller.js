'user strict';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable'; // polyfil all else
import 'regenerator-runtime/runtime'; // polyfil async await

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
    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search results
    await model.loadSearchResults('pizza');

    // render resu;t
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

// follow the p-s pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controllSearchResults);
};
init();

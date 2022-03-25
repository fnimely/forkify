'user strict';
import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import AddRecipeView from './views/addRecipeView';

import 'core-js/stable'; // polyfil all else
import 'regenerator-runtime/runtime'; // polyfil async await
import addRecipeView from './views/addRecipeView';
import { async } from 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // don't diplay spinner or fetch data if there's no id
    if (!id) return;
    recipeView.renderSpinner();

    // update resulta view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // update bookmarkView
    bookmarksView.update(model.state.bookmarks);

    //  loading recipe
    await model.loadRecipe(id);

    // rendering the recipe
    recipeView.render(model.state.recipe);
    // const markUp = `
    //  `;
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};
// controlRecipes();

const controllSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // console.log(resultsView);

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
  // recipeView.render(model.state.recipe);
  // only update text and attribute in the DOM without rerendering
  recipeView.update(model.state.recipe);
};

const controllAddBookmark = function () {
  // add or remove bookmark if it is or isn't already bookmared
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  // console.log(model.state.recipe.bookmarked);

  // update recipe view
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controllBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controllAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner
    addRecipeView.renderSpinner();

    // upload new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // render recipe
    recipeView.render(model.state.recipe);

    // success message
    addRecipeView.renderMsg();

    // close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.log(err);
    addRecipeView.renderError(err.message);
  }
  // console.log(newRecipe);

  // upload new recipe data
};

// follows the p-s pattern
const init = function () {
  bookmarksView.addHandlerRender(controllBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controllAddBookmark);
  searchView.addHandlerSearch(controllSearchResults);
  paginationView.addHandlerClick(controllPagination);
  addRecipeView._addHandlerUpload(controllAddRecipe);
};
init();

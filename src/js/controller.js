'user strict';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // polyfil all else
import 'regenerator-runtime/runtime'; // polyfil async await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

//////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // don't diplay spinner or fetch data if there's no id
    if (!id) return;
    recipeView.renderSpinner();

    //  loading recipe
    await model.loadRecipe(id);

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    console.log(res, data);

    // rendering the recipe
    recipeView.render(model.state.recipe);
    const markUp = `
     `;
  } catch (err) {
    alert(err);
  }
};
controlRecipes();

['hashChange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

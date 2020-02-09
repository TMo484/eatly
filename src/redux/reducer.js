import { CHANGE_PAGE } from './actions.js';
import { createStore } from 'redux';

export const WELCOME_PAGE = "WELCOME_PAGE";
export const HOMEPAGE = "HOMEPAGE";
export const SEARCH_INGREDIENT = "SEARCH_INGREDIENT";
export const RECIPE_RESULTS = "RECIPE_RESULTS";

const initialState = {
    page: SEARCH_INGREDIENT
}

function eatlyApp(state = initialState, action) {
    switch(action.type) {
        case CHANGE_PAGE:
            return Object.assign({}
                                 , state
                                 , {
                                     page: action.page
                                 })
        default:
            return state
    }
}

const eatlyStore = createStore(eatlyApp)

export default eatlyStore;
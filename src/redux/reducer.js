import { CHANGE_PAGE } from './actions.js';
import { createStore } from 'redux';

export const WELCOME_PAGE = "WELCOME_PAGE";
export const HOMEPAGE = "HOMEPAGE";
export const SEARCH_INGREDIENT = "SEARCH_INGREDIENT";

const initialState = {
    page: WELCOME_PAGE
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
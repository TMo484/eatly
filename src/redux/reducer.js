import { CHANGE_PAGE } from './actions.js';

const initialState = {
    page: 'homepage'
}

function eatlyApp(state = initialState, action) {
    alert(`${state.page} - ${action.page}`)
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

export default eatlyApp
import { combineReducers } from 'redux';
import { ADD_TODO, FETCH_TODOS, FINISH_TODO } from '../actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            console.info('%c 💩 ', 'background: #ffbf27', action);
            return [ ...state, action.payload ]
        case FINISH_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
};

const getTodos = (state = [], action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    todos,
    getTodos
});
import { combineReducers } from 'redux';
import { ADD_TODO, FETCH_TODOS, FINISH_TODO } from '../actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [ ...state, action.payload ]
        case FINISH_TODO:
            let index = state.findIndex(todo => todo.id === action.payload);
            state[ index ].status = !state[ index ].status;
            return [ ...state ];
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
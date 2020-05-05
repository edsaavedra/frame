import { combineReducers } from 'redux';
import { ADD_TODO, FETCH_TODOS, FINISH_TODO, IMAGES_SUCCESS, FETCH_IMAGES, DELETE_TODO_SAGA } from '../actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [ ...state, action.payload ]
        case FINISH_TODO:
            let index = state.findIndex(todo => todo.id === action.payload);
            state[ index ].status = !state[ index ].status;
            return [ ...state ];
        case DELETE_TODO_SAGA:
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

const nextPage = (state = 1, action) => {
    if (action.type === IMAGES_SUCCESS) return state + 1;
    return state;
}

const images = (state = [], action) => {
    if (action.type === FETCH_IMAGES) return [ ...state, ...action.payload ];
    return state;
}

export default combineReducers({
    todos,
    getTodos,
    nextPage,
    images
});

export const ADD_TODO = "ADD_TODO";
export const FINISH_TODO = "FINISH_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_IMAGES = "FETCH_IMAGES";
export const IMAGES_SUCCESS = "IMAGES_SUCCESS";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SAGA = "DELETE_TODO_SAGA";

export const addTodoAction = todo => ({
    type: ADD_TODO,
    payload: todo
})

export const finishTodoAction = id => ({
    type: FINISH_TODO,
    payload: id
})

export const fetchTodosAction = todos => ({
    type: FETCH_TODOS,
    payload: todos
})

export const fetchImagesAction = images => ({
    type: FETCH_IMAGES,
    payload: images
})

export const deleteTodoAction = id => ({
    type: DELETE_TODO,
    payload: id
})

export const deleteTodoFromSaga = id => ({
    type: DELETE_TODO_SAGA,
    payload: id
})

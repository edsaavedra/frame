export const ADD_TODO = "ADD_TODO";
export const FINISH_TODO = "FINISH_TODO";
export const FETCH_TODOS = "FETCH_TODOS";

export const addTodoAction = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const finishTodoAction = id => {
    return {
        type: FINISH_TODO,
        payload: id
    }
}

export const fetchTodosAction = todos => {
    return {
        type: FETCH_TODOS,
        payload: todos
    }
}
import { connect } from 'react-redux'
import {finishTodoAction} from '../actions';
import TodoList from './TodoList';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onFinishTodo: id => dispatch(finishTodoAction(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

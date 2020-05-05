import { connect } from 'react-redux'
import { finishTodoAction, deleteTodoAction } from '../actions';
import TodoList from './TodoList';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onFinishTodo: id => dispatch(finishTodoAction(id)),
    onDeleteTodo: id => dispatch(deleteTodoAction(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

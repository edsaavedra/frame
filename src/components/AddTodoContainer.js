import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import { addTodoAction } from "../actions";

const mapDispatchToProps = dispatch => ({
    onAddTodo: text => {
        return dispatch(addTodoAction({
        id: Math.round(Math.random() * 100),
        text,
        status: true
    }))}
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
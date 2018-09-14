import { connect } from 'react-redux';
import * as actions from '../actions/add_to_do';
import Todo from '../components/to_do_component';

const mapStateToProps = state => {
return {
todo: state.todo,
}
}

const mapDispatchToProps = dispatch => {
return {
addTodo: (todo) => dispatch(actions.addTodo(todo)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
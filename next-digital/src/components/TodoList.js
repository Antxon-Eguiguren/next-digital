import PropTypes from 'prop-types';
import { TODO } from '../models/todo';

function TodoList({ todos }) {
  return todos.map((todo) => <li key={todo.id}>{todo.title}</li>);
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(TODO)),
};

export default TodoList;

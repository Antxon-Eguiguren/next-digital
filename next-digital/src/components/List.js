import PropTypes from 'prop-types';
import { USER } from '../models/user';

function List({ data }) {
  return data.map((user) => <li key={user.id}>{user.name}</li>);
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(USER)),
};

export default List;

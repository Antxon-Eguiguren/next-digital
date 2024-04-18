import PropTypes from 'prop-types';
import { USER } from '../models/user';
import { useNavigate } from 'react-router-dom';

function List({ data }) {
  const navigate = useNavigate();

  const handleClick = ({ user }) => {
    navigate(`/user/${user.id}`, { state: { user } });
  };

  return data.map((user) => (
    <li style={{ cursor: 'pointer' }} key={user.id} onClick={() => handleClick({ user })}>
      {user.name}
    </li>
  ));
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(USER)),
};

export default List;

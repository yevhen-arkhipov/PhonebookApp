import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const userLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>{user.email}</p>
      <button type="button" onClick={userLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

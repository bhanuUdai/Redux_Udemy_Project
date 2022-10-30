import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from './store/index';
import { useSelector } from 'react-redux';
const Header = () => {

  const login =useSelector(state=>state.auth.login)

  const dispatch=useDispatch()
  const logoutHandler=()=>
  {
    dispatch(authActions.isLogout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
       { login && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginPage = ({setIsAuth}) => {
  const navigate = useNavigate();
  const login = () => {
    navigate('/');
    setIsAuth(true);
    localStorage.setItem('isAuth',true);
  }
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1>Login</h1>
        <button onClick={login}  className="btn btn-primary">Login</button>
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  setIsAuth:PropTypes.func
}

export default LoginPage
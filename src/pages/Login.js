import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Layout from "components/common/Layout";
import { useInput } from 'hooks';

import { loginAsync } from 'redux/user/ueserSlice';

function Login() {
  const { userInfo, loginLoding, logInError, logInDone } = useSelector((state => state.user));
  const [ userId, onChangeUserId, setUserId ] = useInput('');
  const [ userPassword, onChangeUserPassword, setUserPassword ] = useInput('');
  const dispatch = useDispatch();

  const loginSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(loginAsync({
      data : {
        userId,
        userPassword
      }
    }));
    setUserId('');
    setUserPassword('');
  });
  return (
    <Layout>
      <form
        onSubmit={(e) => loginSubmit(e)}
      >
        <div>
          <input 
            type='text' 
            value={userId}
            onChange={onChangeUserId} 
          />
        </div>
        <div>
          <input 
            type='password' 
            value={userPassword}
            onChange={onChangeUserPassword} 
          />
        </div>
        <div>
          <button>signIn</button>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
import { useEffect, useState, useRef } from "react";
import logoUrl from "../../assets/images/logo_kopkarla.png";
import logoUrlColor from "../../assets/images/logo_kopkarla_color.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import FormLogin from "../../components/Form/User/FormLogin";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, resetAuth } from "../../stores/features/authSlice";

import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const NotificationLogin = useRef<NotificationElement>();

  const {auth, isAuthError, isAuthSuccess, isAuthLoading, messageAuth} = useSelector(
    (state : any) => state.authReducer
  );

  useEffect(()=>{
    if(isAuthSuccess && auth){
      // dispatch(resetAuth());
      navigate('/');
    }
  },[isAuthSuccess, auth])

  useEffect(()=>{
    if(isAuthError && messageAuth){
      setMsg(messageAuth);
      NotificationLogin.current?.showToast();
      dispatch(resetAuth());
    }
  },[isAuthError, messageAuth])

  const submitLogin = (e : any) => {
    e.preventDefault();
    dispatch(LoginUser({
      email, password
    }));
  }

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <Notification
          getRef={(el) => {
            NotificationLogin.current = el;
          }}
          options={{
            duration: 3000,
          }}
          className="flex flex-col sm:flex-row"
        >
          <div className="font-medium normal-case">
            {msg}
          </div>
        </Notification>
        <form onSubmit={submitLogin}>
          <FormLogin 
            logoUrl={logoUrl}
            logoUrlColor={logoUrlColor}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isAuthLoading={isAuthLoading}
          />
        </form>
      </div>
    </>
  );
}

export default Login;

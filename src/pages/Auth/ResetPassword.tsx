import { useEffect, useState, useRef } from "react";
import logoUrl from "../../assets/images/logo_kopkarla.png";
import logoUrlColor from "../../assets/images/logo_kopkarla_color.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import FormResetPassword from "../../components/Form/User/FormResetPassword";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ResetPasswordByToken, VerifyToken, resetAuth } from "../../stores/features/authSlice";

import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";

const ResetPassword = () => {
  const {token} = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const NotificationLogin = useRef<NotificationElement>();

  const {auth, dataToken, isAuthError, isAuthSuccess, isAuthLoading, messageAuth} = useSelector(
    (state : any) => state.authReducer
  );

  useEffect(()=>{
    if(isAuthSuccess && dataToken){
      console.log(dataToken, 'data token');
      setEmail(dataToken.email);
      resetAuth()
    }
  },[isAuthSuccess, dataToken]);

  useEffect(()=>{
    dispatch(VerifyToken({token}));
  },[token]);

  useEffect(()=>{
    if(isAuthSuccess && messageAuth){
      setMsg(messageAuth);
      NotificationLogin.current?.showToast();
      dispatch(resetAuth());
      setEmail('');
      setPassword('');
      setConfPassword('');
    }
  },[isAuthSuccess, messageAuth])

  useEffect(()=>{
    if(isAuthError && messageAuth){
      setMsg(messageAuth);
      NotificationLogin.current?.showToast();
      dispatch(resetAuth());
    }
  },[isAuthError, messageAuth])

  const submitResetPassword = (e : any) => {
    e.preventDefault();
    dispatch(ResetPasswordByToken({
      token, password, confPassword
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
        <form onSubmit={submitResetPassword}>
          <FormResetPassword 
            logoUrl={logoUrl}
            logoUrlColor={logoUrlColor}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confPassword={confPassword}
            setConfPassword={setConfPassword}
            isAuthLoading={isAuthLoading}
          />
        </form>
      </div>
    </>
  );
}

export default ResetPassword;

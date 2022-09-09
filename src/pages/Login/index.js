import React from 'react';
import { LogBg } from '../../assets';
import '../Register/register.scss';
import {Button, Gap, Input, LinkLabel} from '../../components';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  return (
    <div className="container">
        <div className="left">
            <img className='cover' src={LogBg} alt="imageBg" />
        </div>
        <div className="right">
            <h2 className='title'>Login</h2>
            <Input label="Email" placeholder="Email" type="email" required />
            <Gap height={18} />
            <Input label="Password" placeholder="password" type="password" required />
            <Gap height={20} />
            <Button title="Register" onClick={() => history.push('/')}/>
            <Gap height={100} />
            <LinkLabel title="Belum punya akun? Register disini." onClick={() => history.push('/register')} style={{ color: "#333 !important"}} />
        </div>
    </div>
  );
};

export default Login;
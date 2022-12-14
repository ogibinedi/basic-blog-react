import React from 'react';
import { RegBg } from '../../assets';
// import './register.scss';
import {Button, Gap, Input, LinkLabel} from '../../components';
import { useHistory } from 'react-router-dom';
const Register = () => {
  const history = useHistory();
  return (
    <div className="container">
        <div className="left">
            <img className='cover' src={RegBg} alt="imageBg" />
        </div>
        <div className="right">
            <h2 className='title'>Register</h2>
            <Input label="Full Name" placeholder="Full Name" type="text" required />
            <Gap height={18} />
            <Input label="Email" placeholder="Email" type="email" required />
            <Gap height={18} />
            <Input label="Password" placeholder="password" type="password" required />
            <Gap height={20} />
            <Button title="Register" onClick={() => history.push('/')} />
            <Gap height={100} />
            <LinkLabel title="Kembali ke Login" onClick={() => history.push('/login')} />
        </div>
    </div>
  );
};

export default Register;
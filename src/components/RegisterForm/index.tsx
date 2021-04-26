import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { register as registerAPI } from '~src/services/auth'
import styles from './RegisterForm.module.scss'

enum roles {
  user = "user",
  admin = "admin",
  moderator = "moderator"
}
type Inputs = {
  text: string,
  textRequired: string,
};
interface RegisterInputs {
  username: Inputs,
  password: Inputs,
  repassword: Inputs,
  roles: roles[]
};

function index(props) {

  const { register, handleSubmit, watch, errors } = useForm<RegisterInputs>();
  const _Submit = async (data: {}) => {
    console.log('_Submit data', data);
    try {
      // const rs = await registerAPI({
      //   username: '',
      //   email: '',
      //   password: '',
      //   roles: ['user']
      // })
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    
    return () => {}
  }, [])
  console.log(watch("username"));
  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  return (
    <form onSubmit={handleSubmit(_Submit)}>
  
      <input name="username" defaultValue="" ref={register({ required: true })} />
      {errors.username && <span>Hãy điền tên đăng nhập</span>}
      
      <input name="password" defaultValue=""  ref={register({ required: true })} />
      {errors.password && <span>Hãy điền mật khẩu</span>}
      
      <select name="roles" ref={register({ required: true })} multiple>
        <option value="user">user</option>
        <option value="admin">admin</option>
        <option value="moderator">mod</option>
      </select>
      {errors.roles && <span>Phải chọn ít nhất một quyền</span>}
      <input type="submit" />
    </form>
  );
}

export default index;

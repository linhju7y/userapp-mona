import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LoginForm.module.scss';

type Inputs = {
  text: string;
  textRequired: string;
};
interface LoginInputs {
  username: Inputs;
  password: Inputs;
}

function index(props: any) {
  const { register, handleSubmit, watch, errors } = useForm<LoginInputs>();

  useEffect(() => {
    return () => {};
  }, []);

  const _Submit = async (data: {}) => {
    console.log('LoginForm _Submit data', data);
    props?.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(_Submit)} className={styles.container}>
      <input name="csrfToken" type="hidden" defaultValue={props?.csrfToken} />
      <label className={styles.fcontrol}>
        <FontAwesomeIcon icon={faUserCircle} />
        <input
          name="username"
          defaultValue=""
          ref={register({ required: true })}
        />
        {errors.username && <span>Hãy điền tên đăng nhập</span>}
      </label>

      <input
        name="password"
        defaultValue=""
        ref={register({ required: true })}
      />
      {errors.password && <span>Hãy điền mật khẩu</span>}

      <input type="submit" value={'Đăng nhập'} />
    </form>
  );
}

export default index;

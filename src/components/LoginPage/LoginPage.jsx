import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useFormValidation, validateInputs} from '../../services/validation';
import Input from '../Input';
import Button from '../Button';
import classes from './LoginPage.module.scss';

const LoginPage = ({onSubmit}) => {
  const [disabled, setDisabled] = useState(true);
  const {values, handleChange, handleBlur, handleSubmit, errors} =
    useFormValidation(
      {username: '', password: ''},
      validateInputs,
      setDisabled
    );

  return (
    <div className={classes.login}>
      <h1 className={classes.login__header}>Log in to continue</h1>
      <form
        className={classes.login__form}
        onSubmit={event => handleSubmit(event, onSubmit)}
      >
        <Input
          type="text"
          id="username"
          text="Login"
          value={values.username}
          error={!!errors.username || false}
          errorMessage={errors.username || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          type="password"
          id="password"
          text="Password"
          value={values.password}
          error={!!errors.password || false}
          errorMessage={errors.password || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button disabled={disabled} type="submit" btnRole="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

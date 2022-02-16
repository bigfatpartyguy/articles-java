import React from 'react';
import styles from '../TextArea/TextArea.module.scss';

const TextArea = ({
  error,
  errorMessage,
  text,
  onChange,
  onBlur,
  value,
  id,
  placeholder,
}) => {
  return (
    <div className={styles['textarea-wrapper']}>
      <label htmlFor={id}>
        <span>{text}</span>
        <span className={styles.errorMsg}>{errorMessage}</span>
      </label>
      <textarea
        className={error ? styles.error : null}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
    </div>
  );
};

export default TextArea;

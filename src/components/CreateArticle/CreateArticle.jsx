import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Select, {NonceProvider} from 'react-select';
import * as request from '../../services/requests';
import {CATEGORIES, ARTICLES} from '../../services/requests/urls';
import {categoriesToSelectOptions} from '../../services/mappers';
import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../Button';
import {useFormValidation, validateInputs} from '../../services/validation';
import styles from './CreateArticle.module.scss';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: '10px',
    borderRadius: '0.4rem',
  }),
  container: (provided, state) => ({
    ...provided,
    marginBottom: '40px',
    borderRadius: '5px',
  }),
};

const CreateArticle = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const {values, handleChange, handleBlur, handleSubmit, errors} =
    useFormValidation(
      {articleTitle: '', articleText: ''},
      validateInputs,
      setDisabled
    );

  useEffect(() => {
    request.get(CATEGORIES).then(result => {
      setOptions(categoriesToSelectOptions(result));
    });
  }, []);

  const onSubmit = formData => {
    const {articleTitle: title, articleText: text} = formData;
    const categoriesIds = selectedOptions.map(option => option.id);
    request.post(ARTICLES, {title, text, categoriesIds});
    window.location.assign('/articles');
  };

  return (
    <section className={styles['create-article']}>
      <header>
        <h1>Create a new article</h1>
      </header>
      <form onSubmit={event => handleSubmit(event, onSubmit)}>
        <div>
          <Select
            className={styles.select}
            styles={customStyles}
            options={options}
            onChange={setSelectedOptions}
            isMulti
            placeholder="Select category"
          />
        </div>
        <Input
          type="text"
          id="articleTitle"
          text="Title"
          value={values.articleTitle}
          error={!!errors.articleTitle}
          errorMessage={errors.articleTitle || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextArea
          id="articleText"
          text="Text"
          value={values.articleText}
          error={!!errors.articleText}
          errorMessage={errors.articleText || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className={styles['confirmation-footer']}>
          <Button disabled={disabled} type="submit" btnRole="submit">
            Create article
          </Button>
          <Link to="/articles">
            <Button type="button" btnRole="primary">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default CreateArticle;

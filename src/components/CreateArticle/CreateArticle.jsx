import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import * as request from '../../services/requests';
import {CATEGORIES} from '../../services/requests/urls';
import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../Button';
import {useFormValidation, validateInputs} from '../../services/validation';
import styles from './CreateArticle.module.scss';

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
      const groupedOptions = result.reduce((parentOptions, category) => {
        if (category.parentId === null) {
          return [
            ...parentOptions,
            {id: category.id, label: category.name, options: []},
          ];
        }
        return parentOptions.map(option => {
          if (option.id === category.parentId) {
            return {
              ...option,
              options: [
                ...option.options,
                {
                  value: category.name,
                  label: category.name,
                  parentId: category.parentId,
                  id: category.id,
                },
              ],
            };
          }
          return option;
        });
      }, []);
      setOptions(groupedOptions);
    });
  }, []);

  const onSubmit = formData => {
    console.log({...formData, categories: selectedOptions});
  };

  return (
    <section className={styles['create-article']}>
      <header>
        <h1>Create a new article</h1>
      </header>
      <form onSubmit={event => handleSubmit(event, onSubmit)}>
        <div>
          <Select options={options} onChange={setSelectedOptions} isMulti />
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
        <Button
          disabled={disabled}
          type="submit"
          btnRole="submit"
          text="Create article"
        />
      </form>
    </section>
  );
};

export default CreateArticle;

import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../Button';
import {useFormValidation, validateInputs} from '../../services/validation';

const CreateArticle = () => {
  const [disabled, setDisabled] = useState(true);
  const {values, handleChange, handleBlur, handleSubmit, errors} =
    useFormValidation(
      {articleTitle: '', articleText: ''},
      validateInputs,
      setDisabled
    );
  // const [selectOptions, setSelectOptions] = useState([]);

  // useEffect();

  return (
    <section>
      <header>
        <h1>Create a new article</h1>
      </header>
      <div></div>
      <form>
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

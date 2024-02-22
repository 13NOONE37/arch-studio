import React from 'react';
import cx from 'classnames';
import * as styles from './form.module.css';
import { heading__500, body__bold } from '../../../../styles/fonts.module.css';
import ArrowButton from '../../../buttons/arrowButton/arrowButton';
import { Formik } from 'formik';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleValidate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = `Can't be empty`;
    }

    if (!values.message) {
      errors.message = `Can't be empty`;
    }

    if (!values.email) {
      errors.email = `Can't be empty`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const handleSubmit = (values) => {};

  return (
    <section className={styles.container}>
      <h3 className={cx(styles.heading, heading__500)}>Connect with us</h3>
      <Formik
        initialValues={initialValues}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              type={'text'}
              placeholder={'Name'}
              name={'name'}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
              touched={touched.name}
              error={errors.name}
            />
            <Input
              type={'email'}
              placeholder={'Email'}
              name={'email'}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              touched={touched.email}
              error={errors.email}
            />

            <Textarea
              placeholder={'Message'}
              name={'message'}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.message}
              touched={touched.message}
              error={errors.message}
            />
            <ArrowButton size={'80px'} onClick={handleSubmit} />
          </form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;

const Input = ({
  type,
  placeholder,
  name,
  handleChange,
  handleBlur,
  value,
  touched,
  error,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cx(body__bold, styles.input, {
          [styles.input_error]: error && touched,
        })}
      />
      {error && touched && (
        <div className={cx(body__bold, styles.error)}>{error}</div>
      )}
    </div>
  );
};

const Textarea = ({
  placeholder,
  name,
  handleChange,
  handleBlur,
  value,
  touched,
  error,
}) => {
  return (
    <div className={styles.textareaContainer}>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cx(body__bold, styles.input, styles.textarea, {
          [styles.input_error]: error && touched,
        })}
      ></textarea>
      {error && touched && (
        <div className={cx(body__bold, styles.error)}>{error}</div>
      )}
    </div>
  );
};

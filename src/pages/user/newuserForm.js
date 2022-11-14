import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CountryList from '../common/form/country';
import StateList from '../common/form/state';
const NewUserForm = () => (
    <div>
        <Formik
            initialValues={
                { 
                    first_name: '', 
                    last_name: '',
                    phone: '',
                    mobile: '',
                    email: '',
                    country: '',
                    state: '',
                    add1: '',
                    add2: '',
                    add3: '',
                }
            }
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                    />
                    {errors.first_name && touched.first_name && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.first_name}</div>
                    )}
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name}
                    />
                    {errors.last_name && touched.last_name && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.last_name}</div>
                    )}
                    <label htmlFor="phone">phone</label>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.phone}</div>
                    )}
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.email}</div>
                    )}
                    <CountryList
                        value={values.topics}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.topics}
                        touched={touched.topics}
                    />
                    <StateList
                        value={values.topics}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.topics}
                        touched={touched.topics}
                    />
                    <label htmlFor="add1">Address Line 1</label>
                    <input
                        id="add1"
                        type="text"
                        name="add1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.add1}
                    />
                    {errors.add1 && touched.add1 && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.add1}</div>
                    )}
                    <label htmlFor="add2">Address Line 2</label>
                    <input
                        id="add2"
                        type="text"
                        name="add2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.add2}
                    />
                    {errors.add2 && touched.add2 && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.add2}</div>
                    )}
                    <label htmlFor="add3">Address Line 3</label>
                    <input
                        id="add3"
                        type="text"
                        name="add3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.add3}
                    />
                    {errors.add3 && touched.add3 && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.add3}</div>
                    )}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default NewUserForm;

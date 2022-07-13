import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ values }) => {

    return (
      <div className='user-form'>
        <Form>
           <Field
             type='text'
             name='name'
             placeholder='Name:'
            /> 
           <Field
             type='email'
             name='email' 
             placeholder='Email:'
            /> 
           <Field 
             type='password'
             name='password' 
             placeholder='Password:'
            />
           <label className='checkbox-wrapper'>
               Terms and Conditions
           <Field
             type='checkbox' 
             name='checkbox' 
             checked={values.checkbox} 
            />
            </label>
           <button type='submit'>Submit</button>
        </Form>
       </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, checked}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            checkbox: checked || false
        };
    },

    FormSchema: Yup.object().shape({
        name: Yup.string()
        .required('Well, you have to put in something.'),
        email: Yup.string()
        .email('Enter a real email address, jeez.')
        .required('Hey. Enter in an email address. You have to. It\'s required.'),
        password: Yup.string()
        .min(6)
        .max(16)
        .required('Do you want to get hacked? Because this is how you get hacked.')
    }),

    handleSubmit(values) {
        console.log(values);
    }
})(UserForm);
 
export default FormikUserForm;
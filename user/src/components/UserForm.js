import React from 'react';
import { withFormik, Form, Field } from 'formik';

const UserForm = ({ values }) => {
    return (
        <Form>
           <Field type='text' name='name' /> 
           <Field type='email' name='email' /> 
           <Field type='password' name='password' />
           <button>Submit</button>
        </Form>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password}) {
        return {
            name: name || '',
            email: email || '',
            password: password || ''
        }
    }
})(UserForm);
 
export default FormikUserForm;
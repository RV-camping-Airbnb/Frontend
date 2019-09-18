import React, { useState } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm({ values, errors, touched, isSubmitting }) {
  const [users, setUsers] = useState([])

  return (
    <>
    <Form>
      <h1>Login Form</h1>

      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />

      {touched.password && errors.password && <p className="error">{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />

      <button className="formButton" type="submit" disabled={isSubmitting}>Submit!</button>
    </Form>
    {users.map((user, index) => {
        return (
          <div className='loginContainer' key={index} index={index}>
            <h1>Login Info</h1>
            <h2>Name: {user.name}</h2>
            <h4>Email: {user.email}</h4>
          </div>
      ) })}
     </>
  );
}

export default withFormik({
  mapPropsToValues({ email, password }) {
    
    return {
      email: email || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  }

})(LoginForm);
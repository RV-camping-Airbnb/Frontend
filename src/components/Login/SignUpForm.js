import React, { useState } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SignUpForm({ values, errors, touched, isSubmitting }) {

  const [users, setUsers] = useState([])
  console.log(users)

  return (
    <>
    <Form className="signupForm">
      <h1>Sign-Up Form</h1>

      {touched.name && errors.name && <p className="error"> {errors.name}</p>}
      <Field type="name" name="name" placeholder="Name" />

      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />

      {touched.password && errors.password && <p className="error">{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />

      <label>
        <Field className="checkbox" type="checkbox" name="landowner" checked={values.landowner} />
        <span>Land Owner</span>
      </label>

      <label>
        <Field className="checkbox" type="checkbox" name="rvowner" checked={values.rvowner} />
        <span>RV Owner</span>
      </label>

      <label>
        <Field className="checkbox" type="checkbox" name="tos" checked={values.tos} />
        <span>Accept Terms</span>
      </label>

      <button className="formButton" type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
    {users.map((user, index) => {
        return (
          <div className='userContainer' key={index} index={index}>
            <h1>New User Info</h1>
            <h2>Name: {user.name}</h2>
            <h4>Email: {user.email}</h4>
          </div>
      ) })}
     </>
  );
}

export default withFormik({
  mapPropsToValues({ name, email, password, landowner, rvowner, tos }) {
    
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      landowner: landowner || false,
      rvowner: rvowner || false,
      tos: tos || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required()
      .min(3,"Name not valid")
      .required("Name is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
    landowner: Yup.boolean().oneOf([ true ], "Please check if you are a land owner"),
    rvowner: Yup.boolean().oneOf([ true ], "Please check if you are an RV ownver"),
    tos: Yup.boolean().oneOf([ true ], "Please agree to Terms of Service!")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  }

})(SignUpForm);
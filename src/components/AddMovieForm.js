import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function AddMovieForm({ onSubmit }) {

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  }

  return (
    <Formik initialValues={{ name: "", rating: 1 }} onSubmit={handleSubmit}>
      <Form>
        <div className="mb-3">
          <label>Name:</label>
          <Field name="name"/>
        </div>
        <div className="mb-3">
          <label>Rating:</label>
          <Field name="rating" type="number"/>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Add Movie</button>
        </div>
      </Form>
    </Formik>
  )
}

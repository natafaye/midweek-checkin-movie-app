import { Field, Form, Formik } from 'formik';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import React from 'react'

export default function EditMovie({ isModalOpen, toggle, onSubmit, movieId, movieList }) {

    const movie = movieList.find(movie => movie.id === movieId)

    const initialValues = (movie) ? { name: movie.name, rating: movie.rating } : { name: "", rating: 1 }

    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values);
        resetForm();
    }

    return (
        <Modal isOpen={isModalOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit</ModalHeader>
            <ModalBody>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        <div className="mb-3">
                            <label>Name:</label>
                            <Field name="name" />
                        </div>
                        <div className="mb-3">
                            <label>Rating:</label>
                            <Field name="rating" type="number" />
                        </div>
                        <Button color="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Formik>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const Create = (props) => {
  console.log(props)

  const createHomeRoute = () => {props.history.push('/avengers')}

  const [newAvenger, setNewAvenger] = useState([]);

  useEffect(() => {
    // make sure status is not undefined first (which it will be on page load)
    if (props.status) {
      setNewAvenger([ ...newAvenger, props.status ])
      props.setAvengers([props.status, ...props.avengers]);
      console.log(props.status)
      createHomeRoute();
    }
  }, [props.status])

  return (
    <Form>
      <Field type="text" name="name" placeholder="Name"/>    
      <Field type="textarea" name="img" placeholder="Image URL"/>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  // Values come from formik automatically --- magic!
  mapPropsToValues: (values) => {
    // this makes these inputs "controlled", sets the values automatically for us
    return {
      // these keys line up with the "name" attribute on our Fields
      name: values.name || '',
      img: values.img || ''
    }
  },
  // Formik won't allow our form to submit if any of these validation errors don't pass
  validationSchema: yup.object().shape({
    name: yup.string().required('Species is required!'),
    img: yup.string().required('Diet is required!')
  }),
  // Formik hooks this up to our form automatically. Runs when all validations pass and the form is submitted
  handleSubmit: (values, { setStatus }) => {
    // Send our data to an outside API
    axios.post('https://reqres.in/api/avengers', values)
      .then((res) => {
        // Result came back succecssfully. We need to send the data back to our component
        // (since we're in an HOC), so Formik uses `setStatus` for that. Which will send the res.data
        // object back to the component as a prop (accessed with props.status, as seen above)
        console.log(res.data)
        setStatus(res.data)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }
})(Create)

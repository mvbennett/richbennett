import { useState } from "react";
import Form from './Form';

const FormContainer = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const checkName = () => {
    return message.name.length > 2;
  }

  const checkMessage = () => {
    return message.message.length > 10;
  }

  const checkPhone = () => {
    const phonexp = RegExp(/^\d{10}$/);
    return phonexp.test(message.phone);
  }

  const checkEmail = () => {
    const regexp = RegExp(/(\w|\d)*@(\w|\d)*\.(\w|\d)*/)
    console.log(`email in func: ${regexp.test(message.email)}`);
    return regexp.test(message.email);
  }

  const checkValidity = () => {
    // console.log(`name :${checkName()}`);
    // console.log(`message: ${checkMessage()}`);
    // console.log(`email: ${checkEmail()}`);
    // console.log(`phone: ${checkPhone()}`);


    // console.log(`full check: ${checkName() && checkMessage() && checkEmail()}`);


    if (checkName() && checkMessage() && checkEmail() && checkPhone()) {
      console.log('all valid now!');
      setValid(true);
    } else {
      setValid(false);
    }
  }

  const handleChange = (e :any) => {
    // console.log(e.target.value);
    setMessage({...message, [e.target.name]: e.target.value})
    checkValidity();
  }

  const handleSubmit = (e :any) => {
    e.preventDefault()
    if (valid) {
      // console.log(`this is your message: From: ${message.name}\n at ${message.email} & ${message.phone}\n content: ${message.message}`);
      setSubmitted(true)
    } else {
      // console.log('invalid!');
    }

  }
  return (
      submitted
      ?
      <div>
        <h2>
          Thank you for your message, I{"'"}ll get back to you as soon as I can.
        </h2>
      </div>
      :
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};

export default FormContainer;

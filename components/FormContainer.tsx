import React, { useCallback, useEffect, useState } from "react";
import Form from './Form';
import emailjs from '@emailjs/browser'

const FormContainer = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formValid, setFormValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [errorOccurred, setErrorOccurred] = useState(false);

  const checkName = useCallback(() => {
    return message.name.length > 2;
  }, [message]);

  const checkMessage = useCallback(() => {
    return message.message.length > 10;
  }, [message]);

  const checkPhone = useCallback(() => {
    const phonexp = /^\d{10}$/;
    return phonexp.test(message.phone);
  }, [message]);

  const checkEmail = useCallback(() => {
    const regexp = /(\w|\d)*@(\w|\d){2,}\.(\w|\d){2,}$/;
    return regexp.test(message.email);
  }, [message]);

  const checkValidity = useCallback(() => {
    const nameValid = checkName();
    const messageValid = checkMessage();
    const emailValid = checkEmail();

    if (nameValid && messageValid && emailValid) {
      const disabled = document.querySelector('.disabled');
      if (disabled !== null) disabled.classList.remove('disabled');
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  },[checkEmail, checkMessage, checkName]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({...message, [event.target.name]: event.target.value})
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.target.classList.remove('invalid-input');
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement
    if (target.name === 'name') {
      target.classList.toggle('invalid-input', !checkName());
    } else if (target.name === 'email') {
      target.classList.toggle('invalid-input', !checkEmail());
    } else if (target.name === 'phone') {
      target.classList.toggle('invalid-input', !checkPhone());
    } else if (target.name === 'message') {
      target.classList.toggle('invalid-input', !checkMessage());
    }
  };

  useEffect(() => {
    checkValidity();
  }, [message, checkValidity]);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (formValid) {
      const from_name = message.name
      const phone = `(${message.phone[0]}${message.phone[1]}${message.phone[2]})${message.phone[3]}${message.phone[4]}${message.phone[5]}-${message.phone[6]}${message.phone[7]}${message.phone[8]}${message.phone[9]}`
      const reply_to = message.email
      const content = message.message

      const data = {from_name, phone, reply_to, content}

      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string
      const emailKey = process.env.NEXT_PUBLIC_EMAIL_KEY as string

      emailjs.send(
        serviceId,
        templateId,
        data,
        emailKey
      )
      .then(() => {
        setErrorOccurred(false)
        setSubmitted(true)
      })
      .catch(() => {
        setErrorOccurred(true)
      });
    }
  };
  return (
      submitted
      ?
      <div>
        <h2>
          Thank you for your message, I{"'"}ll get back to you as soon as I can.
        </h2>
      </div>
      :
      <>
        {errorOccurred ? <h2 style={{color: 'red'}}>An error occurred when sending your email</h2> : ''}
        <Form handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} handleFocus={handleFocus} />
      </>
  );
};

export default FormContainer;

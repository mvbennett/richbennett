import { useEffect, useState } from "react";
import Form from './Form';
import emailjs from '@emailjs/browser'

const FormContainer = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [nameValid, setNameValid] = useState(false);

  const [emailValid, setEmailValid] = useState(false);

  const [phoneValid, setPhoneValid] = useState(false);

  const [messageValid, setMessageValid] = useState(false);

  useEffect(() => {
    checkEmail();
    checkMessage();
    checkName();
    checkPhone();
  })

  const checkName = () => {
    return setNameValid(message.name.length > 2);
  }

  const checkMessage = () => {
    return setMessageValid(message.message.length > 10);
  }

  const checkPhone = () => {
    const phonexp = RegExp(/^\d*$/);
    console.log(`phone # length: ${message.phone.length}`);
    return setPhoneValid(phonexp.test(message.phone) && message.phone.length == 10);
  }

  const checkEmail = () => {
    const regexp = RegExp(/(\w|\d)*@(\w|\d)*\.(\w|\d)*/)
    // console.log(`email in func: ${regexp.test(message.email)}`);
    return setEmailValid(regexp.test(message.email));
  }

  const checkValidity = () => {
    // console.log(`name :${checkName()}`);
    // console.log(`message: ${checkMessage()}`);
    // console.log(`email: ${checkEmail()}`);
    // console.log(`phone: ${checkPhone()}`);


    // console.log(`full check: ${checkName() && checkMessage() && checkEmail()}`);
    checkName();
    checkEmail();
    checkPhone();
    checkMessage();

    if (nameValid && messageValid && emailValid && phoneValid) {
      const disabled = document.querySelector('.disabled');
      if (disabled !== null) disabled.classList.remove('disabled');
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

  const handleBlur = (e: any) => {
    console.log('blur handler');
    // console.log(e.target.name);
    let isValid;
    switch (e.target.name) {
      case 'name':
        // checkName();
        isValid = nameValid;
        break;
      case 'email':
        // checkEmail();
        isValid = emailValid;
        break;
      case 'phone':
        // checkPhone();
        isValid = phoneValid;
        break;
      case 'message':
        isValid = messageValid;
        break;
      default:
        break;
    }
    console.log(`isValid: ${isValid}`);
    console.log(`phoneValid: ${phoneValid}`);


    if (isValid) {
      e.target.classList.remove('invalid-input')
    } else {
      e.target.classList.add('invalid-input')
    }
  }

  const handleFocus = (e: any) => {
    e.target.classList.remove('invalid-input');
  }

  const handleSubmit = (e :any) => {
    e.preventDefault()
    if (valid) {
      // console.log(`this is your message: From: ${message.name}\n at ${message.email} & ${message.phone}\n content: ${message.message}`);
      setSubmitted(true)
      const from_name = message.name
      const phone = `(${message.phone[0]}${message.phone[1]}${message.phone[2]})${message.phone[3]}${message.phone[4]}${message.phone[5]}-${message.phone[6]}${message.phone[7]}${message.phone[8]}${message.phone[9]}`
      const reply_to = message.email
      const content = message.message

      const data = {from_name, phone, reply_to, content}
      // fetch('/api', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //   },
      //   credentials: 'same-origin',
      //   body: JSON.stringify({data}),
      // })
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // })}

      emailjs.send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        {from_name, phone, reply_to, content},
        `${process.env.NEXT_PUBLIC_EMAIL_KEY}`
      )
      .then((response: any) => {
        // console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err: any) => {
        // console.log('FAILED...', err);
      });
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
      <Form handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} handleFocus={handleFocus} />
  );
};

export default FormContainer;

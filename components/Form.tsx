import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e :any) => {
    console.log(e.target.value);
    setMessage({...message, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e :any) => {
    e.preventDefault()
    console.log(`this is your messgae: From: ${message.name}\n at ${message.email} & ${message.phone}\n content: ${message.message}`);

  }
  return (
    <div className="form">
      <h2>
        Contact Me to scedule a session:
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Mike Bennett" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" placeholder="rich@richbennett.com" onChange={handleChange} />
        </label>
        <label htmlFor="phone number">
          Phone number:
          <input type="text" name="phone" placeholder="(212)867-5309" onChange={handleChange} />
        </label>
        <label htmlFor="message">
          Your message:
          <textarea name="message" id="message" cols={30} rows={10} onChange={handleChange} ></textarea>
        </label>
        <button>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

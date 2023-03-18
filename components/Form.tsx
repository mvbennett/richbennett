import { SyntheticEvent } from "react";

interface props {
  handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  handleFocus: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  }


const Form = ({ handleBlur, handleChange, handleSubmit, handleFocus }:props) => {
  return (
    <div className="form">
      <h2>
        Contact:
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" placeholder="Mike Bennett" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" name="email" placeholder="rich@richbennettproductions.com" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
          </label>
          <label htmlFor="phone number">
            Phone number:
            <input type="text" name="phone" placeholder="2128675309" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
          </label>
        </div>
        <div className="row">
          <label htmlFor="message">
            Your message:
            <textarea name="message" id="message" cols={30} rows={20} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus}></textarea>
          </label>
        </div>
        <button className='disabled send-btn'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

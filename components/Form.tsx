import { FocusEvent, ChangeEvent, FormEvent } from "react"

import styles from '../styles/components/Form.module.css';

interface props {
  handleBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
  handleFocus: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  }


const Form = ({ handleBlur, handleChange, handleSubmit, handleFocus }:props) => {
  return (
    <div className={styles.form}>
      <h2>
        Contact:
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="name" className={styles.label}>
            Name:
            <input type="text" name="name" placeholder="Mike Bennett" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
          </label>
          <label htmlFor="email" className={styles.label}>
            Email:
            <input type="text" name="email" placeholder="rich@richbennettproductions.com" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
          </label>
          <label htmlFor="phone number" className={styles.label}>
            Phone number (optional):
            <input type="text" name="phone" placeholder="2128675309" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
          </label>
        </div>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label}>
            Your message:
            <textarea name="message" id="message" cols={30} rows={20} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={styles.textarea}></textarea>
          </label>
        </div>
        <button className={`${styles.sendBtn} ${styles.disabled}`}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

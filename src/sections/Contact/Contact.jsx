import { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {

  const [result, setResult] = useState('')
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "1a494996-0ee3-4710-bb1b-2e9b7c8150c9");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if(data.success){
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error",data);
      setResult(data.message);
    }
  }
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" onSubmit={onSubmit}>
        <div className="formGroup">
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
            <label htmlFor="email" hidden>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
            <label htmlFor="message" hidden>Message</label>
            <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      <span className={styles.message}>{result}</span>
    </section>
  );
}

export default Contact;

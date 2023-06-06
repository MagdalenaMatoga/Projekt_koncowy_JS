import React, { useState } from "react";
import styles from "./Order.module.scss";

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Imię: " + name);
    console.log("Email: " + email);
    console.log("Wiadomość: " + message);
    setName("");
    setEmail("");
    setMessage("");
    alert("Wiadomość została wysłana!");
  };

  return (
    <div>
      <h2>Order</h2>
      <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Imię:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />

        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />

        <label htmlFor="message" className={styles.label}>
          Wiadomość:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.button}>
          Wyślij
        </button>
      </form>
    </div>
    </div>
  );
}

export default Order;

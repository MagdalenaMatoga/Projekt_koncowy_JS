import React, { useState } from "react";
import styles from "./Order.module.scss";
import Footer from '../../components/footer/Footer';

function Order() {
  const [name, setName] = useState(""); //przechowywanie wartości wprowadzonych przez użytkownika w formularzu.
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => { //funkcję obsługującą wysłanie formularza (Wywoływana po naciśnieciu wyślij).  Funkcja zapobiega domyślnej akcji przeglądarki (przeładowaniu strony) poprzez wywołanie event.preventDefault()
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
      <h2>Kontakt</h2>
      
      <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}> 
        <label htmlFor="name" className={styles.label}>
          Imię:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Gdy wartość w polu zostanie zmieniona, funkcja obsługująca onChange jest wywoływana, a nowa wartość jest przypisywana do odpowiedniego stanu. 
          required //muszą zostać wypełnione
          className={styles.input}
        />

        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} //przypisany do pola <input> i jest odpowiedzialny za aktualizację wartości stanu name w komponencie za każdym razem, gdy wartość pola zostanie zmieniona. Wywołanie funkcji anonimowej, której wywołanie zwraca aktualną wartośćm która następnie przypisywana jest do steEmail, OnChange - zdarzenie, które jest wywoływane przy każdej zmianie w polu
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
    <Footer />
    </div>
    
    
  );
}

export default Order;

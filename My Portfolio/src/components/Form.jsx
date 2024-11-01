import { useState } from "react";
import "../Form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mnnqpbad", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        } else {
          setStatus(
            "There was an error sending your message. Please try again."
          );
        }
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("There was an error sending your message. Please try again.");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Type your message here"></textarea>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
      {status && (
        <p
          className={`status-message ${
            status.includes("sent") ? "success" : "error"
          }`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;

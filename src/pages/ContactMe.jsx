import { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactMe = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/server", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "No se pudo enviar el mensaje.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Tu mensaje fue enviado correctamente.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Ocurrió un error al enviar el mensaje.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main page-main">
        <section className="section section-grid contact-layout">
          <div className="info-panel">
            <span className="section-kicker">Contacto</span>
            <h1>Open to projects, collaborations, and new ideas.</h1>
            <p>
              Send a message and I’ll get back to you soon.
            </p>
            <div className="contact-mini-card">
              <strong>Contact Me</strong>
              <span>+52 33 2275 1129</span>
              <span>lorenzo.orrante@icloud.com</span>
              <span>Zapopan, Jalisco</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSendEmail}>
            <div className="contact-row">
              <label>
                Nombre
                <input
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleOnChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleOnChange}
                  required
                />
              </label>
            </div>

            <label>
              Asunto
              <input
                name="subject"
                type="text"
                placeholder="Cuéntame qué necesitas"
                value={form.subject}
                onChange={handleOnChange}
                required
              />
            </label>

            <label>
              Mensaje
              <textarea
                name="message"
                rows="8"
                placeholder="Describe el proyecto, la idea o la oportunidad."
                value={form.message}
                onChange={handleOnChange}
                required
              />
            </label>

            <button className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status.message ? (
              <p
                className={
                  status.type === "error" ? "form-status error" : "form-status success"
                }
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactMe;

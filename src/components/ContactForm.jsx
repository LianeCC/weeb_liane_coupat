import { useState } from "react";
import { apiPost } from "../services/api";

export default function ContactForm() {
  const [last_name, setLast] = useState("");
  const [first_name, setFirst] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email_address, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      await apiPost("/api/contact/", {
        first_name,
        last_name,
        phone_number,
        email_address,
        message,
      });

      // reset
      setLast("");
      setFirst("");
      setPhone("");
      setEmail("");
      setMessage("");

      setFeedback("Merci ! Votre message a bien été envoyé.");
      setStatus("success");
    } catch {
      setFeedback("Oups… l’envoi a échoué. Merci de réessayer.");
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="flex flex-col items-center w-full mx-auto max-w-[880px] gap-8 py-16 px-4 text-center">
        <h1>Votre avis compte !</h1>
        <p>
          Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="max-w-3xl w-full border border-secondary p-8 rounded-[20px] mx-auto space-y-10 bg-[#C084FC1A] text-secondary mb-10">
        {/* Nom / Prénom */}
        <div className="flex flex-col md:flex-row gap-6">
          {[{ label: '', placeholder: 'Nom' }, { label: '', placeholder: 'Prénom' }].map((field, idx) => (
            <div key={idx} className="w-full">
              <label>{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"
                value={idx === 0 ? last_name : first_name}
                onChange={(e) => (idx === 0 ? setLast(e.target.value) : setFirst(e.target.value))}
              />
            </div>
          ))}
        </div>

        {/* tel / mail */}
        <div className="flex flex-col md:flex-row gap-6">
          {[{ label: '', placeholder: 'Téléphone' }, { label: '', placeholder: 'Email' }].map((field, idx) => (
            <div key={idx} className="w-full">
              <label>{field.label}</label>
              <input
                type={idx === 1 ? "email" : "text"}
                placeholder={field.placeholder}
                className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"
                value={idx === 0 ? phone_number : email_address}
                onChange={(e) => (idx === 0 ? setPhone(e.target.value) : setEmail(e.target.value))}
              />
            </div>
          ))}
        </div>

        {/* message */}
        <div>
          <label></label>
          <textarea
            rows="1"
            placeholder="Message"
            className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary hover:bg-tertiary text-white font-semibold px-6 py-2 rounded"
          >
            Envoyer
          </button>
        </div>
      </form>

      {(status === "success" || status === "error") && (
        <div
          role="status"
          aria-live="polite"
          className={`max-w-3xl w-full mx-auto mb-4 rounded-[12px] border px-4 py-3 text-sm ${
            status === "success"
              ? "border-purple-400 bg-purple-50 text-purple-800"
              : "border-red-400 bg-red-50 text-red-800"
          }`}
        >
          {feedback}
        </div>
      )}

    </div>
  );
}

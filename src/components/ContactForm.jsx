export default function ContactForm() {
  return (
    <div>
      <section className="flex flex-col items-center w-full mx-auto max-w-[880px] gap-8 py-16 px-4 text-center">
        <h1>Votre avis compte !</h1>
        <p>
          Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
        </p>
      </section>

      <form className="max-w-3xl w-full border border-secondary p-8 rounded-[20px] mx-auto space-y-10 bg-[#C084FC1A] text-secondary mb-10">
        {/* Nom / Prénom */}
        <div className="flex flex-col md:flex-row gap-6">
          {[{ label: '', placeholder: 'Nom' }, { label: '', placeholder: 'Prénom' }].map((field, idx) => (
            <div key={idx} className="w-full">
              <label>{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"              />
            </div>
          ))}
        </div>

        {/* tel / email */}
        <div className="flex flex-col md:flex-row gap-6">
          {[{ label: '', placeholder: 'Téléphone' }, { label: '', placeholder: 'Email' }].map((field, idx) => (
            <div key={idx} className="w-full">
              <label>{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"
              />
            </div>
          ))}
        </div>

        {/* Message */}
        <div>
          <label></label>
          <textarea
            rows="1"
            placeholder="Message"
            className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary hover:bg-tertiary text-white font-semibold px-6 py-2 rounded"
          >
            Contact
          </button>
        </div>
      </form>
    </div>
  );
}

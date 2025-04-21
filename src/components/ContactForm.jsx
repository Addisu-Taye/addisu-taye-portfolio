import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
        />
        <textarea
          placeholder="Message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-600 text-sm mt-2">✅ Message sent (simulation)</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;

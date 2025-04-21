import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ssm5i4f",
      "template_k9rcfzo",
      form.current,
      "m9b50OipIdUTwBLdb"
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );

    e.target.reset();
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col items-center justify-start py-16 px-4">
      <h2 className="text-4xl font-bold text-center uppercase tracking-wider">Contact</h2>
      <div className="w-20 h-1 bg-yellow-500 my-4 rounded-full" />
      <p className="text-center text-lg text-gray-600 max-w-2xl mb-10">
        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
      </p>

      <form ref={form} onSubmit={sendEmail} className="bg-white shadow-xl rounded-xl w-full max-w-3xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter Your Message"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

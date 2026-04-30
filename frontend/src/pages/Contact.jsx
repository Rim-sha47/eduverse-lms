const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        Contact Us 📩
      </h1>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-3 mb-4 rounded"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full border p-3 mb-4 rounded"
      />

      <textarea
        placeholder="Your Message"
        className="w-full border p-3 mb-4 rounded"
        rows="5"
      ></textarea>

      <button className="w-full bg-cyan-500 text-white py-3 rounded-lg">
        Send Message
      </button>
    </div>
  );
};

export default Contact;
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Solar Design & Installation",
    message: "",
  });
  const [status, setStatus] = useState(""); // success / error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data in Netlify-compatible format
    const formName = e.target.getAttribute("name");
    const formDataObj = {
      "form-name": formName,
      ...formData,
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj).toString(),
      });

      setStatus("Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", service: "Solar Design & Installation", message: "" }); // reset form
    } catch (err) {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Get a Quote</h1>
      <p className="text-stone-600 mt-2">
        Tell us about your site and energy goals—we’ll recommend the best setup.
      </p>

      <form
        name="xyz-contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="mt-8 bg-white rounded-xl shadow-md p-6 border border-blue-50 space-y-4"
      >
        <input type="hidden" name="form-name" value="xyz-contact" />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-stone-700 mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="jane@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-stone-700 mb-1">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option>Solar Design & Installation</option>
            <option>Electrical (Residential/Industrial)</option>
            <option>CCTV & Security</option>
            <option>Maintenance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-stone-700 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Site location, load info, preferred timeline..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-4 text-green-700">{status}</p>}
    </section>
  );
}

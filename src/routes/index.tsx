import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({
    title: "Inquiry",
    phoneNumber: "",
    from: "",
    email: "",
    time: new Date(),
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7zuslho",
        "template_b625uy8",
        formData,
        "ToY7aj9Xn-biIoZAa"
      )
      .then(() => {
        setSent(true);
        setFormData({
          title: "",
          phoneNumber: "",
          from: "",
          email: "",
          time: "",
          message: "",
        });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error: any) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } transition-colors duration-500 ease-in-out`}
    >
      <div className="font-sans text-gray-800 dark:text-gray-100 dark:bg-gray-900">
        {/* Header with Dark Mode Toggle */}
        <header className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
          <h1
            className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
            onClick={() => navigate("/")}
          >
            TwineFishery
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm">☀️</span>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? "bg-blue-600" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  darkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <span className="text-sm">🌙</span>
          </div>
        </header>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              FRESH FROM INDONESIA TO THE WORLD
            </motion.h1>
            <motion.p
              className="mb-6 text-lg md:text-xl max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Delivering premium quality seafood from Indonesia's pristine
              waters directly to your market.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
              onClick={() => navigate("/products")}
            >
              Explore Products
            </motion.button>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            FRESH & SUSTAINABLE
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            At TwineFishery, we connect Indonesia's top-quality fisheries with
            global seafood lovers, focusing on sustainability and traceability
            in every shipment.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md"
          >
            Learn More
          </motion.button>
        </section>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 items-center py-20 px-6 bg-gray-50 dark:bg-gray-900">
          <img
            src="/images/story.jpg"
            alt="Our Story"
            className="w-full h-auto rounded"
          />
          <motion.div
            className="p-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">OUR STORY</h3>
            <p className="text-lg mb-4">
              Born out of passion for seafood and innovation, TwineFishery aims
              to revolutionize how fresh seafood is sourced and delivered. We
              work directly with coastal communities to ensure fair trade and
              top quality.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Read More
            </button>
          </motion.div>
        </section>

        {/* Product Section */}
        <section className="py-20 px-6 text-center bg-white dark:bg-gray-800">
          <h3 className="text-3xl font-bold mb-4">OUR PRODUCTS</h3>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            From live groupers to processed seafood, we offer a wide variety of
            fish and marine goods tailored to meet the needs of global buyers.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                img: "https://res.cloudinary.com/do4q8ygop/image/upload/v1745397449/live_sjpf9b.jpg",
                name: "Live Groupers",
              },
              {
                img: "https://res.cloudinary.com/do4q8ygop/image/upload/v1745397449/fillets_x2b0tf.jpg",
                name: "Fish Fillets",
              },
              {
                img: "https://res.cloudinary.com/do4q8ygop/image/upload/v1745397449/frozen_um4en3.jpg",
                name: "Frozen Seafood",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-100 dark:bg-gray-700 rounded shadow"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h4 className="text-xl font-semibold py-4">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
          <h3 className="text-3xl font-bold mb-4">PARTNERING FOR EXCELLENCE</h3>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Join hands with us and discover a seamless export process, with full
            quality control and timely shipments to your destination.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 px-6 bg-blue-900 text-white text-center">
          <h4 className="text-2xl font-bold mb-2">CONTACT US</h4>
          <p className="mb-6">
            We'd love to hear from you. Reach out for inquiries, partnerships,
            or anything else. We'll be sure to reach out to you soon!
          </p>

          <form
            onSubmit={sendEmail}
            className="max-w-2xl mx-auto grid gap-4 text-left"
          >
            <input
              type="text"
              name="from"
              placeholder="Your Company"
              value={formData.from}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded text-gray-900 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded text-gray-900 w-full"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Your Phone Number (e.g +65)"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded text-gray-900 w-full"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded text-gray-900"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md font-semibold"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-green-300 mt-2">Message sent successfully!</p>
            )}
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h5 className="font-bold text-lg mb-2">TwineFishery</h5>
              <p>Exporting quality seafood from Indonesia to the world.</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2">Navigation</h5>
              <ul>
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:underline">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2">Contact</h5>
              <p>Email: hello@twinefishery.com</p>
              <p>Phone: +62 812 3456 7890</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2">Follow Us</h5>
              <p>Instagram / Facebook / LinkedIn</p>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} TwineFishery. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

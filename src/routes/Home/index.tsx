import React, { useRef, useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { usePageTransition } from "context/TransitionContext";
import emailjs from "@emailjs/browser";
import LightLogo from "assets/logo/light.png";
import DarkLogo from "assets/logo/dark.png";
import SunIcon from "assets/icons/sun.png";
import MoonIcon from "assets/icons/moon.png";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const { startPageTransition } = usePageTransition();
  const [formData, setFormData] = useState<any>({
    title: "Inquiry",
    phoneNumber: "",
    from: "",
    email: "",
    time: new Date(),
    message: "",
  });
  const [sent, setSent] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const waLink =
    "https://wa.me/6281952991672?text=Hello%20TwineFishery%2C%20I%27m%20interested%20in%20your%20fresh%20hybrid%20grouper%20supply.%20Could%20you%20share%20more%20details%20about%20availability%20and%20pricing%3F";
  const igLink = "https://instagram.com/twinefishery";
  const linkedInLink = "https://linkedin.com/company/twine-fishery";
  const threadsLink = "https://threads.com/@twinefishery";

  const handleNavigate = (pathname: string) => {
    startPageTransition(pathname, <div className="w-full h-full bg-black" />);
  };

  const handleChange = (e: any) => {
    setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const downloadCatalogue = () => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const isIndonesia = data.country_code === "ID";
        const link = document.createElement("a");
        link.href = isIndonesia
          ? "/catalogue/local.pdf"
          : "/catalogue/international.pdf";
        link.download = isIndonesia ? "local.pdf" : "international.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error("Location check failed:", err);
      });
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

  const handleExploreClick = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } transition-colors duration-500 ease-in-out`}
    >
      <div className="font-sans text-gray-800 dark:text-gray-100 dark:bg-gray-900 relative">
        {/* Header with Dark Mode Toggle */}
        <header className="flex justify-between items-center px-6 py-4 absolute z-50 w-full dark:bg-gray-900 bg-white">
          <img
            alt="logo"
            src={darkMode ? DarkLogo : LightLogo}
            width={140}
            onClick={() => handleNavigate("/")}
          ></img>
          <div className="flex items-center space-x-2">
            <img alt="light" src={SunIcon} width={18}></img>
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
            <img alt="light" src={MoonIcon} width={16}></img>
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
          <div className="relative w-full h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/do4q8ygop/image/upload/v1750769561/Untitled_design_ji36eg.png')",
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
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
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "white",
                  color: "black",
                }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-900 px-6 py-2 rounded-lg font-semibold dark:bg-gray-900 bg-white dark:text-white"
                onClick={handleExploreClick}
              >
                Explore Products
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="py-20 px-6  dark:bg-gray-900 bg-gray-100 text-center">
          <div className="flex justify-center items-center my-4">
            <img
              alt="fresh&sustainable"
              src="https://res.cloudinary.com/do4q8ygop/image/upload/v1745578464/plant_vkjzej.png"
              height={42}
              width={42}
            />
          </div>
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
            global seafood lovers, focusing on sustainability.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="mt-6 dark:bg-white dark:text-gray-900 bg-gray-900 text-white px-6 py-2 font-semibold rounded-lg"
            onClick={downloadCatalogue}
          >
            Download Catalogue
          </motion.button>
        </section>

        {/* Product Section */}
        <section
          ref={productsRef}
          className="py-20 px-6 text-center bg-white dark:bg-gray-800"
        >
          <h3 className="text-3xl font-bold mb-4">OUR PRODUCTS</h3>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            From live groupers to processed fish, we offer variety goods to meet
            your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {[
              {
                img: "https://res.cloudinary.com/do4q8ygop/image/upload/v1749730104/live_iq0ncy.jpg",
                name: "Live 🔥",
              },
              {
                img: "https://res.cloudinary.com/do4q8ygop/image/upload/v1745397449/fillets_x2b0tf.jpg",
                name: "🐟 Processed",
              },
              {
                img: "https://res.cloudinary.com/do4q8ygop/image/upload/v1745397449/frozen_um4en3.jpg",
                name: "🧊 Frozen",
              },
            ].map((item, idx) => {
              const waLink = `https://wa.me/6281952991672?text=Hello%20TwineFishery%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(
                item.name
              )}%20product.%20Could%20you%20share%20more%20details%3F`;

              return (
                <div key={idx} className="flex justify-center">
                  <div className="relative w-80 rounded-tr-[60px] rounded-bl-[60px] overflow-hidden shadow-lg">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 p-2 rounded-tl-[40px]">
                      <h3 className="text-white text-lg font-semibold">
                        {item.name}
                      </h3>
                      <a href={waLink} rel="noreferrer" target="_blank">
                        <button className="mt-2 bg-yellow-400 text-black text-sm px-4 py-1 rounded-lg hover:bg-yellow-300 transition duration-200">
                          Shop now →
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
          <div className="flex justify-center items-center my-3">
            <img
              alt="fresh&sustainable"
              src={
                darkMode
                  ? "https://res.cloudinary.com/do4q8ygop/image/upload/v1745587048/hand-shakedark_jjjiur.png"
                  : "https://res.cloudinary.com/do4q8ygop/image/upload/v1745587048/hand-shakelight_hcxdc5.png"
              }
              height={58}
              width={58}
            ></img>
          </div>
          <h3 className="text-3xl font-bold mb-4">PARTNERING FOR EXCELLENCE</h3>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Join hands with us, with full quality control and timely shipments
            to your destination.
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
              className="px-4 py-2 text-gray-900 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 text-gray-900 w-full"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Your Phone Number (e.g +65)"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="px-4 py-2 text-gray-900 w-full"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 text-gray-900"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 font-semibold"
            >
              Send Message
            </button>
            {sent && (
              <p className="bg-green-500 text-white mt-2 px-1 py-2 max-w-60 text-center text-sm">
                Message sent successfully!
              </p>
            )}
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h5 className="font-bold text-lg mb-2">TwineFishery</h5>
              <p>Exporting quality seafood from Indonesia to the world.</p>
            </div>
            {/* <div>
              <h5 className="font-bold text-lg mb-2">Content</h5>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
              </ul>
            </div> */}
            <div>
              <h5 className="font-bold text-lg mb-2">Contact</h5>
              <p>Email: twinefishery@gmail.com</p>
              <p>Phone: +62 819-5299-1672</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2">Follow Us</h5>
              <div className="flex flex-row gap-x-4">
                <a href={igLink} rel="noreferrer" target="_blank">
                  <img
                    alt="ig"
                    width={20}
                    height={20}
                    className="hover:cursor-pointer"
                    src="https://res.cloudinary.com/do4q8ygop/image/upload/v1745424428/instagram_h6xtd6.png"
                  ></img>
                </a>
                <a href={waLink} rel="noreferrer" target="_blank">
                  <img
                    alt="wa"
                    width={20}
                    height={20}
                    className="hover:cursor-pointer"
                    src="https://res.cloudinary.com/do4q8ygop/image/upload/v1750771506/whatsapp_1_cy0kmb.png"
                  ></img>
                </a>
                <a href={threadsLink} rel="noreferrer" target="_blank">
                  <img
                    alt="threads"
                    width={20}
                    height={20}
                    className="hover:cursor-pointer"
                    src="https://res.cloudinary.com/do4q8ygop/image/upload/v1751957287/threads_wapyql.png"
                  ></img>
                </a>
                <a href={linkedInLink} rel="noreferrer" target="_blank">
                  <img
                    alt="linkedin"
                    width={20}
                    height={20}
                    className="hover:cursor-pointer"
                    src="https://res.cloudinary.com/do4q8ygop/image/upload/v1745424428/linkedin_kq1inc.png"
                  ></img>
                </a>
                {/* <img
                  alt="fb"
                  width={20}
                  height={20}
                  className="hover:cursor-pointer"
                  src="https://res.cloudinary.com/do4q8ygop/image/upload/v1745424428/facebook_ckcdn8.png"
                ></img> */}
                {/* <img
                  alt="yt"
                  width={20}
                  height={20}
                  className="hover:cursor-pointer"
                  src="https://res.cloudinary.com/do4q8ygop/image/upload/v1745424771/youtube_dhkmqd.png"
                ></img> */}
                {/* <img
                  alt="fb"
                  width={20}
                  height={20}
                  className="hover:cursor-pointer"
                  src="https://res.cloudinary.com/do4q8ygop/image/upload/v1745424428/facebook_ckcdn8.png"
                ></img> */}
              </div>
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

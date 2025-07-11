import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const SERVICE_ID = 'service_vmq6zml';
const TEMPLATE_ID = 'template_646o0hp';
const USER_ID = '-bNycoMjOxUdRiBye';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      toast.error('Please fill out all fields.');
      return;
    }

    setLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        formRef.current.reset();
        setLoading(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((error) => {
        console.error('Email error:', error);
        toast.error('Something went wrong. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-[#111] px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          I'm open to freelance opportunities, collaborations, or just a friendly hello.
          Fill out the form below and I’ll respond shortly.
        </p>

        <form ref={formRef} onSubmit={handleSend} className="space-y-6 max-w-xl mx-auto text-left">
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 border dark:border-gray-600 bg-white dark:bg-[#1f1f1f] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-500 dark:text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 border dark:border-gray-600 bg-white dark:bg-[#1f1f1f] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute top-4 left-4 text-gray-500 dark:text-gray-400" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full pl-12 pr-4 py-3 border dark:border-gray-600 bg-white dark:bg-[#1f1f1f] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-full py-3 px-6 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl text-center"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">🎉 Message Sent!</h3>
              <p className="text-gray-700 dark:text-gray-300">Thanks for reaching out. I'll be in touch soon.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaCalendarCheck, FaPhone, FaClock, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message,
      to_email: personalInfo.socials.email,
    };

    emailjs.send('service_9b5464f', 'template_wacjtiu', templateParams, 'Oc5RhIlBjyg7ZR9WF')
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Auto close toast after 4 seconds
        setTimeout(() => setSubmitSuccess(false), 4000);
      })
      .catch((error) => {
        console.error('EmailJS send error:', error);
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
        setTimeout(() => setSubmitError(''), 6000);
      });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden theme-transition-all">
      {/* Background Soft Glow */}
      <div className="absolute bottom-[-10%] left-[20%] w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary-glow px-3 py-1 rounded-full border border-primary/20 mb-3 inline-block">
            Connect
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-3 uppercase"
          >
            GET IN TOUCH
          </motion.h2>
          <p className="text-text-secondary text-sm sm:text-base font-semibold max-w-xl mx-auto uppercase tracking-wide">
            Let's Build Something Amazing Together 🚀
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full mt-4"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="rounded-2xl border border-border-custom bg-bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-border-custom-hover transition-colors duration-300 h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-xl font-bold font-display text-text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary-glow border border-primary/10 text-primary flex-shrink-0">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary/50 uppercase tracking-wider block font-semibold">
                        Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.socials.email}`}
                        className="text-sm sm:text-base font-medium text-text-primary hover:text-primary transition-colors duration-300"
                      >
                        {personalInfo.socials.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary-glow border border-primary/10 text-primary flex-shrink-0">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary/50 uppercase tracking-wider block font-semibold">
                        Location
                      </span>
                      <span className="text-sm sm:text-base font-medium text-text-primary">
                        {personalInfo.details.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary-glow border border-primary/10 text-primary flex-shrink-0">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary/50 uppercase tracking-wider block font-semibold">
                        Phone
                      </span>
                      <span className="text-sm sm:text-base font-medium text-text-primary">
                        +91 9025177729
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary-glow border border-primary/10 text-primary flex-shrink-0">
                      <FaCheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary/50 uppercase tracking-wider block font-semibold">
                        Status
                      </span>
                      <span className="text-sm sm:text-base font-medium text-text-primary">
                        Open for Internships, Freelance & Collaborations
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary-glow border border-primary/10 text-primary flex-shrink-0">
                      <FaClock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary/50 uppercase tracking-wider block font-semibold">
                        Response Time
                      </span>
                      <span className="text-sm sm:text-base font-medium text-text-primary">
                        Usually responds within 24 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-12 pt-6 border-t border-border-custom/50">
                <h4 className="text-sm font-semibold tracking-wider uppercase text-text-secondary/50 mb-4 text-left">
                  Connect on Socials
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/iamsujithsingh-06"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-xl border border-border-custom bg-bg-dark hover:bg-primary-glow hover:border-border-custom-hover text-text-secondary hover:text-primary transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-xl border border-border-custom bg-bg-dark hover:bg-primary-glow hover:border-border-custom-hover text-text-secondary hover:text-primary transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  
                  <a
                    href="https://www.instagram.com/___sujith._.singh___/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="p-3 rounded-xl border border-border-custom bg-bg-dark hover:bg-primary-glow hover:border-border-custom-hover text-text-secondary hover:text-primary transition-all duration-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-border-custom bg-bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-border-custom-hover transition-colors duration-300">
              
              <h3 className="text-xl font-bold font-display text-text-primary mb-4 text-left">
                Send a Message
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Have an idea, project, or opportunity? Feel free to reach out. I'm always open to meaningful collaborations and learning experiences.
              </p>

              <form id="contact-form" name="contactForm" onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-bg-card-hover border ${
                        errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-border-custom focus:border-primary'
                      } rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/35 outline-none transition-colors duration-300`}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className={`w-full bg-bg-card-hover border ${
                        errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-border-custom focus:border-primary'
                      } rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/35 outline-none transition-colors duration-300`}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship, Freelance Project, Collaboration, or General Inquiry"
                    className={`w-full bg-bg-card-hover border ${
                      errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-border-custom focus:border-primary'
                    } rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/35 outline-none transition-colors duration-300`}
                  />
                  {errors.subject && <span className="text-xs text-red-500 font-medium">{errors.subject}</span>}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea, project, internship, or collaboration opportunity."
                    className={`w-full bg-bg-card-hover border ${
                      errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-border-custom focus:border-primary'
                    } rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/35 outline-none transition-colors duration-300 resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary text-text-primary hover:bg-primary-hover font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/10 hover:shadow-primary/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Success Notification Popover Toast */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-bg-card border border-emerald-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
                <FaCheckCircle className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-text-primary">Message sent successfully.</h4>
                  <p className="text-xs text-text-secondary">I will get back to you soon.</p>
                </div>
          </motion.div>
        )}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-bg-card border border-red-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
              >
                <FaTimesCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-text-primary">Failed to send message</h4>
                  <p className="text-xs text-text-secondary">{submitError}</p>
                </div>
              </motion.div>
            )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

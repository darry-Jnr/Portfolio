'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowRight } from 'react-icons/fi';

// 🔁 Replace these with your real EmailJS credentials
const EMAILJS_SERVICE_ID  = 'service_t9atzmi';
const EMAILJS_TEMPLATE_ID = 'template_dwpf07h';
const EMAILJS_PUBLIC_KEY  = 'piXBz41DtIkAf8doY';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClass = "bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors w-full";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('loading');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-gray-400 hover:text-black transition-colors underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Name *</label>
          <input name="from_name" required placeholder="John Doe" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address *</label>
          <input name="from_email" required type="email" placeholder="john@email.com" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Service Interested In</label>
        <select name="service" className={`${inputClass} cursor-pointer`}>
          <option value="">Select a service...</option>
          <option>Frontend Development</option>
          <option>Backend Development</option>
          <option>API Integration</option>
          <option>Deployment & Optimization</option>
          <option>Full Stack Project</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Hi Darry, I'd love to work with you on..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500 font-medium">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 bg-black hover:bg-[#0677EC] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 mt-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>Send Message <FiArrowRight size={18} /></>
        )}
      </button>
    </form>
  );
}
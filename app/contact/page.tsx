'use client';

import Image from 'next/image';
import DarryImg from '@/public/images/myimg.webp';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-20">

      {/* HERO ROW */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex-1">
            <span className="inline-block py-1.5 px-4 bg-white text-black font-semibold text-sm rounded-xl border border-gray-200 mb-6">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
              Let's Build<br />
              Something <span className="text-[#0677EC]">Great.</span>
            </h1>
            <p className="text-gray-500 text-base max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? Fill out the form and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              <Image src={DarryImg} alt="Darry" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">

          {/* FORM — takes 3 cols */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* CONTACT INFO — takes 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-6">

            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Contact Details</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:claudistore@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center group-hover:border-black transition-colors">
                    <FiMail size={16} />
                  </div>
                  claudistore@gmail.com
                </a>
                <a href="tel:+2349136740553" className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center group-hover:border-black transition-colors">
                    <FiPhone size={16} />
                  </div>
                  +234 913 674 0553
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Find Me On</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: FiGithub, label: 'GitHub', href: 'https://github.com' },
                  // { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: FiFacebook, label: 'Facebook', href: 'https://facebook.com' },
                  { icon: FiTwitter, label: 'X (Twitter)', href: 'https://x.com/DarryAntho93069' },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center group-hover:border-black transition-colors">
                      <Icon size={16} />
                    </div>
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Availability</span>
              </div>
              <p className="text-white font-semibold text-base mb-1">Open to new projects</p>
              <p className="text-white/50 text-sm">Typically respond within 24 hours</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
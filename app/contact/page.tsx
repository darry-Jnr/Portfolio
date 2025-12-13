'use client';

import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import Image from "next/image";
import DarryImg from "@/public/images/myimg.webp";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import Footer from "../components/footer/Footer";

const Contact = () => {
  const inputStyle = "w-full border-0 focus:outline-none focus:ring-0 placeholder-gray-400 text-gray-800 py-2";

  const iconHoverStyle =
    "transition duration-300 transform hover:scale-110 hover:text-blue-500 hover:blur-sm";

  return (
    <div className="pt-20 ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="pt-5">
          <h1 className="text-3xl md:text-7xl font-medium leading-snug md:leading-tight mb-6">
            Let's <br className="block md:hidden"/>Start a <br /> Project Together
          </h1>

          </div>
         
          <div className="w-40 h-40 md:w-64 md:h-64 relative">
            <Image
              src={DarryImg}
              alt="Darry"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
        </div>

      <div className="pt-10 md:max-w-1/2">
          <Input number={1} title="What is your name? *">
            <input placeholder="John Doe" className={inputStyle} />
          </Input>

          <Input number={2} title="What is your email? *">
            <input placeholder="Johndoe@gmail.com" className={inputStyle} />
          </Input>


          <Input number={3} title="What services are you interested in?">
              <input placeholder="Frontend, Backend, ..." className={inputStyle} />
            </Input>

            <Input number={4} title="Your Message">
              <input placeholder="Hi Darry, ..." className={inputStyle} />
            </Input>


          <div className="pt-5">
            <Button label="Send Message" />
          </div>
        

          <div className="flex gap-6 pt-12">
            <div>
              <span className="font-semibold text-lg">CONTACT DETAILS</span>
              <div className="mt-2 flex flex-col gap-2 text-gray-700">
                <div className={`flex items-center gap-2 ${iconHoverStyle}`}>
                  <FiMail size={20} />
                  <span>claudistore@gmail.com</span>
                </div>
                <div className={`flex items-center gap-2 ${iconHoverStyle}`}>
                  <FiPhone size={20} />
                  <span>+234 9136740553</span>
                </div>
              </div>
            </div>

            <div className="">
              <span className="font-semibold text-lg">SOCIALS</span>
              <div className="mt-2 flex gap-4 text-gray-700">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconHoverStyle}
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconHoverStyle}
                >
                  <FiLinkedin size={24} />
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconHoverStyle}
                >
                  <FiFacebook size={24} />
                </a>
              </div>
              </div>
        </div>
        </div>
      
        <Footer />
      </Container>
    </div>
  );
}

export default Contact;

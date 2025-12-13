'use client';

import Button from '../components/Button';
import Container from '../components/Container';
import { FiMapPin, FiDownload } from 'react-icons/fi';
import Image from 'next/image';
import myimage from '@/public/images/myimg.webp';
import Services from '../components/services/Services';
import Cta from '../components/cta/Cta';
import Footer from '../components/footer/Footer';

const Page = () => {
  const listStyle =
    'px-3 py-1 bg-gray-200 text-[#0677EC] rounded-full text-sm font-semibold';

  return (
    <div className="pt-20 md:pt-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <h1 className="font-medium text-3xl mb-3">Darry</h1>

            <div className="flex flex-wrap items-center text-lg gap-3">
              <p>Full Stack Developer |</p>

              <p className="flex items-center gap-1">
                <FiMapPin size={20} />
                Based in Nigeria
              </p>
            </div>

            <hr className="bg-neutral-200 my-5" />

            {/* ABOUT */}
            <div>
              <span className="text-sm text-gray-500">ABOUT ME</span>

              <p className="mt-2 text-gray-700">
                I am a Full-Stack JavaScript Engineer with five years of experience
                dedicated to creating fast, scalable, and user-centric web
                applications. My passion is leveraging modern technologies like
                the MERN stack (MongoDB, Express, React, Node.js) and Next.js to
                turn innovative ideas into reliable digital products.
              </p>

              {/* SKILLS */}
              <ul className="flex flex-wrap gap-3 mt-4 pb-10">
                <li className={listStyle}>HTML</li>
                <li className={listStyle}>CSS</li>
                <li className={listStyle}>JavaScript</li>
                <li className={listStyle}>Tailwind CSS</li>
                <li className={listStyle}>React</li>
                <li className={listStyle}>Next.js</li>
                <li className={listStyle}>Node.js</li>
                <li className={listStyle}>Express.js</li>
              </ul>

              <hr className="bg-neutral-200 my-5" />

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-4 items-center">
                <Button label="Start a Project" variant="primary" />

                <a
                  href="/cv.docx"
                  download
                  className="underline text-gray-500 text-lg font-bold flex items-center gap-1 hover:text-black transition"
                >
                  Download CV <FiDownload size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <Image
              src={myimage}
              alt="Portrait of Darry, Full Stack Developer"
              width={200}
              height={650}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        <Services />
        <Cta />
        <Footer />
      </Container>
     
    </div>
  );
};

export default Page;

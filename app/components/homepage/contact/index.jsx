// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* 👇 Changed layout to vertical */}
      <div className="flex flex-col gap-12 items-start">
        <ContactForm />

        <div className="w-full">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail className="icon-style" size={36} />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall className="icon-style" size={36} />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn className="icon-style" size={36} />
              <span>{personalData.address}</span>
            </p>
          </div>

          <div className="mt-8 lg:mt-16 flex flex-wrap gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}><IoLogoGithub className="icon-style-lg" size={48} /></Link>
            <Link target="_blank" href={personalData.linkedIn}><BiLogoLinkedin className="icon-style-lg" size={48} /></Link>
            {/* <Link target="_blank" href={personalData.twitter}><FaXTwitter className="icon-style-lg" size={48} /></Link>
            <Link target="_blank" href={personalData.stackOverflow}><FaStackOverflow className="icon-style-lg" size={48} /></Link>
            <Link target="_blank" href={personalData.facebook}><FaFacebook className="icon-style-lg" size={48} /></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactSection;
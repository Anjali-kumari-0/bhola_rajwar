import  footerData  from "../../constants/footerData.json";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#021f1d] text-white pt-20 w-full items-center flex justify-between">

      <div className="container-layout items-center flex flex-col">

        <div className="grid lg:grid-cols-4 gap-2  pl-4">

          {/* COMPANY */}

          <div>

            <h2 className="text-sm font-bold mb-3">
              {footerData.company.name}
            </h2>

            <p className="text-[#d4af73] text-sm mb-8">
              {footerData.company.tagline}
            </p>

            <p className="text-white/70  text-sm">
              {footerData.company.description}
            </p>

            <h3 className="text-sm font-semibold mb-8">
              Follow us!
            </h3>

            <div className="flex items-center gap-5">

              <a
                href="#"
                className="footer-social-icon"
              >
                {/* <Facebook size={24} /> */}
              </a>

              <a
                href="#"
                className="footer-social-icon"
              >
                {/* <Instagram size={24} /> */}
              </a>

              <a
                href="#"
                className="footer-social-icon"
              >
                {/* <LinkedinIcon size={24} /> */}
              </a>

            </div>
          </div>

          {/* EXPERTISE */}

          <div>

            <h3 className="footer-heading">
              Our Expertise
            </h3>

            <div className="footer-links-container text-sm text-start flex flex-col gap-2 mt-6">

              {footerData.expertise.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="footer-link"
                >
                  {item}
                </a>
              ))}

            </div>
          </div>

          {/* SERVICES */}

          <div>

            <h3 className="footer-heading">
              Our Services
            </h3>

            <div className="footer-links-container text-sm text-start flex flex-col gap-2 mt-6">

              {footerData.services.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="footer-link"
                >
                  {item}
                </a>
              ))}

            </div>
          </div>

          {/* CONTACT */}

          <div>

            <h3 className="footer-heading">
              Contact Us
            </h3>

            <div className="flex flex-col gap-2 mt-6">

              {/* PHONE */}

              <div className="footer-contact-item items-center flex gap-2 text-sm">

                <div className="footer-contact-icon">
                  <Phone size={22} />
                </div>

                <p className="footer-link">
                  {footerData.contact.phone}
                </p>

              </div>

              {/* EMAIL */}

              <div className="footer-contact-item items-center flex gap-2 text-sm">

                <div className="footer-contact-icon">
                  <Mail size={22} />
                </div>

                <p className="footer-link break-all">
                  {footerData.contact.email}
                </p>

              </div>

              {/* ADDRESS */}

              {footerData.contact.addresses.map((address) => (
                <div
                  key={address}
                  className="footer-contact-item items-center flex gap-2 text-sm"
                >

                  <div className="footer-contact-icon">
                    <MapPin size={22} />
                  </div>

                  <p className="footer-link leading-8">
                    {address}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>

        {/* BOTTOM */}

        <div className="pt-6">

          <p className="text-white/70 text-xs border-0 pb-1 pt-5">
            {footerData.copyright}
          </p>

          {/* <button
            className="w-14 h-14 rounded-full border border-white/30
            flex items-center justify-center
            text-2xl
            hover:bg-white hover:text-black
            transition-all duration-300"
          >
            ↑
          </button> */}

        </div>

      </div>

    </footer>
  );
};

export default Footer;
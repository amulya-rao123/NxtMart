import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-green-900 text-white text-center py-8 px-4">
      {/* Title */}
      <p className="text-lg font-medium mb-4">
        For any queries, please contact us
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 my-4">
        <FontAwesomeIcon
          className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-yellow-400"
          icon={faInstagram}
          onClick={() =>
            window.open('https://www.instagram.com', '_blank')
          }
        />

        <FontAwesomeIcon
          className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-yellow-400"
          icon={faLinkedin}
          onClick={() =>
            window.open('https://www.linkedin.com/in/Amulya-kotha', '_blank')
          }
        />

        <FontAwesomeIcon
          className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-yellow-400"
          icon={faPinterest}
          onClick={() => window.open('https://www.pinterest.com', '_blank')}
        />

        <FontAwesomeIcon
          className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-yellow-400"
          icon={faFacebook}
          onClick={() => window.open('https://www.facebook.com', '_blank')}
        />
      </div>

      {/* Copyright */}
      <p className="text-sm opacity-80">
        Copyright © 2025 MiniMart. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

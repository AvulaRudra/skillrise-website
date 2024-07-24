import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcJcb, faCcDinersClub, faGooglePay, faApplePay, faPaypal } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>Contact : samuel.skillrise@gmail.com</p>
        <div className="mt-4 flex justify-center space-x-4">
          <FontAwesomeIcon icon={faCcVisa} size="2x" />
          <FontAwesomeIcon icon={faCcMastercard} size="2x" />
          <FontAwesomeIcon icon={faCcAmex} size="2x" />
          <FontAwesomeIcon icon={faCcDiscover} size="2x" />
          <FontAwesomeIcon icon={faCcJcb} size="2x" />
          <FontAwesomeIcon icon={faCcDinersClub} size="2x" />
          <FontAwesomeIcon icon={faGooglePay} size="2x" />
          <FontAwesomeIcon icon={faApplePay} size="2x" />
          <FontAwesomeIcon icon={faPaypal} size="2x" />
        </div>
        <div className="bg-gray-800 text-white text-center p-4">
          <p>Design by Digi Tiller Studios</p>
        </div>
        <p>&copy; 2022 Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

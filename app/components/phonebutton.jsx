// components/PhoneButton.jsx
"use client";

import React from "react";
import { Phone } from "lucide-react";

const PhoneButton = ({ phoneNumber, children }) => {
  const handleClick = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      // If screen is large (desktop), copy to clipboard
      navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied to clipboard!");
    } else {
      // If screen is small (mobile), open the dialer
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-start gap-x-8 mb-10 cursor-pointer"
    >
      <Phone size={50} fill="#e64a27" stroke="#fff" />
      <div>
        <div className="text-[25px] font-semibold mb-1">Phone Number</div>
        <div>{children || phoneNumber}</div>
      </div>
    </div>
  );
};

export default PhoneButton;

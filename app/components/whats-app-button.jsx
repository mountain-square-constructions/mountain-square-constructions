// components/FloatingWhatsAppButton.jsx
"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const FloatingWhatsAppButton = ({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
}) => {
  // Format the phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "");

  // Create the WhatsApp URL with the phone number and optional message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} color="white" fill="white" strokeWidth={0} />
    </Link>
  );
};

export default FloatingWhatsAppButton;

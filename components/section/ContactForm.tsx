"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import instagram from '@/public/icons/instagram.png'
import gmail from '@/public/icons/gmail.png'
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setStatus(result.message);

    if (res.ok) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="w-full sm:h-1/2 flex flex-col gap-5 p-5">
      <h2 className="text-xl text-start font-bold">Contact Me</h2>
      <p className="text-center">
        You can contact me by clicking the icon below
      </p>
      <div className="text-6xl flex gap-5 justify-center items-center">
      <Link
        href="https://wa.me/89671022623"
        target="_blank">
        <FaWhatsapp className="text-green-400" />
        </Link>
        <Link
        href="https://instagram.com/ng.johan.w"
        target="_blank">
        <Image src={instagram} width={55} height={55} alt="@Ng.Johan.W"/>
      </Link>
        <Link
        href="https://mail.google.com/mail/?view=cm&fs=1&to=johantoniwijaya6@gmail.com&su=Good News&body=Tell%20Me%20Some%20Good%20News!"
        target="_blank" rel="noopener noreferrer">
        <Image src={gmail} width={55} height={55} alt="johantoniwijaya6@gmail.com"/>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 shadow dark:shadow-white rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 shadow dark:shadow-white rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 shadow dark:shadow-white rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded">
          Send Message
        </button>
      </form>
      {status && <p className="mt-2 text-center">{status}</p>}
    </div>
  );
}

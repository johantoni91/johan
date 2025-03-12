"use client";
import ScrollTop from "@/components/ScrollTop";
import About from "@/components/section/About";
import Contact from "@/components/section/ContactForm";
import Experiences from "@/components/section/Experiences";
import Intro from "@/components/section/Intro";
import Project from "@/components/section/Project";
import Skills from "@/components/section/Skills";
import { Navbar } from "@/components/structure/Navbar";

export default function Home() {
  return (
      <div>
      <Navbar />
      <div className="lg:w-1/2 w-full mx-auto relative">
        <ScrollTop/>
        <Intro />
        <About />
        <Experiences />
        <Skills />
        <Project/>
        <Contact />
        <footer className="w-full p-5 text-center">
          <small className="text-gray-400 font-semibold">Built by Johan Toni Wijaya. All Right Reserved &#169; 2025</small>
        </footer>
      </div>
      </div>
  );
}

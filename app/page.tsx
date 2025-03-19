"use client";
import ScrollTop from "@/components/ScrollTop";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Experiences from "@/components/section/Experiences";
import Faq from "@/components/section/Faq";
import Intro from "@/components/section/Intro";
import Project from "@/components/section/Project";
import Skills from "@/components/section/Skills";
import { Analytics } from '@vercel/analytics/next';
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
        <Project />
        <Contact />
        <Faq />
        <footer className="w-full p-5 text-center text-gray-400 font-semibold">
          <div className="flex justify-center items-center gap-5">
            <Analytics />
          </div>
          <small>Built by Johan Toni Wijaya. All Right Reserved &#169; 2025</small>
        </footer>
      </div>
      </div>
  );
}

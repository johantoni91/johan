"use client";
import ScrollTop from "@/components/ScrollTop";
import About from "@/components/section/About";
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
        <footer className="w-full p-5 text-center text-gray-400 font-semibold">
          <h1 className="text-xl font-bold text-gray-600">~ Still Beta ~</h1>
          <small>Built by Johan Toni Wijaya. All Right Reserved &#169; 2025</small>
        </footer>
      </div>
      </div>
  );
}

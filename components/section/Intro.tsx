import profile from "@/public/favicon.ico";
import profile1 from "@/public/profile.jpg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Intro() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="about" className="w-full sm:h-1/2 h-full flex justify-center items-center p-5 flex-wrap-reverse sm:flex-nowrap">
      <div className="w-full h-1/2 flex flex-col justify-center items-start gap-2">
        <span className="inline-flex gap-5 text-xl font-medium text-green-400">
          👋🏼 Hello ! <p className="text-black dark:text-white">I am</p>
        </span>
        <h1 className="text-4xl animate-dimlight box-reflect tracking-[2px] font-semibold">
          Johan Toni Wijaya
        </h1>
        <p className="mt-10 text-xl font-semibold">
          <TypeAnimation
            sequence={[
              "I'm a Full stack Developer",
              1000,
              "Build Fast",
              1000,
              "Clean",
              1000,
              "and secure code",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </p>
        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=johantoniwijaya6@gmail.com&su=Job Application&body=Send%20your%20message%20here."
          target="_blank"
          className="mt-3 px-3 py-1 border-2 rounded-xl text-sm border-[#03bcf4] hover:bg-[#03bcf4] hover:text-white">
          Hire Me
        </Link>
      </div>
      <div className="w-full h-1/2 justify-center flex items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src={profile1}
              alt="profile"
              width={200}
              height={200}
              className="rounded-xl shadow-lg shadow-[#03bcf4] transition-all duration-500 ease-in transform hover:scale-125 hover:saturate-150 grayscale hover:grayscale-0 mb-12 mt-10 sm:m-0"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <Image
              src={profile1}
              alt="profile"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

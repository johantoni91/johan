import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Faq() {
  return (
    <div className="relative w-full sm:h-1/2 flex flex-col gap-5 p-5">
      <h1 className="text-start font-bold text-2xl">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who am i?</AccordionTrigger>
          <AccordionContent>
            Hi, i'm Johan Toni Wijaya. I am a passionate technology enthusiast and full-stack developer with a strong drive for learning and innovation. I specialize in building robust web applications using Laravel and Next.js for the front end, while leveraging FastAPI, Express.js, and Laravel Lumen for backend development.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What technologies do i specialize in?</AccordionTrigger>
          <AccordionContent>
            I specialize in Laravel and Next.js for the front end, and FastAPI, Express.js, and Laravel Lumen for the backend.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What are my strengths?</AccordionTrigger>
          <AccordionContent>
            I am a fast learner, highly reliable, and always eager to explore new technologies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Why work with me?</AccordionTrigger>
          <AccordionContent>
            I bring efficiency, scalability, and innovation to every project while maintaining a strong commitment to quality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How to hire me?</AccordionTrigger>
          <AccordionContent>
            <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=johantoniwijaya6@gmail.com&su=Job Application&body=Send%20your%20message%20here."
          target="_blank"
          className="text-sm font-semibold animate-pulse text-[#03bcf4] hover:text-blue-600">
          You can click this link
        </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

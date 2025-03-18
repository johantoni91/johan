import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import ig from "@/public/icons/instagram.png";

export default function Contact() {
  const [state, handleSubmit] = useForm("xanenaoe");
  if (state.succeeded) {
    return toast("Email has been sent.");
  }

  return (
    <div className="relative w-full sm:h-1/2 flex flex-col gap-5 p-5">
      <h1 className="text-start font-bold text-2xl">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items-start gap-3 w-full p-2">
        <div className="flex flex-col gap-3 w-full p-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="h-9 w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-600"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-3 w-full p-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="border rounded-xl border-slate-200 p-3 text-sm text-slate-600"
            id="message"
            placeholder="Type your messages here."
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex justify-between items-center w-full p-2">
          <Button
            className="rounded-xl"
            type="submit"
            disabled={state.submitting}>
            Send
          </Button>
          <div className="items-center gap-3 flex justify-center">
            <Link href="https://github.com/johantoni91" target="_blank">
              <FaGithub size={30} />
            </Link>
            <Link href="https://wa.me/6289671022623" target="_blank">
              <FaWhatsapp className="text-green-600" size={30} />
            </Link>
            <Link href="https://ig.me/m/ng.johan.w" target="_blank">
              <Image src={ig} alt="instagram" width={30} height={30} />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

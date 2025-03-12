import JS from "@/public/icons/js.png"
import HTML from "@/public/icons/html-5.png"
import Python from "@/public/icons/python.png"
import ReactIcon from "@/public/icons/physics.png"
import CSS3 from "@/public/icons/css-3.png"
import PHP from "@/public/icons/php.png"
import GIT from "@/public/icons/git.png"
import NODEJS from "@/public/icons/node-js.png"
import RFID from "@/public/icons/rfid.png"
import LARAVEL from "@/public/icons/laravel.png"
import NEXT from "@/public/icons/nextjs.png"
import VUE from "@/public/icons/vue.png"
import Image from "next/image";

export default function Skills() {
  return (
    <div className="w-full sm:h-1/2 flex flex-col gap-5 p-5">
      <h1 className="text-start font-bold text-2xl">Skills</h1>
      <div className="flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap">
        <Image src={JS} alt="JS" width={30} height={30} />
        <Image src={NODEJS} alt="NODEJS" width={30} height={30} />
        <Image src={HTML} alt="HTML" width={30} height={30} />
        <Image src={Python} alt="Python" width={30} height={30} />
        <Image src={ReactIcon} alt="ReactIcon" width={30} height={30} />
        <Image src={CSS3} alt="CSS3" width={30} height={30} />
        <Image src={PHP} alt="PHP" width={30} height={30} />
        <Image src={GIT} alt="GIT" width={30} height={30} />
        <Image src={RFID} alt="RFID" width={30} height={30} />
        <Image src={LARAVEL} alt="LARAVEL" width={30} height={30} />
        <Image src={NEXT} alt="NEXT" width={30} height={30} />
        <Image src={VUE} alt="VUE" width={30} height={30} />
      </div>
    </div>
  );
}

import JS from "@/public/icons/js.png"
import HTML from "@/public/icons/html-5.png"
import Python from "@/public/icons/python.png"
import ReactIcon from "@/public/icons/physics.png"
import CSS3 from "@/public/icons/css-3.png"
import PHP from "@/public/icons/php.png"
import SQL from "@/public/icons/mysql.png"
import GIT from "@/public/icons/git.png"
import NODEJS from "@/public/icons/node-js.png"
import RFID from "@/public/icons/rfid.png"
import LARAVEL from "@/public/icons/laravel.png"
import NEXT from "@/public/icons/nextjs.png"
import VUE from "@/public/icons/vue.png"
import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="w-full sm:h-1/2 flex flex-col gap-5 p-5">
      <h1 className="text-start font-bold text-2xl">Skills</h1>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <Image src={JS} alt="JS" width={50} height={50} />
        <Image src={NODEJS} alt="NODEJS" width={50} height={50} />
        <Image src={HTML} alt="HTML" width={50} height={50} />
        <Image src={Python} alt="Python" width={50} height={50} />
        <Image src={ReactIcon} alt="ReactIcon" width={50} height={50} />
        <Image src={CSS3} alt="CSS3" width={50} height={50} />
        <Image src={PHP} alt="PHP" width={50} height={50} />
        <Image src={SQL} alt="SQL" width={50} height={50} />
        <Image src={GIT} alt="GIT" width={50} height={50} />
        <Image src={RFID} alt="RFID" width={50} height={50} />
        <Image src={LARAVEL} alt="LARAVEL" width={50} height={50} />
        <Image src={NEXT} alt="NEXT" width={50} height={50} />
        <Image src={VUE} alt="VUE" width={50} height={50} />
      </div>
    </div>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Project() {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const projects = [
    {
      src: "/P4.png",
      title: "Project 1",
      description: "First project at PT. Hanatekindo Mulia Abadi",
      active: true,
    },
    {
      src: "/P4-2.png",
      title: "Project 1",
      description: "First project at PT. Hanatekindo Mulia Abadi",
      active: true,
    },
    {
      src: "/P16.png",
      title: "Project 2",
      description: "Second project at PT. Hanatekindo Mulia Abadi",
      active: true,
    },
    {
      src: "/P16-2.png",
      title: "Project 2",
      description: "Second project at PT. Hanatekindo Mulia Abadi",
      active: true,
    },
  ];
  return (
    <div
      id="projects"
      className="relative w-full sm:h-1/2 flex flex-col gap-5 p-5 overflow-x-hidden">
      <h1 className="text-start font-bold text-2xl">Projects</h1>
      <Dialog>
        <div className="w-full flex justify-center items-center gap-5 flex-wrap sm:flex-nowrap">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-xs">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <DialogTrigger asChild>
                          <motion.img
                            src={project.src}
                            alt="profile"
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => {
                              setPhoto(project.src);
                              setTitle(project.title);
                            }}
                            className="hover:cursor-pointer w-full h-full shadow-lg shadow-white rounded-xl"
                          />
                        </DialogTrigger>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <DialogContent className="font-bold max-w-xl max-h-xl bg-white dark:bg-black border-0 rounded-lg">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 p-4">
            <Image
              src={photo}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

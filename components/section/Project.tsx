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

export default function Project() {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="relative w-full sm:h-1/2 flex flex-col gap-5 p-5">
      <h1 className="text-start font-bold text-2xl">Projects</h1>
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
                      {/* <button onClick={() => setIsOpen(true)}> */}
                        <motion.img
                          src={project.src}
                          alt="profile"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="hover:scale-125 w-full h-full shadow-lg shadow-white rounded-xl"
                        />
                      {/* </button> */}
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
      {/* <Modal
        className={"flex justify-center"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <motion.img
          src={project.src}
          alt="profile"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="object-fit w-full h-full shadow-lg shadow-white rounded-xl"
        />
      </Modal> */}
    </div>
  );
}

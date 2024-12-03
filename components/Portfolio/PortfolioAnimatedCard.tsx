import React, { useState } from "react";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "../common/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { ScrollArea } from "../ui/scroll-area";
const OPTIONS: EmblaOptionsType = {};

function PortfolioAnimatedCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  console.log(project);
  return (
    <>
      <motion.div
        ref={ref}
        key={index}
        initial={{
          y: 50,
          opacity: 0,
          scale: 0.9,
        }}
        animate={
          inView
            ? {
                y: 0,
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut",
        }}
      >
        <div
          className="w-full group text-white bg-cover bg-center rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 focus-within:scale-105"
          style={{
            backgroundImage: `url(${project.images[0]})`,
            paddingTop: "56.25%",
            position: "relative",
          }}
        >
          <div className="absolute inset-0 p-6 bg-gradient-to-t from-black via-black/80 to-black/0 transform translate-y-3/4 transition-transform duration-500 group-hover:translate-y-1/3">
            <h2 className="relative text-2xl font-bold inline-block">
              <span className="after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-1 after:bg-cyan-500 after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500">
                {project.title}
              </span>
            </h2>
            <p className="text-white/80 mt-4 mb-6 opacity-0 transition-opacity duration-500 delay-300 group-hover:opacity-100">
              {project.introduction}
            </p>

            <Button
              variant={"secondary"}
              size={"sm"}
              onClick={() => setOpen(true)}
            >
              Learn More
            </Button>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className=" sm:max-w-[600px] ">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.introduction}</DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] w-full rounded-md">
              <DialogDescription className="mb-4">
                <p className="whitespace-pre-line">{project.description}</p>
              </DialogDescription>
              <div className="w-full flex flex-col gap-4">
                {/* <Carousel slides={project.images} options={OPTIONS} /> */}
                {project.images.map((image: string, index: number) => (
                  <img
                    className="rounded-xl"
                    key={index}
                    src={image}
                    alt={`${project.title}-image-${index}`}
                  />
                ))}
              </div>
            </ScrollArea>
            {(project.liveUrl || project.githubUrl) && (
              <DialogFooter className="flex justify-end gap-2">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, "_blank");
                    }}
                  >
                    Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                  >
                    Code
                  </Button>
                )}
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </>
  );
}

export default PortfolioAnimatedCard;

"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function EducationCard() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const edu = (
    t("education.content", {
      returnObjects: true,
    }) as any[]
  )[0] as any;

  return (
    <Card className="w-full flex mt-2">
      <CardHeader>
        <div className="flex flex-row items-center gap-6">
          {edu.image && (
            <Image
              className="rounded-lg"
              src={edu.image}
              alt={edu.name}
              width={60}
              height={60}
            />
          )}
          <div className="text-left">
            <CardTitle>{edu.name}</CardTitle>
            <CardDescription>
              <span className="font-bold">{edu.major} </span>
              <br />
              <span>{edu.subMajor} </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

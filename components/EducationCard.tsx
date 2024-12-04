"use client";
import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function EducationCard({ content }: { content: any }) {
  const edu = content.content[0];
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

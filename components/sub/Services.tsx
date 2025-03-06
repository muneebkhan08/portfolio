"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function ServiceCards() {
  return (
    <div className="h-[30rem] w-full flex gap-2 flex-col items-center justify-center md:flex-row">
      {/* <PinContainer
        title="Discuss about a new website"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl text-slate-100">
    
            Web Development
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer> */}

      <PinContainer
        title="Discuss about a new website"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
            Web Development
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Anybody can build you a website. We build for scale. Our web development services future-proof your product from Day 1.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/webDev.jpeg" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="Lets talk AI"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
            Generative AI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            Having trouble keeping up with how fast AI is changing our world? This is where we come in. Let's figure out how to get GenAI to work for you.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/GenAI.jpg" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="Re-design the Design"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
          UI/UX
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            Specialize in crafting intuitive, compelling, and functional UI/UX designs that enhance user engagement and drive business success.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/UIUX.png" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="Let's build a new Software"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
            Custom Software Development
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            Building scalable and bespoke software tailored to address specific business challenges. Lets turn your vision into reality.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/CusSoft.avif" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>


    </div>
  );
}

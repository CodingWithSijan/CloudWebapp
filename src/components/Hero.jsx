import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/outline";
import React from "react";
import BackgroundImage from "../assests/background-hero-img.jpg";
const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
            <p className="text-2xl">Unique Sequencing & Production</p>
            <p className="py-3 text-5xl md:text-7xl font-bold">
              Cloud Management
            </p>
            <p className="text-2xl">This is our Tech brand.</p>
            <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
          </div>
          <div>
            <img className="w-full" src={BackgroundImage} alt="" />
          </div>

          <div
            className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-auto transform md:translate-x-1/4 bg-zinc-200 
          border border-slate-300 rounded-xl text-center shadow-xl"
          >
            <p className="font-bold">Data Services</p>
            <div className="flex justify-center sm:justify-centerflex-wrap px-4">
              <p className="flex py-2  px-4 text-slate-500">
                <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
              </p>
              <p className="flex py-2  px-4 text-slate-500">
                <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard
                Design
              </p>
              <p className="flex py-2  px-4 text-slate-500">
                <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
              </p>
              <p className="flex py-2  px-4 text-slate-500">
                <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

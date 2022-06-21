import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
const Pricing = () => {
  return (
    <>
      <div name="pricing" className="w-full text-white my-24">
        {/* Container */}
        <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

        <div className="max-w-[1240px] mx-auto py-12">
          <div className="text-center py-8 text-slate-300">
            <h2 className="text-3xl uppercase">Pricing</h2>
            <h2 className="text-5xl font-bold text-white py-8">
              The right price for your research.
            </h2>
            <p className="text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              expedita quam dolorem!
            </p>
          </div>

          {/*  Cards*/}
          <div className="grid md:grid-cols-2">
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
              <span className="uppercase py-1 px-3 bg-indigo-200 rounded-2xl text-sm">
                Standard
              </span>
              <div>
                <p className="text-5xl font-bold py-4 ">
                  $30
                  <span className="text-xl text-slate-500">/mo</span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              {/* Icons */}
              <div className="text-2xl">
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <button className="w-full py-4 my-4">Get Started</button>
              </div>
              {/* Icons */}
            </div>
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
              <span className="uppercase py-1 px-3 bg-indigo-200 rounded-2xl text-sm">
                Standard
              </span>
              <div>
                <p className="text-5xl font-bold py-4 ">
                  $80
                  <span className="text-xl text-slate-500">/mo</span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              {/* Icons */}
              <div className="text-2xl">
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Lorem, ipsum dolor.
                </p>
                <button className="w-full py-4 my-4">Get Started</button>
              </div>
              {/* Icons */}
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Pricing;

"use client";
import Navbar from "./Components/Navbar";
import ProfileCard from "./Components/ProfilCard";
import Link from "next/link";
import { Laptop, UserRoundSearch, Laugh, AlarmClock} from "lucide-react";
import PricingCard from "./Components/PricingCard";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Footer from "./Components/Footer";
import { WavyBackground } from "./Components/WavyBackground";
import { TypeAnimation } from 'react-type-animation';

interface Pricing {
  category: string;
  package: string;
  type: string;
  discountPrice: string;
  realPrice: string;
  linkOrder: string;
  description: string;
}

export default function Home() {
  const [isWebsite, setIsWebsite] = useState<boolean>(true);
  const pricings: Pricing[] = [
    {
      category: "website",
      package: "MERN Stack",
      type: "(dynamic)",
      discountPrice: "Rp.750.000 / Project",
      realPrice: "Rp.800.000 / Project",
      linkOrder: "#",
      description:
      "Build dynamic, modern websites with the MERN Stack—combining MongoDB, Express, React, and Node.js for high performance and incredible interactivity!",
    },
    {
      category: "website",
      package: "Laravel",
      type: "(dynamic)",
      discountPrice: "Rp.550.000 / Project",
      realPrice: "Rp.630.000 / Project",
      linkOrder: "#",
      description:
        "Embrace the digital era with a dynamic website designed specifically using Laravel, a feature-packed solution with optimal performance and an impressive user experience!",
    },

    {
      category: "website",
      package: "Basic",
      type: "(static)",
      discountPrice: "Rp.20.000 / Page",
      realPrice: "Rp.30.000 / Page",
      linkOrder: "#",
      description:
        "Get a fast and light static website, with just HTML and CSS!",
    },
    {
      category: "website",
      package: "Responsive",
      type: "(static)",
      discountPrice: "Rp.45.000 / Page",
      realPrice: "Rp.50.000 / Page",
      linkOrder: "#",
      description:
        "Build responsive, stunning static websites with just HTML and CSS, for flawless display on all devices!",
    },
    {
      category: "website",
      package: "Advance",
      type: "(static)",
      discountPrice: "Rp.55.000 / Page",
      realPrice: "Rp.60.000 / Page",
      linkOrder: "#",
      description:
        "Build sophisticated, responsive websites with HTML, CSS, and JavaScript. Stunning looks with rich functionality on all devices!",
    },
    {
      category: "website",
      package: "Expert",
      type: "(dynamic)",
      discountPrice: "Rp.60.000 / Page",
      realPrice: "Rp.70.000 / Page",
      linkOrder: "#",
      description:
        "Experience the power of dynamic, interactive websites, designed by experts to provide a stunning and functional experience, with the latest HTML, CSS and JavaScript technology!",
    },
    {
      category: "solving",
      package: "Solving Problem",
      type: "(Easy)",
      discountPrice: "Rp.20.000 / Program",
      realPrice: "Rp.27.000 / Program",
      linkOrder: "#",
      description: "Quick and easy solution to your problem. We are ready to help with light-level problem solving with precise and efficient results!",
    },
    {
      category: "solving",
      package: "Solving Problem",
      type: "(Medium)",
      discountPrice: "Rp.50.000 / Program",
      realPrice: "Rp.62.000 / Program",
      linkOrder: "#",
      description: "Solve your problems with medium level problem solving solutions. Precise, efficient, and reliable!",
    },
    {
      category: "solving",
      package: "Solving Problem",
      type: "(Hard)",
      discountPrice: "Rp.100.000 / Program",
      realPrice: "Rp.147.000 / Program",
      linkOrder: "#",
      description: "Face the toughest challenges with high-level problem solving solutions in-depth analysis and smart strategies for optimal results!",
    }
  ];

  return (
    <div className=" w-screen lg:flex">
      <Navbar />
      <div className="w-full lg:w-[76%] bg-[#1E252D] overflow-x-hidden flex flex-col items-start gap-16">
        <div className=" w-full flex flex-col lg:flex-row lg:justify-between px-10 lg:pl-20 lg:pr-14 overflow-hidden relative">
          <WavyBackground className="absolute z-[-100] overflow-hidden"></WavyBackground>
          <div className=" w-full lg:w-[55%] flex flex-col py-14 lg:pr-10 lg:justify-center gap-6 z-0">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{  display: "inline-block" }}
              repeat={Infinity}
              className="font-semibold text-[#888888] text-xs lg:text-md"
            />
            
            <div className=" text-white flex flex-col text-3xl lg:text-5xl gap-4">
              <h1 className=" font-light">
                Hi, I'm <span className=" font-extrabold">Rafli</span>
              </h1> 
              <h1 className=" font-extrabold">Afriza Nugraha.</h1>
            </div>
            <p className=" text-white text-xs lg:text-base font-light w-full">
              Greetings! I'm Rafli Afriza Nugraha, a passionate and
              detail-oriented web developer based in Indonesia. Currently
              enrolled at Syaih Kuala University.
            </p>

            <div className="w-full flex justify-start items-center gap-4 pt-5 lg:pt-20 text-xs lg:text-base text-white font-semibold">
              <button className=" px-4 py-3 bg-[#1B5F96] rounded-md">
                Download CV
              </button>
              <Link href={"/Pages/Contact"} className=" px-4 py-3 bg-[#31363F] rounded-md">
                Contact
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex items-center lg:py-10 ">
            <ProfileCard />
          </div>
        </div>

        <div className="px-10 lg:pl-20 w-full flex flex-col gap-5 items-start text-white">
          <div>
            <h1 className=" font-bold text-xl lg:text-2xl">What i do</h1>
            <div className="w-full rounded-full h-1 mb-4 bg-gray-700">
              <div
                className="bg-[#1B5F96] h-1 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <div className=" w-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-10 lg:gap-0">
            <div className=" w-full flex flex-col gap-1">
              <div className=" w-full flex items-center gap-5">
                <div className=" w-[45px] h-[45px] bg-[#31363F] flex justify-center items-center rounded-md">
                  <Laptop size={26} color="#1B5F96" />
                </div>
                <div>
                  <h1 className=" font-bold text-base lg:text-lg">Website Building</h1>
                </div>
              </div>
              <div className=" w-full flex gap-5">
                <div className=" w-[45px] h-[45px]"></div>
                <p className=" w-[80%] text-xs lg:text-sm text-gray-400">
                  I am ready to help you build your dream website with an
                  attractive design, fast performance and reliable
                  functionality, the right web solution for your online success!
                </p>
              </div>
            </div>

            <div className=" w-full flex flex-col gap-1">
              <div className=" w-full flex items-center gap-5">
                <div className=" w-[45px] h-[45px] bg-[#31363F] flex justify-center items-center rounded-md">
                  <UserRoundSearch size={26} color="#1B5F96" />
                </div>
                <div>
                  <h1 className=" font-bold text-base lg:text-lg">Problem Solving</h1>
                </div>
              </div>
              <div className=" w-full flex gap-5">
                <div className=" w-[45px] h-[45px]"></div>
                <p className=" w-[80%] text-xs lg:text-sm text-gray-400">
                  I am a problem solver ready to provide smart and effective
                  solutions to every challenge, helping you achieve your goals
                  more quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 lg:pl-20 w-full flex flex-col items-start gap-5 text-white">
          <div>
            <h1 className=" font-bold text-xl lg:text-2xl">Pricing</h1>
            <div className="w-full rounded-full h-1 lg:mb-4 bg-gray-700">
              <div
                className="bg-[#1B5F96] h-1 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>

          <div className="border-b border-gray-700">
            <ul className="flex flex-wrap -mb-px text-xs lg:text-sm font-medium text-start text-gray-400 ">
              <li className="me-2">
                <button
                  onClick={() => setIsWebsite(true)}
                  className={`flex items-center justify-start p-4 border-b-2  rounded-t-lg  hover:border-gray-300 hover:text-gray-300 group gap-2 ${
                    isWebsite
                      ? "border-gray-300 text-gray-300"
                      : "border-transparent"
                  }`}
                >
                  <Laptop />
                  Website
                </button>
              </li>
              <li className="me-2">
                <button
                  onClick={() => setIsWebsite(false)}
                  className={`flex items-center justify-start p-4 border-b-2  rounded-t-lg  hover:border-gray-300 hover:text-gray-300 group gap-2 ${
                    !isWebsite
                      ? "border-gray-300 text-gray-300"
                      : "border-transparent"
                  }`}
                >
                  <UserRoundSearch />
                  Solving
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full lg:pr-10">
            <PricingCard cards={pricings} status={isWebsite} />
          </div>
        </div>

        <div className="px-10 lg:pl-20 w-full flex flex-col items-start text-white pr-10 gap-5">
          <div>
            <h1 className=" font-bold text-xl lg:text-2xl">Fun Fact</h1>
            <div className="w-full rounded-full h-1 mb-4 bg-gray-700">
              <div
                className="bg-[#1B5F96] h-1 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5">
            <div className=" w-full h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:-translate-y-1 duration-300">
              <div className=" w-[20%] h-full bg-[#31363F] flex justify-center items-center">
                <Laugh size={30} color="#888888" />
              </div>
              <div className="w-[80%] px-5 flex flex-col justify-center">
                <CountUp
                  className=" font-extrabold text-xl lg:text-2xl text-[#1B5F96]"
                  end={13}
                  duration={2}
                />
                <h1 className=" text-sm lg:text-base font-bold">Happy Client</h1>
              </div>
            </div>
            <div className=" w-full h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:-translate-y-1 duration-300">
              <div className=" w-[20%] h-full bg-[#31363F] flex justify-center items-center">
                <AlarmClock size={30} color="#888888" />
              </div>
              <div className="w-[80%] px-5 flex flex-col justify-center">
                <CountUp
                  className=" font-extrabold text-xl lg:text-2xl text-[#1B5F96]"
                  end={329}
                  duration={2}
                />
                <h1 className="text-sm lg:text-base font-bold">Working Hour</h1>
              </div>
            </div>
            <div className=" w-full h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:-translate-y-1 duration-300">
              <div className=" w-[20%] h-full bg-[#31363F] flex justify-center items-center">
                <Laugh size={30} color="#888888" />
              </div>
              <div className="w-[80%] px-5 flex flex-col justify-center">
                <h1 className=" font-extrabold text-xl lg:text-2xl text-[#1B5F96]">3</h1>
                <h1 className="text-sm lg:text-base font-bold">Certificate</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

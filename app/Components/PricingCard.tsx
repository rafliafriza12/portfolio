"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Pricing {
  category: string;
  package: string;
  type: string;
  discountPrice: string;
  realPrice: string;
  linkOrder: string;
  description: string;
}

interface PricingCardProps {
  cards: Pricing[];
  status: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ cards, status }) => {
  const [slidePerView, setSlidePerView] = useState<number>(1);
  useEffect(()=>{
    if(window.innerWidth <= 640){
      setSlidePerView(1);
    }else if(window.innerWidth >= 1024){
      setSlidePerView(4);
    }
  },[])
  return (
    <Swiper
      className="mySwiperPricing"
      slidesPerView={slidePerView}
      modules={[Navigation]}
      initialSlide={0}
      spaceBetween={20}
      navigation={true}
    >
      {status &&
        cards
          .filter((data: Pricing) => data.category === "website")
          .map((card: Pricing, i: number) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className={`w-full h-[400px] bg-[#2E3138] border-[2px] border-[#3a404a] rounded-lg flex flex-col items-center gap-10 p-5 text-white relative ${
                    i === 0 || i === 1 ? "box" : ""
                  }`}
                >
                  {i === 0 && (
                  <div className=" flex gap-2 items-center absolute bottom-2 right-2 px-3 py-1 text-xs font-medium leading-none text-center  rounded-md animate-pulse bg-[#a56e21] text-blue-200">
                    <Star size={15}/>
                    <h1>Highest Order</h1>
                  </div>
                  )}
                  {i === 1 && (
                  <div className=" flex gap-2 items-center absolute bottom-2 right-2 px-3 py-1 text-xs font-medium leading-none text-center  rounded-md animate-pulse bg-[#a56e21] text-blue-200">
                    <Star size={15}/>
                    <h1>Highest Order</h1>
                  </div>
                  )}
                  <div>
                    <h1 className=" font-bold text-xl">{card.package}</h1>
                    <h1 className=" font-medium text-xs">{card.type}</h1>
                  </div>

                  <div>
                    <h1 className=" text-sm text-[#888888]">Start from</h1>
                    <h1 className=" text-sm font-light">
                      <span className=" font-extrabold text-xl">
                        {card.discountPrice.split(" ")[0]}
                      </span>{" "}
                      {card.discountPrice.split(" ")[1]}{" "}
                      {card.discountPrice.split(" ")[2]}
                    </h1>
                    <h1 className=" text-sm line-through text-[#888888]">
                      {card.realPrice.split(" ")[0]}{" "}
                      {card.realPrice.split(" ")[1]}{" "}
                      {card.realPrice.split(" ")[2]}
                    </h1>
                  </div>

                  <button className=" px-5 py-1 font-bold bg-[#1B5F96] text-base rounded-md">
                    Order
                  </button>

                  <p className=" w-full text-left text-xs text-gray-400">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
      {!status &&
        cards
          .filter((data: Pricing) => data.category === "solving")
          .map((card: Pricing, i: number) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className={`w-full h-[400px] bg-[#2E3138] border-[2px] border-[#3a404a] rounded-lg flex flex-col items-center gap-10 p-5 text-white relative`}
                >
                  <div>
                    <h1 className=" font-bold text-xl">{card.package}</h1>
                    <h1 className=" font-medium text-xs">{card.type}</h1>
                  </div>

                  <div>
                    <h1 className=" text-sm text-[#888888]">Start from</h1>
                    <h1 className=" text-sm font-light">
                      <span className=" font-extrabold text-xl">
                        {card.discountPrice.split(" ")[0]}
                      </span>{" "}
                      {card.discountPrice.split(" ")[1]}{" "}
                      {card.discountPrice.split(" ")[2]}
                    </h1>
                    <h1 className=" text-sm line-through text-[#888888]">
                      {card.realPrice.split(" ")[0]}{" "}
                      {card.realPrice.split(" ")[1]}{" "}
                      {card.realPrice.split(" ")[2]}
                    </h1>
                  </div>

                  <button className=" px-5 py-1 font-bold bg-[#1B5F96] text-base rounded-md">
                    Order
                  </button>

                  <p className=" w-full text-left text-xs text-gray-400">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
};

export default PricingCard;

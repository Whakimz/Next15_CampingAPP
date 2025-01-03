/* eslint-disable @next/next/no-img-element */
"use client";
import { LandmarksCardProps } from "../../../utils/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import OtherInfo from "./OtherInfo";

const Hero = ({ landmarks }: { landmarks: LandmarksCardProps[] }) => {
  return (
    <div className="hero-container mt-8">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 2000, // 3 seconds delay
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {landmarks.map((landmark, index) => (
          <SwiperSlide className="group" key={landmark.image}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                className="w-full h-[600px] object-cover brightness-75 hover:brightness-50 transition-all duration-300"
                src={landmark.image}
                alt={landmark.name || `Landmark ${index}`}
              />
              <div className="absolute bottom-0 left-0 z-50">
                <div className="col-span-4 mb-4 flex h-full flex-1 justify-end px-5 md:mb-4 md:justify-end md:px-10">
                  <OtherInfo landmark={landmark} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div
          className="swiper-pagination"
          style={{
            position: "absolute",
            bottom: "20px", // Adjust bottom positioning as needed
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "10",
          }}
        ></div>

        {/* Navigation Buttons */}
        <div
          className="swiper-button-next"
          style={{
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 0.8)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        ></div>
        <div
          className="swiper-button-prev"
          style={{
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 0.8)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        ></div>
      </Swiper>
    </div>
  );
};

export default Hero;

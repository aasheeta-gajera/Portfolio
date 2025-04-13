// @flow strict

import { BsPersonWorkspace } from "react-icons/bs";
import Image from "next/image";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  const singleExperience = {
    title: "Flutter",
    company: "CFSYS Infotech",
    duration: "Jan 2024 - Aug - 2024",
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie Animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Single Experience Card Centered + Taller */}
          <div className="flex justify-center items-center min-h-[400px]"> {/* 👈 Centered & taller */}
            <GlowCard identifier="experience-single">
              <div className="p-3 relative min-h-[300px] flex flex-col justify-center"> {/* 👈 Card height */}
                <Image
                  src="/blur-23.svg"
                  alt="Blur Effect"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="flex justify-center">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">{singleExperience.duration}</p>
                </div>
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {singleExperience.title}
                    </p>
                    <p className="text-sm sm:text-base">{singleExperience.company}</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

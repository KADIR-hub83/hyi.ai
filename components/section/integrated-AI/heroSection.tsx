import React from "react";
import Image, { StaticImageData } from "next/image";
// import Header from "@/components/section/general/header";
import CustomButton from "@/components/shared/customButton";
import CustomLabel from "@/components/shared/customLabel";
import CustomWrapper from "@/components/shared/CoustomWrapper";
import StarsIcon from "@/assets/integratedAIPage/icons/Stars.svg";
import Link from "next/link";
import heroImage_01 from "@/assets/integratedAIPage/images/heroImage-01.png";
import Navbar from "@/components/Navbar";

interface HeroSectionProps {
  label?: string;
  labelIcon?: StaticImageData | string;
  titleText: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  imageTop?: StaticImageData | string;
  imageBottom: StaticImageData | string;
  imageBottomCSS?: string;
}

export default function HeroSection({
  label = " Our AI integration just landed",
  labelIcon = StarsIcon,
  titleText,
  buttonText = "Talk To Our Expert",
  onButtonClick,
  // imageTop = heroImage_01,
  imageBottom,
  imageBottomCSS = "",
}: HeroSectionProps) {
  return (
    <section>
     <Navbar/>
      <CustomWrapper padding="px-4 pt-6 md:px-6 md:pt-6 lg:pt-8">
        <div className="flex flex-col gap-6 md:gap-8 pt-16">
          <div className="flex flex-col items-center justify-center gap-5">
            <CustomLabel icon={labelIcon}>{label}</CustomLabel>
            <h1 className="text-3xl font-bold flex flex-col text-center flex-1 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              {titleText[0]} <span>{titleText[1]}</span>
            </h1>

    
          </div>
          <div className="w-full">
            {/* <Image src={imageTop} alt="Hero Image" className="z-5" />
            <div className="relative isolate inline-block group">
              <div
                className={`absolute inset-0 -z-1 backdrop-blur-sm ${imageBottomCSS}`}
              />
              <div>
                <Image
                  src={imageBottom}
                  alt="Hero Image"
                  className={`z-10 block cursor-pointer ${imageBottomCSS}`}
                />
              </div>
              <div
                className={`hidden md:flex absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/70 to-black/100 opacity-100 scale-100 transition-all duration-500 ease-in-out rounded-2xl group-hover:opacity-0 group-hover:scale-105 pointer-events-none ${imageBottomCSS}`}
              />
            </div> */}
            <div className="relative isolate inline-block group">
              <div
                className={`absolute inset-0 -z-1 backdrop-blur-sm ${imageBottomCSS}`}
              />
              <div>
                <Image
                  src={imageBottom}
                  alt="Hero Image"
                  className={`z-10 block ${imageBottomCSS}`}
                />
              </div>
              <div
                className={`hidden md:flex absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/70 to-black/100 opacity-100 scale-100 transition-all duration-500 ease-in-out rounded-2xl group-hover:opacity-0 group-hover:scale-105 pointer-events-none ${imageBottomCSS}`}
              />
            </div>
          </div>
        </div>
      </CustomWrapper>
    </section>
  );
}

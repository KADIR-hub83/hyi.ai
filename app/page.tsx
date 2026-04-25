"use client";

import AetherFlowHero from "@/components/ui/main-home-page/aether-flow-hero";
import Navbar from "../components/Navbar";
import Mainhome from "./home/page";
import { FinancialHero } from "../components/ui/main-home-page/content-section";
import Demo from "@/components/ui/unfoldpage/scrollvideo-image";
import ConnectWithDevelopers from "@/components/section/landingPage/connectWithDevelopers";
import { connectWithDeveloperData } from "@/components/data/landingPage";
import Technologies from "@/components/section/general/technologies";
import SecondSection from "@/components/section/landingPage/secondSection";
import ThirdSection from "@/components/section/landingPage/thirdSection";
import Footer from "@/components/Footer";
import DemoOne from "@/components/ui/demo";
import Robotics from "@/components/section/landingPage/robotics";


// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   NavbarLogo,
//   NavbarButton,
// } from "@/app/components/ui/resizable-navbar";

export default function Home() {
  return (
    <div className="bg-black text-white ">

      {/* <Navbar /> */}
            {/* ✅ NAVBAR ADD */}
      {/* <Navbar>
        <NavBody>
          <NavbarLogo />

          <NavItems items={[
            { name: "Home", link: "#" },
            { name: "Services", link: "#" },
            { name: "About", link: "#" },
            { name: "Contact", link: "#" },
          ]} />

          <NavbarButton href="#">
            Get Started
          </NavbarButton>
        </NavBody>
      </Navbar> */}
    
        <Navbar />
  
      <AetherFlowHero />
        

           <div className="w-full flex flex-col items-center gap-8 xl:px-20 px-5 py-12">
              <div className="w-full flex flex-col text-center gap-1.5 lg:w-[55%]">
                <h2 className="hyi-h2">{connectWithDeveloperData.heading}</h2>
                <p className="hyi-p">{connectWithDeveloperData.paragraph}</p>
              </div>
              <ConnectWithDevelopers />
            </div>
             <SecondSection />
        
    
   
      {/* HERO SECTION */}
      {/* <section className="text-center mt-32 px-6">
        <h1 className="text-6xl font-bold leading-tight">
          Intelligent Automation for <br /> Modern Businesses
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          AI, Robotics & Cloud Solutions to transform your business operations.
        </p>
      </section> */}
     <Robotics/>
      <Mainhome/>
       {/* <DemoOne /> */}
       <ThirdSection />
  

     
            <Technologies />
  
    
      
   <Footer/>
    </div>
  );
}
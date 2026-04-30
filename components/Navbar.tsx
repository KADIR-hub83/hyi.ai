"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* ================= Scroll Detect ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Dropdown Logic ================= */
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(null);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(false);
    setOpenMenu(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const items = [
    { name: "KPI & KRA", link: "/integrate-AI/KPI&KRA" },
    { name: "Price Tracking", link: "/integrate-AI/price-tracking" },
    { name: "Project Tracking", link: "/integrate-AI/project-tracking" },
    { name: "Talent Matching", link: "/integrate-AI/talent-matching" },
    { name: "Strategy", link: "/integrate-AI/strategy&planning" },
  ];

  const aiCloudeItems = [
    { name: " Cloud Platform", link: "/ai-cloud/Agent-Cloud-Platform" },
    { name: " Hosting Platform", link: "/ai-cloud/Hosting-Platform" },
    {
      name: " Workflow Automation Cloud",
      link: "/ai-cloud/Workflow-Automation-Cloud",
    },
    { name: " Automation Platform", link: "/ai-cloud/Automation-Platform" },
    { name: "API Marketplace", link: "/ai-cloud/API-Marketplace" },
    { name: " Training Cloud", link: "/ai-cloud/Training-Cloud" },
    {
      name: " Video Generation Cloud",
      link: "/ai-cloud/Video-Generation-Cloud",
    },
    { name: " Data Analytics Cloud", link: "/ai-cloud/Data-Analytics-Cloud" },
    {
      name: " Document Processing Cloud",
      link: "/ai-cloud/Document-Processing-Cloud",
    },
    {
      name: " Customer Support Cloud",
      link: "/ai-cloud/Customer-Support-Cloud",
    },
    {
      name: " Image Generation Cloud",
      link: "/ai-cloud/Image-Generation-Cloud",
    },
  ];

  const solutionItems = [
  {
    name: "Technology Solutions",
    link: "/solutions/Technology-Solutions",
  },
  {
    name: "Talent Solutions",
    link: "/solutions/Talent-Solutions",
  },
  {
    name: "Cloud Infrastructure",
    link: "/solutions/Cloud-Infrastructure",
  },
  {
    name: "Cybersecurity",
    link: "/solutions/Cybersecurity",
  },
  {
    name: "Finance & Risk Management",
    link: "/solutions/Finance-&-Risk-Management",
  },
  {
    name: "Artificial Intelligence",
    link: "/solutions/Artificial-Intelligence",
  },
  {
    name: "Data Analytics",
    link: "/solutions/Data-Analytics",
  },
];

const resourceItems = [

  { name: "About HYI", link: "/about" },
  { name: "Career", link: "/career" },
  { name: "Help", link: "/help" },
  // { name: "Blogs", link: "/blogs" },
  { name: "Media", link: "/media" },
  { name: "Investor", link: "/investor" },
];


  return (
<nav
  className={`
    ${
      mobileMenu
        ? "fixed top-0 left-0 bg-black"
        : scrolled
        ? "fixed top-0 left-0 bg-black shadow-xl backdrop-blur-md"
        : "absolute top-0 left-0 bg-transparent"
    }
    w-full z-[999] text-white px-6 xl:px-20 pt-3 pb-2
    flex justify-between items-center
    transition-all duration-500
  `}
>
      {/* LOGO */}
      <Link href="/">
        <img src="/logo.svg" className="w-[80px]" />
      </Link>

      {/* ================= DESKTOP ================= */}
     
     <div className="hidden xl:flex gap-5 items-center">
     <div
  onMouseEnter={() => handleEnter("solutions")}
  onMouseLeave={handleLeave}
  className="relative"
>
  <button className="flex items-center gap-[0.5] transition font-light text-gray-200 cursor-pointer text-[15px]">
    Our Solutions

    <svg
      className={`w-3 h-3 ml-1 transition-transform duration-300 ${
        openMenu === "solutions" ? "rotate-180" : ""
      }`}
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

  {openMenu === "solutions" && (
    <div className="absolute top-12 -right-120 w-[800px] bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-xl animate-fadeIn">

      <h2 className="text-gray-400 mb-4">
        Our Solutions
      </h2>

      <div className="grid grid-cols-3 gap-2 text-sm">
        {solutionItems.map((item) => (
          <Link href={item.link} key={item.name}>
            <div className="cursor-pointer hover:bg-white/10 hover:border-gray-600 rounded-lg transition p-2">

              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-400">
                Smart solution for {item.name}
              </p>

            </div>
          </Link>
        ))}
      </div>

    </div>
  )}
</div>


        {/* INTEGRATE AI */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <button className="flex items-center gap-[0.5]  transition font-light text-gray-200 cursor-pointer text-[15px]">
            Integrate AI
            <svg
              className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* MEGA MENU */}
          {open && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute top-12 -right-70 w-[600px] z-50 bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-xl animate-fadeIn"
            >
              <h2 className="text-lg font-semibold mb-4">AI Integration</h2>

              <p className="text-gray-400 text-sm mb-6">
                Seamlessly embed artificial intelligence into workflows.
              </p>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {items.map((item) => (
                  <Link href={item.link} key={item.name}>
                    <div className="cursor-pointer hover:bg-white/10  hover:border-gray-600 rounded-lg transition p-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-400">
                        AI powered solution for {item.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* AI CLOUD */}
        <div
          onMouseEnter={() => handleEnter("cloud")}
          onMouseLeave={handleLeave}
          className="relative"
        >
          <button className="flex items-center gap-[0.5]  transition font-light text-gray-200 cursor-pointer text-[15px]">
            AI Cloud
            <svg
              className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                openMenu === "cloud" ? "rotate-180" : ""
              }`}
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openMenu === "cloud" && (
            <div className="absolute top-12 -right-70 w-[800px] bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-xl animate-fadeIn">
              <h2 className="text-gray-400 mb-4">AI Cloud Platform</h2>

              <div className="grid grid-cols-3 gap-2 text-sm">
                {aiCloudeItems.map((item) => (
                  <Link href={item.link} key={item.name}>
                    <div className="cursor-pointer hover:bg-white/10  hover:border-gray-600 rounded-lg transition p-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-400">
                        AI powered solution for {item.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ROBOTICS */}

        <div
          onMouseEnter={() => handleEnter("robot")}
          onMouseLeave={handleLeave}
          className="relative"
        >
          <button className="flex items-center gap-[0.5]  transition font-light text-gray-200 cursor-pointer text-[15px]">
            Robotics
            <svg
              className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                openMenu === "robot" ? "rotate-180" : ""
              }`}
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openMenu === "robot" && (
            <div className="absolute top-12 -right-60 w-[750px] bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-xl animate-fadeIn">
              <h2 className="text-gray-400 mb-4">Robotics Solutions</h2>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {/* Core Robots */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white pl-2">Core Robots</h3>

                  <div className="space-y-2">
                    <Link href="/robotics/Warehouse-Automation-Robot">
                      <div className="hover:bg-white/10 p-2 rounded-lg transition cursor-pointer">
                        <h4 className="font-medium">
                          Warehouse Automation Robot (AMR)
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Smart robots for warehouse automation and logistics
                          handling
                        </p>
                      </div>
                    </Link>

                    <Link href="/robotics/Security-Patrol-Robot">
                      <div className="hover:bg-white/10 p-2 rounded-lg transition cursor-pointer">
                        <h4 className="font-medium">Security Patrol Robot</h4>
                        <p className="text-gray-400 text-xs">
                          AI-powered robots for surveillance and security
                          monitoring
                        </p>
                      </div>
                    </Link>

                    <Link href="/robotics/Industrial-Robot-Arms">
                      <div className="hover:bg-white/10 p-2 rounded-lg transition cursor-pointer">
                        <h4 className="font-medium">Industrial Robot Arms</h4>
                        <p className="text-gray-400 text-xs">
                          High-precision robotic arms for industrial automation
                        </p>
                      </div>
                    </Link>

                    <Link href="/robotics/Cleaning-Robots">
                      <div className="hover:bg-white/10 p-2 rounded-lg transition cursor-pointer">
                        <h4 className="font-medium">Cleaning Robots</h4>
                        <p className="text-gray-400 text-xs">
                          Autonomous cleaning robots for commercial and
                          industrial use
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Delivery Robots */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white pl-2">
                    Delivery Robots
                  </h3>

                  <div className="space-y-2">
                    <Link href="/robotics/Hospital-Delivery-Robot">
                      <div className="hover:bg-white/10 p-2 rounded-lg transition cursor-pointer">
                        <h4 className="font-medium">Hospital Delivery Robot</h4>
                        <p className="text-gray-400 text-xs">
                          Contactless delivery for medicines and hospital
                          supplies
                        </p>
                      </div>
                    </Link>

                    <Link href="/robotics/Hotel-Delivery-Robot">
                      <div className="hover:bg-white/10 p-2 rounded-lg transition cursor-pointer">
                        <h4 className="font-medium">Hotel Delivery Robot</h4>
                        <p className="text-gray-400 text-xs">
                          Smart room service robots for hotels and hospitality
                        </p>
                      </div>
                    </Link>

                    <Link href="/robotics/Restaurant-Waiter-Robot">
                      <div className="hover:bg-white/10 p-2 rounded-lg transition cursor-pointer">
                        <h4 className="font-medium">Restaurant Waiter Robot</h4>
                        <p className="text-gray-400 text-xs">
                          Automated food serving robots for restaurants
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
   




<div
  onMouseEnter={() => handleEnter("rnd")}
  onMouseLeave={handleLeave}
  className="relative"
>
  <button className="flex items-center gap-[0.5] transition font-light text-gray-200 cursor-pointer text-[15px]">
    Research & Development

    <svg
      className={`w-3 h-3 ml-1 transition-transform duration-300 ${
        openMenu === "rnd" ? "rotate-180" : ""
      }`}
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

  {openMenu === "rnd" && (
    <div className="absolute top-12 -right-40 w-[620px] bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-2xl animate-fadeIn backdrop-blur-xl">

      <h2 className="text-gray-400 mb-4">
        Autopilot Systems
      </h2>

      <div className="grid grid-cols-2 gap-2 text-sm">

        {[
          {
            name: "Flight Autopilot",
            desc: "Smart autopilot for aircraft systems",
            link: "/autopilot/Flight-Autopilot",
          },
          {
            name: "Car Autopilot",
            desc: "AI self-driving assistance system",
            link: "/autopilot/Car-Autopilot",
          },
          {
            name: "Bus Autopilot",
            desc: "Public transport autonomous control",
            link: "/autopilot/Bus-Autopilot",
          },
          {
            name: "Drone Autopilot",
            desc: "Autonomous drone navigation system",
            link: "/autopilot/Drone-Autopilot",
          },
 
        ].map((item) => (
          <Link href={item.link} key={item.name}>
            <div className="cursor-pointer hover:bg-white/10 hover:border-gray-600 rounded-lg transition p-3 border border-transparent">

              <h3 className="font-semibold text-white">
                {item.name}
              </h3>

              <p className="text-gray-400 mt-1 leading-6">
                {item.desc}
              </p>

            </div>
          </Link>
        ))}

      </div>

    </div>
  )}
</div>

        {/* <div
          onMouseEnter={() => handleEnter("gcc")}
          onMouseLeave={handleLeave}
          className="relative"
        >
          <button className="flex items-center gap-1  transition font-light text-gray-200">
            HYI GCC
            <svg
              className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                openMenu === "gcc" ? "rotate-180" : ""
              }`}
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openMenu === "gcc" && (
            <div className="absolute top-12 -right-50 w-[750px] bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 shadow-xl backdrop-blur-lg">
            
              <h2 className="text-lg mb-2 ">HYI GCC</h2>
              <p className="text-gray-400 text-sm mb-6">
                Global Capability Centre – End-to-End Enterprise Services &
                Talent Solutions
              </p>

              <div className="grid grid-cols-2 gap-6">
              
                <div className="space-y-2">
                  <p className="hover:text-purple-400 cursor-pointer">
                    Technology & Digital Services
                  </p>
                  <p className="hover:text-purple-400 cursor-pointer">
                    Business Process Services (BPS)
                  </p>
                  <p className="hover:text-purple-400 cursor-pointer">
                    Legal, Compliance & E-Governance
                  </p>
                  <p className="hover:text-purple-400 cursor-pointer">
                    Entity Setup & Expansion Support
                  </p>
                </div>

               
                <div className="space-y-2">
                  <p className="hover:text-purple-400 cursor-pointer">
                    Payroll, HR Ops & Employee Lifecycle
                  </p>

                  <div>
                    <p className="hover:text-purple-400 cursor-pointer">
                      GCC Talent Pool
                    </p>
                    <p className="text-gray-400 text-xs">
                      Scalable, Skilled, Agile Workforce
                    </p>
                  </div>

                  <div>
                    <p className="hover:text-purple-400 cursor-pointer">
                      Bot GCC Model
                    </p>
                    <p className="text-gray-400 text-xs">
                      Automation-Led Operating Framework
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div> */}
        <div className="relative">
  <button
    onClick={() => (window.location.href = "/gcc")}
    className="flex items-center gap-1 transition font-light text-gray-200 hover:text-purple-400 cursor-pointer text-[15px]"
  >
    HYI GCC
  </button>
</div>
      
<div
  onMouseEnter={() => handleEnter("resources")}
  onMouseLeave={handleLeave}
  className="relative"
>
  <button className="flex items-center gap-[0.5] text-[15px] transition font-light text-gray-200 hover:text-purple-400 cursor-pointer">
    Resources

    <svg
      className={`w-3 h-3 ml-1 transition-transform duration-300 ${
        openMenu === "resources" ? "rotate-180" : ""
      }`}
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

  {openMenu === "resources" && (
    <div className="absolute top-12 right-0 w-[550px] z-50 bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 shadow-xl animate-fadeIn">

      <h2 className="text-lg font-semibold mb-3">Resources</h2>

      <p className="text-gray-400 text-sm mb-4">
        Explore company insights, support, careers & updates.
      </p>

      <div className="grid grid-cols-3 gap-2 text-sm">
        {resourceItems.map((item) => (
          <Link href={item.link} key={item.name}>
            <div className="cursor-pointer hover:bg-white/10 hover:border-gray-600 rounded-lg transition p-3">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-400 text-xs">
                Learn more about {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )}
</div>
      </div>

      {/* ================= MOBILE ================= */}
   {/* ================= MOBILE ================= */}
<button
  onClick={() => setMobileMenu(!mobileMenu)}
  className="xl:hidden text-3xl"
>
  ☰
</button>

<div
  className={`fixed top-0 right-0 h-full w-[320px] bg-black p-6 z-[9999] overflow-y-auto transform ${
    mobileMenu ? "translate-x-0" : "translate-x-full"
  } transition duration-300`}
>
  <button
    onClick={() => setMobileMenu(false)}
    className="text-2xl mb-6"
  >
    ✕
  </button>

  {/* HOME */}
  <Link
    href="/"
    onClick={() => setMobileMenu(false)}
    className="block py-3 border-b border-white/10"
  >
    Home
  </Link>

  {/* SOLUTIONS */}
  <div className="mt-2">
    <button
      onClick={() =>
        setMobileDropdown(
          mobileDropdown === "solutions" ? null : "solutions"
        )
      }
      className="flex justify-between w-full py-3 border-b border-white/10"
    >
      Our Solutions ▾
    </button>

    <div
      className={`overflow-hidden transition-all ${
        mobileDropdown === "solutions"
          ? "max-h-[500px] mt-2"
          : "max-h-0"
      }`}
    >
      {solutionItems.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={() => setMobileMenu(false)}
          className="block text-sm text-gray-400 py-2 pl-3"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

  {/* INTEGRATE AI */}
  <div className="mt-2">
    <button
      onClick={() =>
        setMobileDropdown(mobileDropdown === "ai" ? null : "ai")
      }
      className="flex justify-between w-full py-3 border-b border-white/10"
    >
      Integrate AI ▾
    </button>

    <div
      className={`overflow-hidden transition-all ${
        mobileDropdown === "ai" ? "max-h-[500px] mt-2" : "max-h-0"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={() => setMobileMenu(false)}
          className="block text-sm text-gray-400 py-2 pl-3"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

  {/* AI CLOUD */}
  <div className="mt-2">
    <button
      onClick={() =>
        setMobileDropdown(
          mobileDropdown === "cloud" ? null : "cloud"
        )
      }
      className="flex justify-between w-full py-3 border-b border-white/10"
    >
      AI Cloud ▾
    </button>

    <div
      className={`overflow-hidden transition-all ${
        mobileDropdown === "cloud"
          ? "max-h-[600px] mt-2"
          : "max-h-0"
      }`}
    >
      {aiCloudeItems.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={() => setMobileMenu(false)}
          className="block text-sm text-gray-400 py-2 pl-3"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

  {/* ROBOTICS */}
  <div className="mt-2">
    <button
      onClick={() =>
        setMobileDropdown(
          mobileDropdown === "robot" ? null : "robot"
        )
      }
      className="flex justify-between w-full py-3 border-b border-white/10"
    >
      Robotics ▾
    </button>

    <div
      className={`overflow-hidden transition-all ${
        mobileDropdown === "robot"
          ? "max-h-[600px] mt-2"
          : "max-h-0"
      }`}
    >
      {[
        {
          name: "Warehouse Automation Robot",
          link: "/robotics/Warehouse-Automation-Robot",
        },
        {
          name: "Security Patrol Robot",
          link: "/robotics/Security-Patrol-Robot",
        },
        {
          name: "Industrial Robot Arms",
          link: "/robotics/Industrial-Robot-Arms",
        },
        {
          name: "Cleaning Robots",
          link: "/robotics/Cleaning-Robots",
        },
        {
          name: "Hospital Delivery Robot",
          link: "/robotics/Hospital-Delivery-Robot",
        },
        {
          name: "Hotel Delivery Robot",
          link: "/robotics/Hotel-Delivery-Robot",
        },
        {
          name: "Restaurant Waiter Robot",
          link: "/robotics/Restaurant-Waiter-Robot",
        },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={() => setMobileMenu(false)}
          className="block text-sm text-gray-400 py-2 pl-3"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

  {/* AUTOPILOT */}
  <div className="mt-2">
    <button
      onClick={() =>
        setMobileDropdown(
          mobileDropdown === "rnd" ? null : "rnd"
        )
      }
      className="flex justify-between w-full py-3 border-b border-white/10"
    >
      Research & Development ▾
    </button>

    <div
      className={`overflow-hidden transition-all ${
        mobileDropdown === "rnd"
          ? "max-h-[500px] mt-2"
          : "max-h-0"
      }`}
    >
      {[
        {
          name: "Flight Autopilot",
          link: "/autopilot/Flight-Autopilot",
        },
        {
          name: "Car Autopilot",
          link: "/autopilot/Car-Autopilot",
        },
        {
          name: "Bus Autopilot",
          link: "/autopilot/Bus-Autopilot",
        },
        {
          name: "Drone Autopilot",
          link: "/autopilot/Drone-Autopilot",
        },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={() => setMobileMenu(false)}
          className="block text-sm text-gray-400 py-2 pl-3"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

  {/* GCC */}
  <Link
    href="/gcc"
    onClick={() => setMobileMenu(false)}
    className="block py-3 border-b border-white/10"
  >
    HYI GCC
  </Link>

  {/* RESOURCES */}
  <div className="mt-2">
    <button
      onClick={() =>
        setMobileDropdown(
          mobileDropdown === "resources"
            ? null
            : "resources"
        )
      }
      className="flex justify-between w-full py-3 border-b border-white/10"
    >
      Resources ▾
    </button>

    <div
      className={`overflow-hidden transition-all ${
        mobileDropdown === "resources"
          ? "max-h-[500px] mt-2"
          : "max-h-0"
      }`}
    >
      {resourceItems.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={() => setMobileMenu(false)}
          className="block text-sm text-gray-400 py-2 pl-3"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
</div>
    </nav>
  );
}

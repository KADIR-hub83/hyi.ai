// app/components/Footer.tsx
"use client";

import Link from "next/link";
import {
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    {
      title: "Our Solutions",
      links: [
       { name: "Technology Solutions", href: "/solutions/Technology-Solutions" },
        { name: "Talent Solutions", href: "/solutions/Talent-Solutions" },
        { name: "Cloud Infrastructure", href: "/solutions/Cloud-Infrastructure" },
        { name: "Cybersecurity", href: "/solutions/Cybersecurity" },
        { name: "Finance & Risk Management", href: "/solutions/Finance-&-Risk-Management" },
        { name: "Artificial Intelligence", href: "/solutions/Artificial-Intelligence" },
        { name: "Data Analytics", href: "/solutions/Data-Analytics" },
      ],
    },
{
  title: "Integrate AI",
  links: [
    { name: "KPI & KRA", href: "/integrate-AI/KPI&KRA" },
    { name: "Project Tracking", href: "/integrate-AI/project-tracking" },
    { name: "Price Tracking", href: "/integrate-AI/price-tracking" },
    { name: "Talent Matching", href: "/integrate-AI/talent-matching" },
    { name: "Strategy & Planning", href: "/integrate-AI/strategy&planning" },
  ],
},
{
  title: "AI Cloud",
  links: [
    { name: "Cloud Platform", href: "/ai-cloud/Agent-Cloud-Platform" },
    { name: "Hosting Platform", href: "/ai-cloud/Hosting-Platform" },
    { name: "Workflow Automation", href: "/ai-cloud/Workflow-Automation-Cloud" },
    { name: "Automation Cloud", href: "/ai-cloud/Automation-Platform" },
    { name: "API Marketplace", href: "/ai-cloud/API-Marketplace" },
    { name: "Training Cloud", href: "/ai-cloud/Training-Cloud" },
    { name: "Video Generation Cloud", href: "/ai-cloud/Video-Generation-Cloud" },
    { name: "Data Analytics Cloud", href: "/ai-cloud/Data-Analytics-Cloud" },
    { name: "Document Processing Cloud", href: "/ai-cloud/Document-Processing-Cloud" },
    { name: "Customer Support Cloud", href: "/ai-cloud/Customer-Support-Cloud" },
    { name: "Image Generation Cloud", href: "/ai-cloud/Image-Generation-Cloud" },
  ],
},
    {
      title: "Robotics",
      links: [
        { name: "Warehouse Automation Robot (AMR)", href: "/robotics/Warehouse-Automation-Robot" },
        { name: "Security Patrol Robot", href: "/robotics/Security-Patrol-Robot" },
        { name: "Industrial Robot Arms", href: "/robotics/Industrial-Robot-Arms" },
        { name: "Cleaning Robots", href: "/robotics/Cleaning-Robots" },
        { name: "Hospital Delivery Robot", href: "/robotics/Hospital-Delivery-Robot" },
        { name: "Hotel Delivery Robot", href: "/robotics/Hotel-Delivery-Robot" },
        { name: "Restaurant Waiter Robot", href: "/robotics/Restaurant-Waiter-Robot" },
      ],
    },
    {
      title: "Resources",
      links: [
       { name: "About HYI", href: "/about" },
        { name: "Career", href: "/career" },
        { name: "Help", href: "/help" },
        // { name: "Blogs", href: "/blogs" },
        { name: "Media", href: "/media" },
        { name: "Investor", href: "/investor" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { name: "Terms and Conditions", href: "/documents/terms&conditions" },
        { name: "Privacy Policy", href: "/documents/privacy-policy" },
        { name: "Brand Policy", href: "/documents/brand-policy" },
        { name: "Cookies Policy", href: "/documents/cookies-policy" },
        { name: "IPR Policy", href: "/documents/ipr-policy" },
        { name: "Payout Settlement Policy", href: "/documents/payment-policy" },
        { name: "Cancellation Policy", href: "/documents/cancellation-policy" },
        { name: "Refund Policy", href: "/documents/refund-policy" },
        { name: "Escalation Policy", href: "/documents/escalation-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-20 py-14">
        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-base font-semibold mb-6">{section.title}</h3>

              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === "string" ? (
                      <span className="text-gray-300 hover:text-white hover:font-bold cursor-pointer transition text-[14px] ">
                        {link}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition text-[14px] hover:font-bold"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/logo.svg" alt="Logo" />

          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} HYI.AI All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-2xl text-gray-300">
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
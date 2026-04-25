"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Amazon from "@/assets/common/FloatableIcons/amazon.png";
import Airtable from "@/assets/common/FloatableIcons/airtable.png";
import Calendly from "@/assets/common/FloatableIcons/calendly.png";
import ClickUp from "@/assets/common/FloatableIcons/clickUp.png";
import Feedback from "@/assets/common/FloatableIcons/feedback.png";
import Google from "@/assets/common/FloatableIcons/google.png";
import JobCategoryCard from "./job-category-card";

export default function TalentSolutions() {
  const browseBy = "by Job Category";

  const sampleAvatars = [
    { src: "https://i.pravatar.cc/150?img=1" },
    { src: "https://i.pravatar.cc/150?img=2" },
    { src: "https://i.pravatar.cc/150?img=3" },
    { src: "https://i.pravatar.cc/150?img=4" },
  ];

  const jobs = [
    {
      title: "Developer",
      blurb: "Join our team of innovative developers!",
      iconSrc: Amazon,
      isFeatured: true,
    },
    {
      title: "Designers",
      blurb: "Become a part of our creative design team!",
      iconSrc: Airtable,
    },
    {
      title: "Team Leads",
      blurb: "Lead high-performing global teams.",
      iconSrc: Calendly,
    },
    {
      title: "Software Architect",
      blurb: "Design scalable enterprise systems.",
      iconSrc: ClickUp,
    },
    {
      title: "Project Manager",
      blurb: "Manage products and delivery pipeline.",
      iconSrc: Feedback,
    },
    {
      title: "Analysts",
      blurb: "Drive decisions using data insights.",
      iconSrc: Google,
    },
  ];

  const steps = [
    {
      title: "Register your account",
      desc: "Submit your personal details to register your account.",
    },
    {
      title: "Complete your profile",
      desc: "Upload resume, skills, and experience details.",
    },
    {
      title: "Pass assessments",
      desc: "Qualify interviews and skill tests to get verified.",
    },
    {
      title: "Get hired",
      desc: "Receive offers and start working with global teams.",
    },
  ];

  const features = [
    {
      title: "Talent Support",
      desc: "Get assistance, resources, and expert guidance anytime.",
    },
    {
      title: "Careers at HYI.AI",
      desc: "Join our remote team and build global products.",
    },
    {
      title: "Payout Support",
      desc: "Get secure payments and billing support worldwide.",
    },
    {
      title: "Grievance Reporting",
      desc: "Raise issues directly with our compliance team.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-start flex gap-8 justify-center items-center">
        <div>
     <p className="inline-flex items-center px-5 py-2 mb-4 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 via-purple-600/20 to-transparent backdrop-blur-md text-purple-400 text-sm font-semibold tracking-wide shadow-lg shadow-purple-500/10">
  Talent Solutions
</p>

        <h1 className="text-5xl md:text-5xl  leading-tight font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Hire & Grow <span className="text-purple-500">Succeed.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
          Connect with top remote developers, designers, managers, and AI
          professionals from around the world.
        </p>
       </div>
       <div>
        <img src="/rb-sec-2.png" alt="" className="rounded-2xl" />
       </div>
  
      </section>

      {/* HOW TO GET HIRED */}
      <section className="max-w-7xl mx-auto px-6 ">
        <div
          className="border border-gray-800 rounded-3xl p-10 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/bg-talent.svg')", left:2, position:"relative" }}
        >
          <h2 className="text-4xl  text-center font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            How to get hired at HYI.AI
          </h2>

          <p className="text-gray-400 text-center mt-4">
            Learn strategies to land your next role with confidence.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            <img
              src="/rb-sec-1.png"
              alt="Resume Preview"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="space-y-6">
              {steps.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOB CATEGORY */}
      <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Browse {browseBy}</h2>

          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            Explore opportunities across development, design, management, and
            analytics roles.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <JobCategoryCard
              key={i}
              title={job.title}
              blurb={job.blurb}
              iconSrc={job.iconSrc}
              avatars={sampleAvatars}
              extraCount={99}
              isFeatured={job.isFeatured}
              href="https://va.hyi.ai/talent-signup"
            />
          ))}
        </div>
      </section>

      {/* WORK MODEL */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="border border-gray-800 rounded-3xl p-10">
          <h2 className="text-4xl font-bold">
            Join a network of elite professionals
          </h2>

          <p className="text-gray-400 mt-4 max-w-4xl">
            Work on high-impact global projects with flexible hourly contracts
            or secure full-time opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-14 mt-14">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Work by the Hour</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Flexible part-time projects</li>
                <li>• Get paid hourly or project-based</li>
                <li>• Hassle-free contracts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Join Us Full-Time
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Secure full-time jobs with top companies</li>
                <li>• Direct access to hiring managers</li>
                <li>• Competitive salaries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <h2 className="text-4xl font-bold text-center">
          Get Help With HYI.AI
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-purple-900/30 bg-[#0c0c0c] p-8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold">
          Ready to accelerate your career?
        </h2>

        <p className="text-gray-400 mt-5 text-lg">
          Join HYI.AI today and access premium remote opportunities.
        </p>

        <button className="mt-8 px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
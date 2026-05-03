"use client"

import React from "react";
import CustomUserCard from "@/components/shared/customUserCard";
import CustomSwiper from "@/components/shared/customSlider";


export default function HeroUserSlider() {
  const data = [
    {
      userId: "1",
      profilePicture: "/images.jpeg",
      fullName: "John Carter",
      designation: "AI Cloud Engineer",
      talentId: "101",
      slug: "john-carter",
    },
    {
      userId: "2",
      profilePicture: "/women.png",
      fullName: "Sophia Lee",
      designation: "Virtual Assistant",
      talentId: "102",
      slug: "sophia-lee",
    },
    {
      userId: "3",
      profilePicture: "/men1.png",
      fullName: "David Smith",
      designation: "Robotics Expert",
      talentId: "103",
      slug: "david-smith",
    },
    {
      userId: "4",
      profilePicture: "/men2.png",
      fullName: "Emma Watson",
      designation: "Data Analyst",
      talentId: "104",
      slug: "emma-watson",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="hyi-h2 text-center">
        Verified Global Talents.
      </h1>

      <CustomSwiper
        items={data.map((user) => (
          <CustomUserCard key={user.userId} user={user} />
        ))}
        height="h-[82px]"
      />
    </div>
  );
}
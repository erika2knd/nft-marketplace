"use client";

import creatorsData from "./creatorsData";
import Image from "next/image";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";

export default function RankingTable() {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = [
    { label: "Today", short: "1d" },
    { label: "This Week", short: "7d" },
    { label: "This Month", short: "30d" },
    { label: "All Time", short: "All time" },
  ];

  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-white text-5xl font-bold mb-4">Top Creators</h1>
        <p className="text-white mb-8 text-lg">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>

        <div className="grid grid-cols-4 text-center text-[25px] font-semibold text-[#858584] mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`py-2 transition ${
                activeTab === tab.label ? "text-white border-b-2 border-white" : ""
              }`}
            >
              <span className="block md:hidden">{tab.short}</span>
              <span className="hidden md:block">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 text-[#858584] text-sm border border-[#3B3B3B] rounded-[20px] px-7 py-4 mb-4">
          <span className="col-span-1">#</span>
          <span className="col-span-5">Artist</span>
          <span className="hidden md:block col-span-2 text-center">Change</span>
          <span className="hidden md:block col-span-2 text-center">NFTs Sold</span>
          <span className="col-span-6 md:col-span-2 text-right">Volume</span>
        </div>

        <div className="space-y-4">
          {creatorsData.map((creator, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center bg-[#3B3B3B] rounded-[20px] px-6 py-6"
            >
              <div className="col-span-1">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-white font-mono">
                  {index + 1}
                </span>
              </div>

              <div className="col-span-5 flex items-center gap-4 transition-transform duration-300 hover:scale-95">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-white font-semibold">{creator.name}</span>
              </div>

              <p className="hidden md:block col-span-2 text-green-400 text-center">
                {creator.change}
              </p>

              <p className="hidden md:block col-span-2 text-white text-center">
                {creator.nftsSold}
              </p>

              <p className="col-span-6 md:col-span-2 text-white text-right font-mono">
                {creator.volume}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


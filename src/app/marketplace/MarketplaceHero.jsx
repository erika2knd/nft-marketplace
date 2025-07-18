'use client';
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";

const MarketplaceHero = () => {
  const [activeTab, setActiveTab] = useState("NFTs");
  const tabs = [
    { label: "NFTs", count: 302 },
    { label: "Collections", count: 67 },
  ];

  return (
    <SectionWrapper className="overflow-hidden pt-16 pb-0 bg-[#2B2B2B]">
      <h1 className="text-[38px] lg:text-[51px] font-semibold mb-3">
        Browse Marketplace
      </h1>
      <p className="text-white text-xl mb-8">
        Browse through more than 50k NFTs on the NFT Marketplace.
      </p>

      <div className="w-full mb-10">
        <div className="border border-[#3B3B3B] rounded-[20px] flex items-center px-5 py-4 w-full">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className="bg-transparent text-white placeholder-[#858584] flex-grow outline-none text-base"
          />
          <img
            src="/icons/Search.png"
            alt="Search"
            className="w-5 h-5 ml-3"
          />
        </div>
      </div>

      
        <div className="flex justify-center gap-10 text-[25px] font-semibold text-[#858584]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex items-center gap-3 pb-4 transition ${
                  isActive ? "text-white border-b-2 border-white" : ""
                }`}
              >
                {tab.label}
                <span className="bg-[#3B3B3B] text-sm rounded-full px-3 py-1">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      
      
    </SectionWrapper>
  );
};

export default MarketplaceHero;




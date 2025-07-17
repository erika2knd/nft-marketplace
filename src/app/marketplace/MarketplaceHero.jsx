import SectionWrapper from "@/components/SectionWrapper";

const MarketplaceHero = () => {
  return (
    <SectionWrapper className="pt-16 pb-0 bg-[#2B2B2B]">
      <h1 className="text-[38px] lg:text-[51px] font-semibold mb-3">
        Browse Marketplace
      </h1>
      <p className="text-[#858584] text-lg mb-8">
        Browse through more than 50k NFTs on the NFT Marketplace.
      </p>

   
      <div className="w-full mb-12">
        <div className="bg-[#2B2B2B] border border-[#3B3B3B] rounded-[20px] flex items-center px-5 py-4 w-full">
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

      
     <div className="border-b border-[#3B3B3B]">
  <div className="flex justify-center gap-10 text-base">
    <div className="flex items-center gap-2 text-[#858584] font-semibold pb-4">
      <span>NFTs</span>
      <span className="bg-[#3B3B3B] text-sm rounded-full px-3 py-1">302</span>
    </div>
    <div className="flex items-center gap-2 text-[#858584] font-semibold pb-4">
      <span>Collections</span>
      <span className="bg-[#3B3B3B] text-sm rounded-full px-3 py-1">67</span>
    </div>
  </div>
</div>


    </SectionWrapper>
  );
};

export default MarketplaceHero;


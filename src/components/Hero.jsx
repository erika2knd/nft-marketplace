import FeaturedNFTCard from "./FeaturedNFTCard";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        <div>
          <h1 className="text-[67px] leading-tight font-bold mb-6">
            Discover <br className="hidden md:block" />
            Digital Art & <br className="hidden md:block" />
            Collect NFTs
          </h1>

          <p className="text-[22px] text-grayText mb-10 max-w-lg leading-relaxed capitalize">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
          </p>

          <div className="mb-12">
            <button className="bg-[#A259FF] text-white h-[60px] px-[50px] rounded-[20px] font-semibold flex items-center gap-[12px] shadow-md hover:opacity-90 transition">
              <img src="/icons/RocketLaunch.png" alt="Rocket" className="w-5 h-5" />
              Get Started
            </button>
          </div>

          <div className="flex gap-12 text-center">
            <div>
              <h3 className="text-[28px] font-bold">240k+</h3>
              <p className="text-grayText text-[24px] mt-1">Total Sale</p>
            </div>
            <div>
              <h3 className="text-[28px] font-bold">100k+</h3>
              <p className="text-grayText text-[24px] mt-1">Auctions</p>
            </div>
            <div>
              <h3 className="text-[28px] font-bold">240k+</h3>
              <p className="text-grayText text-[24px] mt-1">Artists</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <FeaturedNFTCard />
        </div>
      </div>
    </SectionWrapper>
  );
}






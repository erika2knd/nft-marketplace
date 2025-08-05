import FeaturedNFTCard from "./FeaturedNFTCard";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

export default function Hero() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-12 md:gap-16 xl:gap-24 ">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="flex flex-col w-full items-start max-w-[700px] mx-auto lg:mx-0">
            <h1 className="text-left font-bold leading-tight mb-6 text-[clamp(32px,5vw,67px)]">
              Discover <br className="hidden md:block" />
              Digital Art & <br className="hidden md:block" />
              Collect NFTs
            </h1>

            <p className="text-left text-grayText leading-relaxed capitalize mb-8 md:mb-10 text-[clamp(16px,2.5vw,22px)] max-w-lg">
              NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
            </p>

            <div className="block lg:hidden w-full max-w-[400px] mx-auto md:max-w-[480px] mb-10 md:mb-12">
              <FeaturedNFTCard />
            </div>

            <div className="w-full max-w-[400px] md:max-w-[480px] mx-auto lg:mx-0 mb-10 md:mb-12 flex justify-center lg:justify-start">
              <Link
                href="/register"
                className="w-full sm:w-auto lg:w-auto bg-[#A259FF] text-white h-[52px] sm:h-[60px] px-6 sm:px-10 lg:px-[50px] rounded-[20px] font-semibold flex items-center justify-center gap-[10px] shadow-md hover:opacity-90 transition">
                <img src="/icons/RocketLaunch.png" alt="Rocket" className="w-5 h-5" />
                Get Started
              </Link>
            </div>

            <div className="grid grid-cols-3 w-full mx-auto gap-4 sm:gap-6 lg:gap-4 xl:gap-6 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="font-bold leading-none text-[20px] sm:text-[24px] lg:text-[28px]">240k+</h3>
                <p className="text-grayText mt-1 text-[14px] sm:text-[16px] lg:text-[20px]">Total Sale</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="font-bold leading-none text-[20px] sm:text-[24px] lg:text-[28px]">100k+</h3>
                <p className="text-grayText mt-1 text-[14px] sm:text-[16px] lg:text-[20px]">Auctions</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="font-bold leading-none text-[20px] sm:text-[24px] lg:text-[28px]">240k+</h3>
                <p className="text-grayText mt-1 text-[14px] sm:text-[16px] lg:text-[20px]">Artists</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="w-full max-w-[420px] xl:max-w-[550px] aspect-[1/1.05]">
            <FeaturedNFTCard />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}














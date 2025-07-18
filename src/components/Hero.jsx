import FeaturedNFTCard from "./FeaturedNFTCard";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

export default function Hero() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-16 md:gap-20">
        {/* Левая часть (всё по порядку) */}
        <div className="flex flex-col items-start">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[67px] leading-tight font-bold mb-6">
            Discover <br className="hidden md:block" />
            Digital Art & <br className="hidden md:block" />
            Collect NFTs
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-grayText mb-8 sm:mb-10 max-w-lg leading-relaxed capitalize">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
          </p>

          {/* Картинка — только на мобилке сверху */}
          <div className="block lg:hidden mb-10 w-full max-w-[400px] mx-auto">
            <FeaturedNFTCard />
          </div>

          {/* Кнопка */}
          <div className="mb-10 sm:mb-12 w-full sm:w-max">
            <Link
              href="/register"
              className="w-full sm:w-max bg-[#A259FF] text-white h-[52px] sm:h-[60px] px-6 sm:px-[50px] rounded-[20px] font-semibold flex items-center justify-center gap-[10px] shadow-md hover:opacity-90 transition"
            >
              <img src="/icons/RocketLaunch.png" alt="Rocket" className="w-5 h-5" />
              Get Started
            </Link>
          </div>

          {/* Статистика */}
          <div className="flex flex-wrap gap-8 sm:gap-12 text-center justify-center sm:justify-start w-full">
            <div>
              <h3 className="text-[24px] sm:text-[28px] font-bold">240k+</h3>
              <p className="text-grayText text-[18px] sm:text-[24px] mt-1">Total Sale</p>
            </div>
            <div>
              <h3 className="text-[24px] sm:text-[28px] font-bold">100k+</h3>
              <p className="text-grayText text-[18px] sm:text-[24px] mt-1">Auctions</p>
            </div>
            <div>
              <h3 className="text-[24px] sm:text-[28px] font-bold">240k+</h3>
              <p className="text-grayText text-[18px] sm:text-[24px] mt-1">Artists</p>
            </div>
          </div>
        </div>

        {/* Картинка — только на десктопе справа */}
        <div className="hidden lg:flex justify-center">
          <div className="w-full max-w-[400px]">
            <FeaturedNFTCard />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}







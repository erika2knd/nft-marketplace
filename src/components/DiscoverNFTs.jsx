import NFTCard from "./NFTCard";
import nfts from "./nfts";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

export default function DiscoverNFTs() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white py-20">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-4xl font-bold mb-2">Discover More NFTs</h2>
          <p className="text-grayText">Explore New Trending NFTs</p>
        </div>

        <Link
          href="/marketplace"
          className="hidden md:flex border-2 border-[#A259FF] text-white rounded-[20px]
                     px-12 py-4 items-center gap-4 hover:scale-95 transition-transform duration-300"
        >
          <img src="/icons/Eye.png" alt="see all" className="w-5 h-5" />
          <span className="text-sm font-semibold">See All</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {nfts.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href="/marketplace"
          className="w-full flex justify-center border-2 border-[#A259FF] text-white rounded-[20px]
                     px-12 py-4 items-center gap-4 hover:scale-95 transition-transform duration-300"
        >
          <img src="/icons/Eye.png" alt="see all" className="w-4 h-4" />
          <span className="text-sm font-semibold">See All</span>
        </Link>
      </div>

    </SectionWrapper>
  );
}


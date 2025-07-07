import NFTCard from "./NFTCard";
import nfts from "./nfts";
import SectionWrapper from "./SectionWrapper";

export default function DiscoverNFTs() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white py-20">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Discover More NFTs</h2>
            <p className="text-grayText">Explore New Trending NFTs</p>
          </div>
          <button className="border-2 border-[#A259FF] text-white rounded-[20px] px-10 py-4 flex items-center gap-4 hover:scale-95 transition-transform duration-300">
            <img src="/icons/Eye.png" alt="see all" className="w-4 h-4" />
            <span className="text-sm font-semibold">See All</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nfts.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </div>
    </SectionWrapper>
  );
}

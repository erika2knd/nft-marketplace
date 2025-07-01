import TopCreatorCard from "./TopCreatorCard";
import creators from "./creators";
import SectionWrapper from "./SectionWrapper";

export default function TopCreators() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">Top Creators</h2>
            <p className="text-grayText">
              Checkout Top Rated Creators On The NFT Marketplace
            </p>
          </div>
          <button className="border border-[#A259FF] rounded-[20px] px-5 py-3 flex items-center gap-2 hover:bg-[#A259FF]/20 transition">
            <img src="/icons/RocketLaunch.png" alt="rocket" className="w-4 h-4" />
            <span className="text-sm font-semibold">View Rankings</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {creators.map((creator, index) => (
            <TopCreatorCard key={index} index={index} {...creator} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

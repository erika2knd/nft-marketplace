import TopCreatorCard from "./TopCreatorCard";
import creators from "./creators";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

export default function TopCreators() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-2">Top Creators</h2>
          <p className="text-grayText">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>
        </div>
        <Link
          href="/rankings"
          className="border-2 border-[#A259FF] rounded-[15px] px-12 py-4 flex items-center gap-5 transition-transform duration-300 ease-in-out hover:scale-95"
        >
          <img src="/icons/purplerocket.png" alt="rocket" className="w-5 h-5" />
          <span className="text-sm font-semibold">View Rankings</span>
        </Link>
      </div>

      <div className="md:hidden mb-10">
        <h2 className="text-3xl font-bold mb-2">Top Creators</h2>
        <p className="text-grayText">
          Checkout Top Rated Creators On The NFT Marketplace
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {creators.map((creator, index) => (
          <div
            key={index}
            className={`
              ${index > 4 ? "hidden" : "block"}
              md:block
            `}
          >
            <TopCreatorCard index={index} {...creator} />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Link
          href="/rankings"
          className="block w-full border-2 border-[#A259FF] rounded-[15px] px-6 py-4 text-center flex items-center justify-center gap-3 transition-transform duration-300 ease-in-out hover:scale-95"
        >
          <img src="/icons/purplerocket.png" alt="rocket" className="w-5 h-5" />
          <span className="text-sm font-semibold">View Rankings</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}

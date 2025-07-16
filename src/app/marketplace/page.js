import SectionWrapper from "@/components/SectionWrapper";
import NFTCard from "../marketplace/NFTCard";
import nftsData from "./nftsData";
import Footer from "@/components/Footer";
import MarketplaceHero from "./MarketplaceHero";


export default function MarketplacePage() {
  return (
    <main>
      <MarketplaceHero />
      <SectionWrapper className="bg-[#2B2B2B] text-white pt-12 pb-24">
        <h1 className="text-[38px] font-semibold mb-6">Browse Marketplace</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {nftsData.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </div>
      </SectionWrapper>
      <Footer />
    </main>
  );
}
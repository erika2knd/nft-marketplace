'use client';
import SectionWrapper from "@/components/SectionWrapper";
import artistNfts from "./artistsNfts";
import Image from "next/image";
import Link from "next/link";

const MoreFromArtist = () => {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white pt-10 pb-32 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-6">
        <h2 className="text-[38px] font-semibold">More From This Artist</h2>
        <Link href="/artist-page" className="flex items-center gap-4 border border-[#A259FF] text-white px-6 py-3 rounded-[20px] transition-transform duration-300 hover:scale-95">
          <img src="/icons/ArrowRight.png" alt="arrow" className="w-5 h-5" />
          <span>Go To Artist Page</span>
          
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artistNfts.map((nft) => (
          <div key={nft.id} className="bg-[#3B3B3B] rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-95">
            <Image
              src={nft.image}
              alt={nft.title}
              width={330}
              height={330}
              className="w-full h-[330px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{nft.title}</h3>
              <div className="flex items-center gap-2 text-[#858584] text-sm mb-4">
                <img src={nft.authorImage} alt={nft.author} className="w-5 h-5 rounded-full" />
                <span>{nft.author}</span>
              </div>
              <div className="flex justify-between text-sm pt-3">
                <div>
                  <p className="text-[#858584] mb-1">Price</p>
                  <p>{nft.price}</p>
                </div>
                <div>
                  <p className="text-[#858584] mb-1">Highest Bid</p>
                  <p>{nft.bid}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MoreFromArtist;

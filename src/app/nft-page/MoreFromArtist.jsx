'use client';
import SectionWrapper from "@/components/SectionWrapper";
import artistNfts from "./artistsNfts";
import Image from "next/image";
import Link from "next/link";

const MoreFromArtist = () => {
  return (
  <SectionWrapper className="bg-[#2B2B2B] text-white">
  <div className="hidden md:flex justify-between items-center mb-14">
    <h2 className="text-[38px] font-semibold">More From This Artist</h2>
    <Link
      href="/artist-page"
      className="flex items-center gap-4 border border-[#A259FF] text-white px-6 py-3 rounded-[20px] transition-transform duration-300 hover:scale-95"
    >
      <img src="/icons/ArrowRight.png" alt="arrow" className="w-5 h-5" />
      <span>Go To Artist Page</span>
    </Link>
  </div>

  <div className="flex flex-col md:hidden mb-8">
    <h2 className="text-[32px] font-semibold mb-6">More From This Artist</h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
  {artistNfts.map((nft, index) => (
    <div
      key={nft.id}
      className={`
        ${index > 1 ? "hidden" : "block"} 
        md:block
        ${index > 5 ? "md:hidden" : "md:block"}
        bg-[#3B3B3B] rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-95
      `}
    >
      <Image
        src={nft.image}
        alt={nft.title}
        width={330}
        height={330}
        className="w-full h-[200px] md:h-[330px] object-cover"
      />
      <div className=" p-4 md:p-5">
        <h3 className="text-md md:text-xl font-semibold mb-2">{nft.title}</h3>
        <div className="flex items-center gap-2 text-[#858584] text-sm mb-4">
          <img
            src={nft.authorImage}
            alt={nft.author}
            className="w-5 h-5 rounded-full"
          />
          <span>{nft.author}</span>
        </div>
        <div className="flex justify-between text-xs md:text-sm md:pt-3">
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

  <div className="md:hidden">
  <Link
    href="/artist-page"
    className="flex items-center justify-center gap-4 border border-[#A259FF] text-white px-6 py-3 rounded-[20px] transition-transform duration-300 hover:scale-95 w-full md:w-auto"
  >
    <img src="/icons/ArrowRight.png" alt="arrow" className="w-5 h-5" />
    <span>Go To Artist Page</span>
  </Link>
</div>

</SectionWrapper>
  );
};

export default MoreFromArtist;

import Link from "next/link";

export default function FeaturedNFTCard() {
  return (
    <div className="w-full flex justify-center perspective-[1000px]">
      <Link href="/artist-page" className="block w-full max-w-[510px]">
        <div className="bg-[#3B3E47] rounded-[20px] overflow-hidden shadow-lg animate-wiggleY nft-card-glare">
          <img
            src="/images/Image-Placeholder.jpg"
            alt="NFT"
            className="w-full h-[200px] sm:h-[350px] md:h-[400px] object-cover"
          />

          <div className="p-5 sm:p-6">
            <h3 className="text-sm md:text-2xl font-semibold mb-3">
              Space Walking
            </h3>
            <div className="flex items-center gap-3">
              <img
                src="/images/Avatar-Placeholder.jpg"
                alt="Author"
                className="w-6 h-6 md:w-10 md:h-10 rounded-full"
              />
              <p className="text-sm sm:text-base">Animakid</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}




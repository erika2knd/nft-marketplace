"use client";
import SectionWrapper from "@/components/SectionWrapper";

const NFTDetails = () => {
  return (
    <>
      <div className="w-full">
        <img
          src="/images/main-nft-page.png"
          alt="The Orbitians"
          className="w-full h-[500px] object-cover"
        />
      </div>

      <SectionWrapper
        className="bg-[#2B2B2B] text-white pt-12 pb-32 px-8 lg:px-32"
        noPadding
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-[64px] leading-[74px] font-semibold mb-3">
              The Orbitians
            </h1>
            <p className="text-[#858584] text-lg mb-6">
              Minted On Sep 30, 2022
            </p>
            <div className="block lg:hidden bg-[#3B3B3B] rounded-[20px] p-6 mb-10">
              <p className="text-[#CCCCCC] text-sm mb-4">Auction ends in:</p>

              <div className="flex justify-center items-baseline gap-8 mb-6">
                <div className="flex flex-col items-center">
                  <p className="text-white text-[52px] font-bold leading-none">59</p>
                  <span className="text-[#CCCCCC] text-sm">Hours</span>
                </div>
                <p className="text-white text-[56px] font-bold leading-none px-1">:</p>
                <div className="flex flex-col items-center">
                  <p className="text-white text-[56px] font-bold leading-none">59</p>
                  <span className="text-[#CCCCCC] text-sm">Minutes</span>
                </div>
                <p className="text-white text-[56px] font-bold leading-none px-1">:</p>
                <div className="flex flex-col items-center">
                  <p className="text-white text-[56px] font-bold leading-none">59</p>
                  <span className="text-[#CCCCCC] text-sm">Seconds</span>
                </div>
              </div>

              <button className="w-full bg-[#A259FF] text-white text-[16px] font-semibold px-6 py-3 rounded-[20px] transition-transform hover:scale-95">
                Place Bid
              </button>
            </div>
            <div className="mb-8">
              <p className="text-[#858584] text-lg mb-2">Created By</p>
              <div className="flex items-center gap-3">
                <img
                  src="/icons/rusty.png"
                  alt="Orbitian"
                  className="w-7 h-7 rounded-full"
                />
                <span className="text-white font-medium">Orbitian</span>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[#858584] mb-2">Description</p>
              <p className="text-[#CCCCCC] text-lg leading-relaxed">
                The Orbitians is a collection of 10,000 unique NFTs on the
                Ethereum blockchain. <br /><br />
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians. <br /><br />
                They live in metal space machines, high up in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. <br /><br />
                The invaders are called Upside-Downs, because of their inverted
                bodies that live on the ground, yet do not know any other way to
                be. Upside-Downs believe that they will be able to win this war
                if they could only get an eye into Orbitian territory, so they’ve
                taken to make human beings their target.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-[#858584] text-lg font-semibold mb-3">Details</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white text-lg">
                    <img
                      src="/icons/Globe.png"
                      className="w-4 h-4"
                      alt="etherscan"
                    />
                    <a href="#" className="hover:underline">
                      View on Etherscan
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-white text-lg">
                    <img
                      src="/icons/Globe.png"
                      className="w-4 h-4"
                      alt="original"
                    />
                    <a href="#" className="hover:underline">
                      View Original
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-[#858584] font-semibold mb-3">Tags</h2>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {["Animation", "Illustration", "Moon", "Moon"].map(
                    (tag, i) => (
                      <button
                        key={i}
                        className="bg-[#3B3B3B] text-white px-5 py-3 rounded-full text-base transition-transform duration-500 hover:scale-95 self-start"
                      >
                        {tag.toUpperCase()}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex bg-[#3B3B3B] rounded-[20px] w-[295px] h-[235px] p-6 flex flex-col justify-between">
            <p className="text-[#CCCCCC] text-sm">Auction ends in:</p>

            <div className="flex justify-center items-baseline gap-3">
              <div className="flex flex-col items-center">
                <p className="text-white text-[38px] font-bold leading-none">59</p>
                <span className="text-[#CCCCCC] text-sm">Hours</span>
              </div>
              <p className="text-white text-[38px] font-bold leading-none px-1">:</p>
              <div className="flex flex-col items-center">
                <p className="text-white text-[38px] font-bold leading-none">59</p>
                <span className="text-[#CCCCCC] text-sm">Minutes</span>
              </div>
              <p className="text-white text-[38px] font-bold leading-none px-1">:</p>
              <div className="flex flex-col items-center">
                <p className="text-white text-[38px] font-bold leading-none">59</p>
                <span className="text-[#CCCCCC] text-sm">Seconds</span>
              </div>
            </div>

            <button className="bg-[#A259FF] text-white text-[16px] font-semibold px-6 py-3 rounded-[20px] transition-transform hover:scale-95">
              Place Bid
            </button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default NFTDetails;



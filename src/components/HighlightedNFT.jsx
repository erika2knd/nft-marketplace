import SectionWrapper from "./SectionWrapper";

export default function HighlightedNFT() {
  return (
    <SectionWrapper className="relative w-full h-[600px] text-white overflow-hidden" noPadding>
      <img
        src="/images/MushroomBig.png"
        alt="Magic Mushrooms"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF] to-transparent z-10" />
      <div className="relative z-20 h-full flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10">
          <div className="flex flex-col gap-6">
            <div className="bg-[#3B3E47] px-4 py-2 rounded-full flex items-center gap-2 w-fit">
              <img
                src="/icons/Shroomie.png"
                alt="Shroomie"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm font-medium">Shroomie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Magic Mashrooms</h2>
            <button className="bg-white text-black font-semibold rounded-[20px] px-10 py-4 flex items-center gap-3 hover:scale-95 transition w-fit">
              <img src="/icons/Eye.png" alt="See" className="w-5 h-5" />
              <span>See NFT</span>
            </button>
          </div>
          <div>
            <div className="bg-[#3B3E47] px-6 py-4 rounded-[20px] text-center w-fit">
              <p className="text-xs text-gray-300 mb-1">Auction ends in:</p>
              <div className="flex gap-3 justify-center text-2xl font-bold">
                <span>59</span>
                <span>:</span>
                <span>59</span>
                <span>:</span>
                <span>59</span>
              </div>
              <div className="flex gap-8 text-xs justify-center mt-1 text-gray-400">
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

import FeaturedNFTCard from "./FeaturedNFTCard";

export default function Hero() {
  return (
    <section className="bg-dark text-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Слева — текст + кнопки + цифры */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover<br className="hidden md:block" /> Digital Art & <br className="hidden md:block" />
            Collect NFTs
          </h1>
          <p className="text-grayText mb-8 max-w-xl">
            NFT marketplace UI created with Figma. Collect, buy and sell art from more than 20k NFT artists.
          </p>

          <div className="flex gap-4 mb-10">
            <button className="bg-[#A259FF] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <img src="/icons/RocketLaunch.png" alt="Rocket" className="w-5 h-5" />
              Get Started
            </button>

          </div>

          {/* Цифры */}
          <div className="flex gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold">240k+</h3>
              <p className="text-grayText text-sm">Total Sale</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">100k+</h3>
              <p className="text-grayText text-sm">Auctions</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">240k+</h3>
              <p className="text-grayText text-sm">Artists</p>
            </div>
          </div>
        </div>

        {/* Справа — карточка */}
        <div className="flex justify-center">
          <FeaturedNFTCard />
        </div>
      </div>
    </section>
  );
}





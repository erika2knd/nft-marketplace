import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const nftItems = [
  {
    title: "Distant Galaxy",
    image: "/images/Image-Placeholder.jpg",
    authorName: "Animakid",
    authorAvatar: "/icons/Animakid.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    title: "Life On Edena",
    image: "/images/ImgAnimakid1.png",
    authorName: "Animakid",
    authorAvatar: "/icons/Animakid.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    title: "AstroFiction",
    image: "/images/ImgAnimakid2.jpg",
    authorName: "Animakid",
    authorAvatar: "/icons/Animakid.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    title: "CryptoCity",
    image: "/images/ImgAnimakid3.png",
    authorName: "Animakid",
    authorAvatar: "/icons/Animakid.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    title: "ColorfulDog 0524",
    image: "/images/ImgAnimakid4.png",
    authorName: "Animakid",
    authorAvatar: "/icons/Animakid.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    title: "Space Tales",
    image: "/images/ImgAnimakid5.png",
    authorName: "Animakid",
    authorAvatar: "/icons/Animakid.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
];

export default function ArtistNFTGrid() {
  return (
    <SectionWrapper noPadding className="py-0 pb-24 bg-[#2B2B2B]">
      <div className="max-w-7xl w-full mx-auto px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nftItems.map((item, idx) => (
          <div key={idx} className="bg-[#3B3B3B] rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-95">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="w-full h-[296px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>

              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={item.authorAvatar}
                  alt={item.authorName}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-gray-400 text-sm font-mono">{item.authorName}</span>
              </div>


              <div className="flex justify-between text-sm text-white">
                <div>
                  <p className="text-gray-400">Price</p>
                  <p>{item.price}</p>
                </div>

                <div className="text-right">
                  <p className="text-gray-400">Highest Bid</p>
                  <p>{item.bid}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </SectionWrapper>
  );
}

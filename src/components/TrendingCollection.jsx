import TrendingCard from "./TrendingCard";
import SectionWrapper from "./SectionWrapper";

const collections = [
  {
    title: "DSGN Animals",
    author: "MrFox",
    authorAvatar: "/icons/MrFox.png",
    count: "1025",
    images: [
      "/images/dog.png",
      "/images/cat.png",
      "/images/bear.png"
    ]
  },
  {
    title: "Magic Mushrooms",
    author: "Shroomie",
    authorAvatar: "/icons/asian-man.png",
    count: "1025",
    images: [
      "/images/Mushroom.png",
      "/images/small-mushroom.png",
      "/images/sm-mashroom.png"
    ]
  },
  {
    title: "Disco Machines",
    author: "BeKind2Robots",
    authorAvatar: "/icons/robot.png",
    count: "1025",
    images: [
      "/images/disco.png",
      "/images/disco-man.png",
      "/images/disco-man-sm.png"
    ]
  }
];

export default function TrendingCollection() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
        <h2 className="text-4xl font-bold mb-2">Trending Collection</h2>
        <p className="text-grayText mb-20">
          Checkout our weekly updated trending collection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <TrendingCard key={index} {...item} />
          ))}
        </div>
    </SectionWrapper>
  );
}

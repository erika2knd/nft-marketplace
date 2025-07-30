import Link from "next/link";

export default function NFTCard({
  title,
  author,
  authorAvatar,
  image,
  price,
  highestBid,
}) {
  const safeTitle = title || "Untitled";
  const safeAuthor = author || "Unknown";
  const safeAvatar =
    authorAvatar || "/icons/default-avatar.png"; 

  return (
    <Link
      href="/nft-page"
      className="bg-[#3B3B3B] rounded-[20px] overflow-hidden transition hover:scale-95 block"
    >
      <img
        src={image}
        alt={safeTitle}
        className="w-full h-[250px] object-cover"
        loading="lazy"
      />
      <div className="p-5 space-y-3">
        <h3 className="text-white font-semibold text-lg line-clamp-1">
          {safeTitle}
        </h3>

        <div className="flex items-center gap-2">
          <img
            src={safeAvatar}
            alt={safeAuthor}
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-[#858584] text-sm">{safeAuthor}</p>
        </div>

        <div className="flex justify-between text-sm text-[#858584] pt-2">
          <div>
            <p className="text-xs">Price</p>
            <p className="text-white">{price || "—"}</p>
          </div>
          <div className="text-right">
            <p className="text-xs">Highest Bid</p>
            <p className="text-white">{highestBid || "—"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}


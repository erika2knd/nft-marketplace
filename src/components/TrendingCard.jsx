import Link from "next/link";

export default function TrendingCard({ images, title, author, authorAvatar, count }) {
  return (
    <Link href="/nft-page">
    <div className="w-full coursor-pointer">
      <div className="transition-transform duration-300 ease-in-out hover:scale-95">
        <img
          src={images[0]}
          alt={title}
          className="w-full aspect-square object-cover rounded-t-[20px]"
        />
      </div>

      <div className="flex gap-[15px] mt-4">
        <div className="flex gap-[15px] w-2/3">
          <img
            src={images[1]}
            alt=""
            className="w-full aspect-square rounded-[20px] object-cover transition-transform duration-300 ease-in-out hover:scale-95"
          />
          <img
            src={images[2]}
            alt=""
            className="w-full aspect-square rounded-[20px] object-cover transition-transform duration-300 ease-in-out hover:scale-95"
          />
        </div>

        <div className="flex-1 bg-[#A259FF] text-white text-lg font-bold flex items-center justify-center rounded-[20px] transition-transform duration-300 ease-in-out hover:scale-95 aspect-square">
          {count}+
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <img src={authorAvatar} alt={author} className="w-6 h-6 rounded-full" />
          <p className="text-grayText text-sm">{author}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}



import Link from "next/link";

export default function TopCreatorCard({ index, name, avatar, sales }) {
  return (
    <Link href="/artist-page" className="relative bg-[#3B3E47] p-6 rounded-[20px] flex flex-col items-center text-center w-full transition-transform duration-300 ease-in-out hover:scale-95">
      <div className="absolute top-4 left-4 bg-[#858584] w-6 h-6 rounded-full text-xs text-white flex items-center justify-center font-semibold">
        {index + 1}
      </div>

      <img
        src={avatar}
        alt={name}
        className="w-[80px] h-[80px] rounded-full object-cover mb-4"
      />

      <h3 className="text-white font-semibold text-[18px]">{name}</h3>

      <p className="text-[16px] text-grayText mt-1">
        Total Sales: <span className="text-white font-semibold">{sales} ETH</span>
      </p>
    </Link>
  );
}





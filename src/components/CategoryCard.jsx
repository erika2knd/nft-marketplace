import Link from "next/link";

export default function CategoryCard({ title, image, icon }) {
  return (
    <Link href="/marketplace" className="rounded-[20px] overflow-hidden bg-[#3B3E47] h-[316px] relative group transition-transform duration-300 ease-in-out hover:scale-95">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover filter blur-sm"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] z-10">
        <img src={icon} alt={title} className="w-[100px] h-[100px]" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#3B3E47] z-20 flex items-center px-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
    </Link>
  );
}



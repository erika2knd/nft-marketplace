export default function TrendingCard({ images, title, author, authorAvatar, count }) {
  return (
    <div className="w-full max-w-[330px]">
      <div className="transition-transform duration-300 ease-in-out hover:scale-95">
        <img
          src={images[0]}
          alt={title}
          className="w-[330px] h-[330px] object-cover rounded-t-[20px]"
        />
      </div>

      <div className="flex gap-[15px] mt-4">
        <div className="flex gap-[15px]">
          <div className="transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              src={images[1]}
              alt=""
              className="w-[100px] h-[100px] rounded-[20px] object-cover"
            />
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              src={images[2]}
              alt=""
              className="w-[100px] h-[100px] rounded-[20px] object-cover"
            />
          </div>
        </div>

        <div className="w-[100px] h-[100px] bg-[#A259FF] text-white text-lg font-bold flex items-center justify-center rounded-[20px] transition-transform duration-300 ease-in-out hover:scale-95">
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
  );
}

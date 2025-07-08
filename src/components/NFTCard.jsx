export default function NFTCard({ image, title, author, authorAvatar, price, bid }) {
  return (
    <div className="bg-[#3B3E47] rounded-[20px] overflow-hidden w-full transition-transform duration-300 ease-in-out hover:scale-95">
      <img src={image} alt={title} className="w-full h-[296px] object-cover" />

      <div className="p-5">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>

        <div className="flex items-center gap-2 mb-4">
          <img src={authorAvatar} alt={author} className="w-6 h-6 rounded-full" />
          <span className="text-grayText text-sm">{author}</span>
        </div>

        <div className="flex justify-between text-sm text-grayText">
          <div>
            <p className="mb-1">Price</p>
            <p className="text-white font-medium">{price}</p>
          </div>
          <div className="text-right">
            <p className="mb-1">Highest Bid</p>
            <p className="text-white font-medium">{bid}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

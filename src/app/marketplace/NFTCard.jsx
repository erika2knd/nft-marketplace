const NFTCard = ({ title, author, authorAvatar, image, price, highestBid }) => {
  return (
    <div className="bg-[#3B3B3B] rounded-[20px] overflow-hidden transition hover:scale-95">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-5 space-y-3">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <div className="flex items-center gap-2">
          <img src={authorAvatar} alt={author} className="w-6 h-6 rounded-full" />
          <p className="text-[#858584] text-sm">{author}</p>
        </div>
        <div className="flex justify-between text-sm text-[#858584] pt-2">
          <div>
            <p className="text-xs">Price</p>
            <p className="text-white">{price}</p>
          </div>
          <div className="text-right">
            <p className="text-xs">Highest Bid</p>
            <p className="text-white">{highestBid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;


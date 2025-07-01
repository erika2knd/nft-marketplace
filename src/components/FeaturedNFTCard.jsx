 export default function FeaturedNFTCard() {
  return (
    <div className="bg-[#3B3E47] rounded-[20px] overflow-hidden w-[510px] shadow-lg">
      <img
        src="/images/Image-Placeholder.jpg"
        alt="NFT"
        className="w-full h-[401px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-[22px] font-semibold mb-3">Space Walking</h3>
        <div className="flex items-center gap-3">
          <img
            src="/images/Avatar-Placeholder.jpg"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <p>Animakid</p>
        </div>
      </div>
    </div>
  );
}


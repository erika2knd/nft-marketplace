export default function FeaturedNFTCard() {
  return (
    <div className="bg-[#3B3E47] rounded-2xl overflow-hidden w-[510px] shadow-lg">
      <img
        src="/images/Image-Placeholder.jpg"
        alt="NFT"
        className="w-[510px] h-[401px] object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Space Walking</h3>
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/images/Avatar-Placeholder.jpg"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Animakid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

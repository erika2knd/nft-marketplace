export default function TopCreatorCard({ index, name, avatar, sales }) {
  return (
    <div className="bg-[#3B3E47] p-5 rounded-[20px] flex flex-col items-center text-center w-full max-w-[240px]">
      <div className="bg-[#2B2B2B] w-6 h-6 rounded-full text-xs text-white flex items-center justify-center font-semibold mb-4">
        {index + 1}
      </div>
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="text-white font-semibold">{name}</h3>
      <p className="text-sm text-grayText mt-1">
        Total Sales: <span className="text-white">{sales} ETH</span>
      </p>
    </div>
  );
}

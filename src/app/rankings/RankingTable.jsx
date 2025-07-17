import Image from "next/image";
import creatorsData from "@/data/creatorsData";

const RankingTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs uppercase text-[#858584] border-b border-[#3B3B3B]">
          <tr>
            <th className="py-3 px-6 font-normal">#</th>
            <th className="py-3 px-6 font-normal">Artist</th>
            <th className="py-3 px-6 font-normal">Change</th>
            <th className="py-3 px-6 font-normal">NFTs Sold</th>
            <th className="py-3 px-6 font-normal">Volume</th>
          </tr>
        </thead>
        <tbody>
          {creatorsData.map((creator, index) => (
            <tr key={index} className="border-b border-[#3B3B3B] hover:bg-[#2B2B2B]">
              <td className="py-4 px-6 font-bold text-white">{index + 1}</td>
              <td className="py-4 px-6 flex items-center gap-3">
                <Image src={creator.avatar} alt={creator.name} width={32} height={32} className="rounded-full" />
                <span className="font-semibold text-white">{creator.name}</span>
              </td>
              <td className="py-4 px-6 text-green-500 font-semibold">{creator.change}</td>
              <td className="py-4 px-6">{creator.nftsSold}</td>
              <td className="py-4 px-6">{creator.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;

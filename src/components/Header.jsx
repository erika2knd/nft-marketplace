export default function Header() {
  return (
    <header className="bg-[#2B2B2B] text-white py-4 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center gap-3">
          <img src="/icons/Storefront-colour.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-xl">NFT Marketplace</span>
        </div>


        <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-10 text-gray-300 font-medium">
                <a href="#" className="hover:text-white transition">Marketplace</a>
                <a href="#" className="hover:text-white transition">Rankings</a>
                <a href="#" className="hover:text-white transition">Connect a Wallet</a>
            </nav>

            <button className="bg-[#A259FF] text-white px-[50px] py-[16px] rounded-[20px] flex items-center gap-2 hover:opacity-90 transition">
                <img src="/icons/User.png" alt="User" className="w-5 h-5" />
            Sign Up
            </button>
        </div>

    </div>
    </header>
  );
}


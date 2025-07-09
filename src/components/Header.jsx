import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#2B2B2B] text-white py-4 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/icons/Storefront-colour.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-xl">NFT Marketplace</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-10 text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition">Marketplace</Link>
            <Link href="/rankings" className="hover:text-white transition">Rankings</Link>
            <Link href="/connect-wallet" className="hover:text-white transition">Connect a Wallet</Link>
          </nav>

          <Link href="/register" className="bg-[#A259FF] text-white px-[50px] py-[16px] rounded-[20px] flex items-center gap-2 hover:opacity-90 transition">
            <img src="/icons/User.png" alt="User" className="w-5 h-5" />
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}



import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function Footer() {
  return (
    <footer className="bg-[#3B3B3B] text-white">
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/icons/Storefront-colour.png"
                alt="Logo"
                className="w-6 h-6 max-md:w-7 max-md:h-7"
              />
              <span className="text-xl font-bold max-md:text-2xl">NFT Marketplace</span>
            </div>
            <p className="text-grayText text-sm mb-6 max-md:text-base">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-sm mb-2 text-white max-md:text-base">Join our community</p>
            <div className="flex gap-3">
              {["DiscordLogo", "YoutubeLogo", "TwitterLogo", "InstagramLogo"].map((icon) => (
                <img
                  key={icon}
                  src={`/icons/${icon}.png`}
                  alt={icon}
                  className="w-6 h-6 max-md:w-7 max-md:h-7"
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 max-md:text-2xl">Explore</h4>
            <ul className="text-grayText space-y-3 text-sm max-md:text-base">
              <li>
                <Link href="/marketplace" className="hover:text-gray transition duration-300">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="hover:text-gray transition duration-300">
                  Rankings
                </Link>
              </li>
              <li>
                <Link href="/connect-wallet" className="hover:text-gray transition duration-300">
                  Connect a wallet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 max-md:text-2xl">Join Our Weekly Digest</h4>
            <p className="text-grayText text-sm mb-6 max-md:text-base">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <form className="w-full flex flex-col md:relative md:flex-row md:items-center">
  <input
    type="email"
    placeholder="Enter your email here"
    className="w-full bg-white rounded-[20px] py-4 px-6 md:pr-40 text-sm max-md:text-base text-gray-700 placeholder-gray-400"
  />

  {/* Кнопка для мобильных (видна только до md) */}
  <button
    type="submit"
    className="mt-4 md:hidden bg-[#A259FF] text-white font-semibold text-sm px-8 py-4 rounded-[20px] shadow-md transition-transform duration-300 hover:scale-95"
  >
    Subscribe
  </button>

  {/* Кнопка для десктопа (absolute) */}
  <button
    type="submit"
    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-[#A259FF] text-white font-semibold text-sm px-8 py-4 rounded-[20px] shadow-md transition-transform duration-300 hover:scale-95"
  >
    Subscribe
  </button>
</form>
</div>
</div>

        <div className="border-t border-[#858584] mt-12 pt-6 text-sm max-md:text-base text-grayText text-center">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </SectionWrapper>
    </footer>
  );
}


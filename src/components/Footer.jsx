import SectionWrapper from "./SectionWrapper";

export default function Footer() {
  return (
    <footer className="bg-[#3B3B3B] text-white">
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/icons/Storefront-colour.png" alt="Logo" className="w-6 h-6" />
              <span className="text-xl font-bold">NFT Marketplace</span>
            </div>
            <p className="text-grayText text-sm mb-6">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-sm mb-2 text-white">Join our community</p>
            <div className="flex gap-3">
              <img src="/icons/DiscordLogo.png" alt="Gamepad" className="w-6 h-6" />
              <img src="/icons/YoutubeLogo.png" alt="YouTube" className="w-6 h-6" />
              <img src="/icons/TwitterLogo.png" alt="Twitter" className="w-6 h-6" />
              <img src="/icons/InstagramLogo.png" alt="Instagram" className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Explore</h4>
            <ul className="text-grayText space-y-3 text-sm">
              <li>Marketplace</li>
              <li>Rankings</li>
              <li>Connect a wallet</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Join Our Weekly Digest</h4>
            <p className="text-grayText text-sm mb-6">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <form className="w-full relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full bg-white rounded-[20px] py-4 px-6 pr-40 text-sm text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#A259FF] text-white font-semibold text-sm px-8 py-4 rounded-[20px] shadow-md transition-transform duration-300 hover:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#858584] mt-12 pt-6 text-sm text-grayText text-center">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </SectionWrapper>
    </footer>
  );
}

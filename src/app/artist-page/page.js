import Image from "next/image";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ArtistNFTGrid from "@/components/ArtistNFTGrid";

export default function ArtistPage() {
  return (
    <>
      <section className="relative w-full h-[320px] lg:h-[420px]">
        <Image
          src="/images/ArtistPageImage.png"
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF]/60 to-transparent" />

        <SectionWrapper>
          <div className="absolute left-6 lg:left-24 bottom-[-70px] z-10">
            <Image
              src="/icons/AnimakidImage.png"
              alt="Avatar"
              width={140}
              height={140}
              className="rounded-[30px] border-4 border-[#2B2B2B]"
            />
          </div>
        </SectionWrapper>
      </section>

      <SectionWrapper className="pt-[100px] bg-[#2B2B2B]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-6">Animakid</h1>

            <div className="flex gap-10 text-center mb-8">
              <div>
                <p className="text-xl font-semibold">250k+</p>
                <p className="text-gray-400 text-sm">Volume</p>
              </div>
              <div>
                <p className="text-xl font-semibold">50+</p>
                <p className="text-gray-400 text-sm">NFTs Sold</p>
              </div>
              <div>
                <p className="text-xl font-semibold">3000+</p>
                <p className="text-gray-400 text-sm">Followers</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-400 font-medium mb-2">Bio</p>
              <p className="text-white">
                The Internet’s Friendliest Designer Kid.
              </p>
            </div>

            <div>
              <p className="text-gray-400 font-medium mb-2">Links</p>
              <div className="flex gap-4">
                <img src="/icons/Globe.png" alt="Globe" />
                <img src="/icons/DiscordLogo.png" alt="Discord" />
                <img src="/icons/YouTubeLogo.png" alt="YouTube" />
                <img src="/icons/TwitterLogo.png" alt="Twitter" />
                <img src="/icons/InstagramLogo.png" alt="Instagram" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <button className="bg-[#A259FF] text-white px-6 py-3 rounded-[20px] flex items-center gap-2 transition-transform hover:scale-95">
              <img src="/icons/Copy.png" alt="Copy" />
              0xc0E3...B79C
            </button>
            <button className="border border-[#A259FF] text-white px-6 py-3 rounded-[20px] flex items-center gap-2 transition-transform hover:scale-95">
              <img src="/icons/Plus.png" alt="Plus" />
              Follow
            </button>
          </div>
        </div>

       <div className="border-t border-[#3B3B3B] mt-12 pt-6">
  <div className="flex justify-center gap-14 text-gray-400 font-semibold text-lg">
    <div className="relative flex flex-col items-center cursor-pointer">
      <span className="text-white">Created</span>
      <span className="bg-gray-500 text-white text-sm rounded-full px-3 py-0.5 mt-1">302</span>
      <div className="w-[60%] h-[2px] bg-white mt-2 rounded-full" />
    </div>

    <div className="relative flex flex-col items-center cursor-pointer hover:text-white transition">
      <span>Owned</span>
      <span className="bg-[#3B3B3B] text-white text-sm rounded-full px-3 py-0.5 mt-1">67</span>
    </div>

    <div className="relative flex flex-col items-center cursor-pointer hover:text-white transition">
      <span>Collection</span>
      <span className="bg-[#3B3B3B] text-white text-sm rounded-full px-3 py-0.5 mt-1">4</span>
    </div>
  </div>
</div>
      </SectionWrapper>
      <ArtistNFTGrid />

      <Footer />
    </>
  );
}






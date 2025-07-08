import SectionWrapper from "./SectionWrapper";

export default function SubscribeSection() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="bg-[#3B3E47] rounded-[20px] p-10 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/Austronaut.png"
          alt="Astronaut"
          className="rounded-[20px] w-full md:w-[420px] object-cover"
        />
        <div className="flex-1 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Weekly Digest
          </h2>
          <p className="text-grayText mb-6 text-xl">
            Get Exclusive Promotions & Updates Straight To Your Inbox.
          </p>
          <form className="w-full max-w-2xl mx-auto relative flex items-center">
             <input
                type="email"
                placeholder="Enter your email here"
                className="w-full bg-white rounded-[20px] py-5 px-8 pr-44 text-base md:text-lg placeholder-gray-500"
            />

            <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#A259FF] text-white font-semibold text-base md:text-lg px-10 py-5 flex items-center gap-3 rounded-[20px] shadow-md transition-transform duration-500 hover:scale-95"
            >
            <img src="/icons/Mail.png" alt="Subscribe" className="w-5 h-5" />
            Subscribe
            </button>
        </form>

        </div>
      </div>
    </SectionWrapper>
  );
}

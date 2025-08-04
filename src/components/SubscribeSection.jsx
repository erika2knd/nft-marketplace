import SectionWrapper from "./SectionWrapper";

export default function SubscribeSection() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <div className="bg-[#3B3E47] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/Austronaut.png"
          alt="Astronaut"
          className="rounded-[20px] w-full md:w-[420px] object-cover"
        />

        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Join Our Weekly Digest
          </h2>
          <p className="text-grayText mb-6 text-base md:text-xl">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="w-full max-w-2xl mx-auto relative">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full bg-white rounded-[20px] py-5 px-6 md:pr-44 text-sm md:text-lg placeholder-gray-500"
            />

            <button
              type="submit"
              className="bg-[#A259FF] text-white font-semibold text-base md:text-lg px-10 py-5 flex items-center gap-3 rounded-[20px] shadow-md transition-transform duration-500 hover:scale-95
              
              w-full justify-center mt-4
              md:w-fit md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:mt-0 md:justify-start"
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



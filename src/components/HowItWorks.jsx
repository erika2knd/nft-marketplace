import SectionWrapper from "./SectionWrapper";
import HowItWorksCard from "./HowItWorksCard";
import howItWorksSteps from "./howItWorksSteps";

export default function HowItWorks() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <h2 className="text-4xl font-bold mb-2">How It Works</h2>
      <p className="text-grayText mb-12">Find Out How To Get Started</p>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8">
        {howItWorksSteps.map((step, index) => (
          <HowItWorksCard key={index} {...step} />
        ))}
      </div>
    </SectionWrapper>
  );
}


import Hero from "../components/Hero";
import TrendingCollection from "../components/TrendingCollection";
import TopCreators from "../components/TopCreators";
import BrowseCategories from "../components/BrowseCategories";
import DiscoverNFTs from "../components/DiscoverNFTs";
import HighlightedNFT from "@/components/HighlightedNFT";
import HowItWorks from "../components/HowItWorks";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverNFTs />
      <HighlightedNFT />
      <HowItWorks />
      <SubscribeSection />
      <Footer />

    </main>
  );
}


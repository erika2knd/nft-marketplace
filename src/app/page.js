import Hero from "../components/Hero";
import TrendingCollection from "../components/TrendingCollection";
import TopCreators from "../components/TopCreators";
import BrowseCategories from "../components/BrowseCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />

    </main>
  );
}


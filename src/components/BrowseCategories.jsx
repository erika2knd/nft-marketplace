import categories from "./categories";
import CategoryCard from "./CategoryCard";
import SectionWrapper from "./SectionWrapper";

export default function BrowseCategories() {
  return (
    <SectionWrapper className="bg-[#2B2B2B] text-white">
      <h2 className="text-4xl font-bold mb-12">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </SectionWrapper>
  );
}



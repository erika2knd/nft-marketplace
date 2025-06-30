export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`px-6 lg:px-24 py-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

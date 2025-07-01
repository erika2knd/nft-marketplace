export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {children}
      </div>
    </section>
  );
}

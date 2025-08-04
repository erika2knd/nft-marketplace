export default function SectionWrapper({ children, className = "", noPadding = false }) {
  return (
    <section className={`${noPadding ? "" : "px-8 lg:px-24 py-12"} ${className}`}>
      <div className="max-w-7xl mx-auto w-full h-full">
        {children}
      </div>
    </section>
  );
}


export default function SectionWrapper({ children, className = "", noPadding = false }) {
  return (
    <section className={`${noPadding ? "" : "px-6 lg:px-24 py-24"} ${className}`}>
      {!noPadding ? (
        <div className="max-w-7xl mx-auto w-full h-full">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}


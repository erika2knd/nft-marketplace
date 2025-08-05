export default function SectionWrapper({
  children,
  className = "",
  noPadding = false,
  noPaddingTop = false, // ← добавили новый проп
}) {
  const basePadding = noPadding
    ? ""
    : noPaddingTop
      ? "px-8 lg:px-24 pb-12 lg:pb-24" // без pt
      : "px-8 lg:px-24 py-12 lg:py-24"; // полные отступы

  return (
    <section className={`${basePadding} ${className}`}>
      <div className="max-w-7xl mx-auto w-full h-full">
        {children}
      </div>
    </section>
  );
}


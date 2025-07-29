function Avatar({ name }) {
  const firstLetter = name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="bg-[#A259FF] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
      {firstLetter}
    </div>
  );
}

export default function HowItWorksCard({ title, description, image }) {
  return (
    <div className="bg-[#3B3E47] rounded-[20px] md:p-8 p-4 flex flex-row sm:flex-col items-center sm:items-center text-white text-left sm:text-center gap-6 sm:gap-0">
      <img
        src={image}
        alt={title}
        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-contain"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}


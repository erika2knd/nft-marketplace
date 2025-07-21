export default function HowItWorksCard({ title, description, image }) {
  return (
    <div className="bg-[#3B3E47] rounded-[20px] p-6 sm:p-8 flex flex-row sm:flex-col items-center sm:items-center text-white text-left sm:text-center gap-6 sm:gap-0">
      <img
        src={image}
        alt={title}
        className="w-[100px] h-[100px] sm:w-[230px] sm:h-[230px] object-contain"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}


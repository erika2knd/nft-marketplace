export default function HowItWorksCard({ title, description, image }) {
  return (
    <div className="bg-[#3B3E47] rounded-[20px] p-10 flex flex-col items-center text-center text-white">
      <img src={image} alt={title} className="mb-4 w-[230px] h-[230px] object-contain" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}

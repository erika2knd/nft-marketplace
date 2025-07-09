import Footer from "@/components/Footer";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
     <main className="bg-[#2B2B2B] flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/registerImage.png"
            alt="Register Art"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-24 py-16">
        <div className="w-full max-w-2xl"> 
            <h1 className="text-[48px] font-bold mb-6 leading-tight">
                Create Account
            </h1>
            <p className="text-gray-300 mb-10 text-xl leading-relaxed max-w-xl">
                Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.
            </p>

            <form className="flex flex-col gap-5 max-w-sm"> 
            <Input placeholder="Username" icon="/icons/UserName.png" />
            <Input placeholder="Email Address" icon="/icons/Email.png" />
            <Input placeholder="Password" icon="/icons/LockKey.png" type="password" />
            <Input placeholder="Confirm Password" icon="/icons/LockKey.png" type="password" />

            <button
                type="submit"
                className="bg-[#A259FF] text-white font-semibold py-4 rounded-full hover:scale-95 transition w-full text-lg"
            >
            Create account
            </button>
            </form>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Input({ placeholder, icon, type = "text" }) {
  return (
    <div className="flex items-center bg-white rounded-full px-5 py-3">
      <img src={icon} alt="" className="w-5 h-5 mr-3" />
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-base"
      />
    </div>
  );
}

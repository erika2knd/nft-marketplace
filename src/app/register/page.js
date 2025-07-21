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

        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-24 py-12">
          <div className="w-full max-w-md lg:max-w-lg mx-auto text-center lg:text-left">
            <h1 className="text-[36px] md:text-[48px] font-bold mb-4 leading-tight">
              Create Account
            </h1>
            <p className="text-gray-300 mb-8 text-base md:text-xl leading-relaxed">
              Welcome! Enter your details and start <br className="hidden md:block" />
              creating, collecting and selling NFTs.
            </p>

            <form className="flex flex-col gap-4 w-full">
              <Input placeholder="Username" icon="/icons/UserName.png" />
              <Input placeholder="Email Address" icon="/icons/Email.png" />
              <Input placeholder="Password" icon="/icons/LockKey.png" type="password" />
              <Input placeholder="Confirm Password" icon="/icons/LockKey.png" type="password" />

              <button
                type="submit"
                className="bg-[#A259FF] text-white font-semibold py-4 rounded-full hover:scale-95 transition w-full text-base md:text-lg"
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
      <img src={icon} alt="" className="w-5 h-5 mr-3 max-md:w-6 max-md:h-6" />
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-base max-md:text-lg"
      />
    </div>
  );
}

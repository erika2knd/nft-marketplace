"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Please fill in all fields");
      setMessageType("error");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in:", user);
      setMessage("Login successful");
      setMessageType("success");
      router.push("/"); 
    } catch (error) {
  console.error("Login error:", error.code);

  let userMessage = "Something went wrong";

  switch (error.code) {
    case "auth/invalid-credential":
      userMessage = "Incorrect. Please try again.";
      break;
    case "auth/user-not-found":
      userMessage = "No account found with this email.";
      break;
    case "auth/invalid-email":
      userMessage = "Invalid email address format.";
      break;
    default:
      userMessage = error.message; 
  }

  setMessage(userMessage);
  setMessageType("error");
}

  };

  return (
    <>
      <main className="bg-[#2B2B2B] flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/registerImage.png"
            alt="Login Art"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-24 py-12">
          <div className="w-full max-w-md lg:max-w-lg mx-auto text-center lg:text-left">
            <h1 className="text-[36px] md:text-[48px] font-bold mb-4 leading-tight">
              Welcome Back
            </h1>
            <p className="text-gray-300 mb-6 text-base md:text-xl leading-relaxed">
              Log in to your account to continue creating, collecting and selling NFTs.
            </p>

            {message && (
              <div
                className={`mb-4 text-sm font-medium ${
                  messageType === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-full lg:max-w-[400px]">
              <Input placeholder="Email Address" icon="/icons/Email.png" value={email} onChange={setEmail} />
              <Input placeholder="Password" icon="/icons/LockKey.png" type="password" value={password} onChange={setPassword} />
              <button
                type="submit"
                className="bg-[#A259FF] text-white font-semibold py-4 rounded-full hover:scale-95 transition w-full text-base md:text-lg"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Input({ placeholder, icon, type = "text", value, onChange }) {
  return (
    <div className="flex items-center bg-white rounded-full px-5 py-3">
      <img src={icon} alt="" className="w-5 h-5 mr-3 max-md:w-6 max-md:h-6" />
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-base max-md:text-lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

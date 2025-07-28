"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";



export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const router = useRouter();
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

            {message && (
              <div
                className={`mb-4 text-sm font-medium ${
                  messageType === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </div>
            )}

            <form className="flex flex-col gap-4 w-full max-w-full lg:max-w-[400px]"
            onSubmit={async (e) => {
              e.preventDefault();
              setMessage("");

              if (!username || !email || !password || !confirmPassword) {
                setMessage("Please fill in all fields");
                setMessageType("error");
                return;
              }

              if (password.length < 6) {
                setMessage("Password must be at least 6 characters long");
                setMessageType("error");
                return;
              }

              if (password !== confirmPassword) {
                setMessage("Passwords do not match");
                setMessageType("error");
                return;
              }

              try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                await updateProfile(user, { displayName: username });
                console.log("Registered user:", user);
                setMessage("Registration successful");
                setMessageType("success");
                router.push("/");
              } catch (error) {
                console.error("Registration error:", error.message);
                setMessage(error.message);
                setMessageType("error");
              }
            }}
            >
            
              <Input placeholder="Username" icon="/icons/UserName.png" value={username} onChange={setUsername} />
              <Input placeholder="Email Address" icon="/icons/Email.png" value={email} onChange={setEmail} />
              <Input placeholder="Password" icon="/icons/LockKey.png" type="password" value={password} onChange={setPassword} />
              <Input placeholder="Confirm Password" icon="/icons/LockKey.png" type="password" value={confirmPassword} onChange={setConfirmPassword} />

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

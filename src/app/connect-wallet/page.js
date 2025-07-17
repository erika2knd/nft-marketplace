import Image from "next/image";
import Footer from "@/components/Footer"


export default function ConnectWalletPage() {
  return (
    <>
      <main className="bg-[#2B2B2B] flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/connectWallet.png"
            alt="Connect Wallet Art"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-24 py-16">
          <div className="w-full max-w-md">
            <h1 className="text-5xl font-bold mb-4">Connect Wallet</h1>
            <p className="text-gray-300 mb-10 text-xl leading-relaxed">
              Choose a wallet you want to connect.
              <br />
              There are several wallet providers.
            </p>

            <div className="flex flex-col gap-4 max-w-sm"> 
              <WalletButton icon="/icons/Metamask.png" label="Metamask" />
              <WalletButton icon="/icons/WalletConnect.png" label="Wallet Connect" />
              <WalletButton icon="/icons/Coinbase.png" label="Coinbase" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function WalletButton({ icon, label }) {
  return (
    <button className="bg-[#3B3B3B] flex items-center gap-4 w-full px-6 py-5 border border-[#A259FF] rounded-xl text-white font-medium transition-transform duration-300 hover:scale-95">
      <Image src={icon} alt={label} width={24} height={24} />
      {label}
    </button>
  );
}



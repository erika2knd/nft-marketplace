import "../../firebase";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Header from "../components/Header";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "NFT Marketplace",
  description: "Discover, collect and sell extraordinary NFTs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-dark text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}





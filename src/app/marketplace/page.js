"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import NFTCard from "./NFTCard";
import Footer from "@/components/Footer";
import MarketplaceHero from "./MarketplaceHero";

import { db } from "../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";



export default function MarketplacePage() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const q = query(collection(db, "nfts"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            title: d.title,
            image: d.image || d.imageUrl,                   
            author: d.author || d.userName,                
            authorAvatar: d.authorAvatar || d.authorImage,  
            price: d.price,
            highestBid: d.highestBid || d.bid,            
          };
        });
        setNfts(items);
      } catch (e) {
        console.error("Error fetching NFTs:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchNFTs();
  }, []);

  

  const cardsToRender = nfts; 

  return (
    <main>
      <MarketplaceHero />

      <SectionWrapper className="bg-[#2B2B2B] text-white pt-12 pb-24">
        <h1 className="text-[38px] font-semibold mb-6">Browse Marketplace</h1>

        {loading ? (
          <p className="text-[#858584]">Loading NFTs...</p>
        ) : cardsToRender.length === 0 ? (
          <p className="text-[#858584]">No NFTs found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {cardsToRender.map((nft) => (
              <NFTCard
                key={nft.id}
                title={nft.title}
                image={nft.image}
                author={nft.author}
                authorAvatar={nft.authorAvatar}
                price={nft.price}
                highestBid={nft.highestBid}
              />
            ))}
          </div>
        )}
      </SectionWrapper>

      <Footer />
    </main>
  );
}

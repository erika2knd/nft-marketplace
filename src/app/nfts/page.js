"use client";
import { useEffect, useState } from "react";
import { db } from "../../../firebase"; // или "@/firebase" если используешь алиас
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import NFTCard from "./NFTCard";

export default function NFTListPage() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const q = query(collection(db, "nfts"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNfts(items);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <main className="min-h-screen bg-[#2B2B2B] text-white px-6 py-12 lg:px-24">
      <h1 className="text-3xl font-bold mb-6">All NFTs</h1>

      {loading ? (
        <p>Loading NFTs...</p>
      ) : nfts.length === 0 ? (
        <p>No NFTs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <NFTCard
              key={nft.id}
              id={nft.id}
              title={nft.title}
              image={nft.imageUrl}
              author={nft.author}
              authorAvatar={nft.authorImage}
              price={nft.price}
              highestBid={nft.highestBid || nft.bid} 
              createdBy={nft.createdBy}               
            />
          ))}
        </div>
      )}
    </main>
  );
}


"use client";
import { useState } from "react";
import { db } from "../../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";



const toSlug = (s) =>
  (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function CreateNFTPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [highestBid, setHighestBid] = useState("");
  const [author, setAuthor] = useState("");
  const [authorImage, setAuthorImage] = useState("");

  const [collectionName, setCollectionName] = useState("");

  const [message, setMessage] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (
      !title ||
      !imageUrl ||
      !price ||
      !highestBid ||
      !author ||
      !authorImage ||
      !collectionName 
    ) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "nfts"), {
        title,
        imageUrl,
        price,
        highestBid,
        author,
        authorImage,
        
        collectionName,
        collectionSlug: toSlug(collectionName),

        createdAt: serverTimestamp(),
        createdBy: user?.uid,
        userName: user?.displayName || user?.email,
      });

      setMessage("NFT created successfully!");
      setTitle("");
      setImageUrl("");
      setPrice("");
      setHighestBid("");
      setAuthor("");
      setAuthorImage("");
      setCollectionName(""); 

      router.push("/nfts");
    } catch (error) {
      console.error("Error adding NFT:", error);
      setMessage("Error creating NFT");
    }
  };

  return (
    <main className="min-h-screen bg-[#2B2B2B] text-white px-6 py-12 lg:px-24">
      <h1 className="text-3xl font-bold mb-6">Create New NFT</h1>

      {message && (
        <div className="mb-4 text-sm font-medium text-center text-yellow-400">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="NFT Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-3 rounded-[20px] bg-white text-black placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="px-4 py-3 rounded-[20px] bg-white text-black placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Price (e.g. 1.63 ETH)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="px-4 py-3 rounded-[20px] bg-white text-black placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Highest Bid (e.g. 0.33 wETH)"
          value={highestBid}
          onChange={(e) => setHighestBid(e.target.value)}
          className="px-4 py-3 rounded-[20px] bg-white text-black placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="px-4 py-3 rounded-[20px] bg-white text-black placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Author Image URL"
          value={authorImage}
          onChange={(e) => setAuthorImage(e.target.value)}
          className="px-4 py-3 rounded-[20px] bg-white text-black placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Collection Name (e.g. Cyber Apes)"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
          className="px-4 py-3 rounded-[20px] bg-white text-black placeholder-gray-400"
        />

        <button
          type="submit"
          className="bg-[#A259FF] text-white py-3 rounded-[20px] font-semibold hover:scale-95 transition"
        >
          Create NFT
        </button>
      </form>

     
    </main>
  );
}


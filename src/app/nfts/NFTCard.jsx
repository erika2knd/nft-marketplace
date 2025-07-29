"use client";
import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Link from "next/link";

export default function NFTCard({
  id,
  title,
  image,
  author,
  authorAvatar,
  price,
  highestBid,
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "nfts", id));
      window.location.reload(); 
    } catch (error) {
      console.error("Error deleting NFT:", error);
    }
  };

  return (
    <div className="relative bg-[#3B3B3B] rounded-[20px] overflow-hidden transition hover:scale-95">
      <button
        onClick={() => setShowConfirm(true)}
        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full w-6 h-6 flex items-center justify-center text-sm"
        title="Удалить"
      >
        ×
      </button>

      <Link href="/nft-page">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover"
        />
        <div className="p-5 space-y-3">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-2">
            <img
              src={authorAvatar}
              alt={author}
              className="w-6 h-6 rounded-full"
            />
            <p className="text-[#858584] text-sm">{author}</p>
          </div>
          <div className="flex justify-between text-sm text-[#858584] pt-2">
            <div>
              <p className="text-xs">Price</p>
              <p className="text-white">{price}</p>
            </div>
            <div className="text-right">
              <p className="text-xs">Highest Bid</p>
              <p className="text-white">{highestBid}</p>
            </div>
          </div>
        </div>
      </Link>

      {showConfirm && (
        <div className="absolute inset-0 bg-[#1B1B1B] bg-opacity-70 flex items-center justify-center z-10">
          <div className="bg-[#3B3B3B] text-white rounded-lg p-6 w-[90%] max-w-sm text-center space-y-4">
            <p className="text-lg font-semibold">Delete NFT?</p>
            <p className="text-sm text-white">Are you sure you want to delete this NFT?</p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

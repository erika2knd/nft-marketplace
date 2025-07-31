"use client";

import { useEffect, useMemo, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import NFTCard from "./NFTCard";
import Footer from "@/components/Footer";
import MarketplaceHero from "./MarketplaceHero";

import { db } from "../../../firebase";
import { collection, getDocs, query as fsQuery, orderBy } from "firebase/firestore";

export default function MarketplacePage() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  useEffect(() => {
    const id = setTimeout(() => setDebounced(query.trim().toLowerCase()), 250);
    return () => clearTimeout(id);
  }, [query]);

  const [activeTab, setActiveTab] = useState("NFTs");

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const q = fsQuery(collection(db, "nfts"), orderBy("createdAt", "desc"));
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

            collectionName: d.collectionName || "",
            collectionSlug: d.collectionSlug || "",
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

  const norm = (v) => (v ?? "").toString().toLowerCase();

  const filteredNfts = useMemo(() => {
    if (!debounced) return nfts;
    return nfts.filter((n) => {
      const haystack = `${norm(n.title)} ${norm(n.author)} ${norm(n.collectionName)}`;
      return haystack.includes(debounced);
    });
  }, [nfts, debounced]);

  const collections = useMemo(() => {
    const map = new Map();
    for (const n of nfts) {
      const key = (n.collectionSlug || n.collectionName || "").trim();
      if (!key) continue;

      if (!map.has(key)) {
        map.set(key, {
          id: key,
          name: n.collectionName || "Untitled Collection",
          cover: n.image,     
          author: n.author,
          itemsCount: 1,
        });
      } else {
        const c = map.get(key);
        c.itemsCount += 1;
        if (!c.cover && n.image) c.cover = n.image;
      }
    }
    return Array.from(map.values());
  }, [nfts]);

  const filteredCollections = useMemo(() => {
    if (!debounced) return collections;
    return collections.filter((c) => {
      const haystack = `${norm(c.name)} ${norm(c.author)}`;
      return haystack.includes(debounced);
    });
  }, [collections, debounced]);

  const gridContent =
    activeTab === "NFTs" ? (
      filteredNfts.length === 0 ? (
        <p className="text-[#858584]">
          {query ? <>No NFTs found for “{query}”.</> : <>No NFTs found.</>}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredNfts.map((nft) => (
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
      )
    ) : filteredCollections.length === 0 ? (
      <p className="text-[#858584]">
        {query ? <>No collections found for “{query}”.</> : <>No collections found.</>}
      </p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCollections.map((c) => (
          <div
            key={c.id}
            className="bg-[#3B3B3B] rounded-2xl overflow-hidden border border-[#4A4A4A]"
          >
            {c.cover ? (
              <img src={c.cover} alt={c.name} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 bg-[#4A4A4A]" />
            )}
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">{c.name}</h3>
              {c.author && (
                <p className="text-[#858584] text-sm mt-1">by {c.author}</p>
              )}
              <p className="text-[#858584] text-sm mt-2">{c.itemsCount} items</p>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <main>
      <MarketplaceHero
        query={query}
        onQueryChange={setQuery}

        activeTab={activeTab}
        onTabChange={setActiveTab}

        nftsTotal={nfts.length}
        nftsResults={filteredNfts.length}
        collectionsTotal={collections.length}
        collectionsResults={filteredCollections.length}
      />

      <SectionWrapper className="bg-[#2B2B2B] text-white pt-12 pb-24">
        {loading ? <p className="text-[#858584]">Loading...</p> : gridContent}
      </SectionWrapper>

      <Footer />
    </main>
  );
}


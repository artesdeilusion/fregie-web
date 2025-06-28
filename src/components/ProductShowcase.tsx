import Link from "next/link";
import React, { useState } from "react";

interface ShowcaseItem {
  title: string;
  desc: string;
  subtitle: string;
  img: string;
}

const items: ShowcaseItem[] = [
  {
    title: "1. Güvenle seç",    subtitle: "Sana uygun ürünleri fark et",

    desc: "Diyetini ve alerjilerini seç: Vegan, glütensiz, laktozsuz gibi onlarca seçenek seni bekliyor.",
    img: "/images/mobile-view/11.png",
  },
  
  {
    title: "2. Tara",
    subtitle: "Barkodu okut",
    desc: "Barkodu okut, saniyeler içinde sonucu gör. Renkli simgelerle anında uyum bilgisi.",
    img: "/images/mobile-view/12.png",
  },
  {
    title: "3. Uygula",    subtitle: "Fregie senin için analiz etsin",

    desc: "Bilmediğin maddeler mi var? Üzerine tıkla, detaylarını öğren: Kaynağı, ne işe yarar, hangi diyetlere uygun?",
    img: "/images/mobile-view/13.png",
  },
  
];

export default function ProductShowcase() {
  const [selected, setSelected] = useState(0);

  return (
<section className="py-16 px-4 max-w-screen-lg mx-auto">
  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
    <div className="md:w-1/3 w-full flex md:justify-end justify-center">
  <div className="space-y-4 flex flex-col justify-start items-start text-left">
    {items.map((item, idx) => (
      <button
        key={idx}
        onClick={() => setSelected(idx)}
        className={`text-4xl font-black text-left ${
          selected === idx ? "text-black  " : "text-gray-300 cursor-pointer" 
        }`}
      >
        {item.title}

        <p className="text-xl   ">        {item.subtitle}
        </p>
       </button>
       
    ))}
  </div>
   
</div>

    {/* Right: Image and Description */}
    <div className="md:w-2/3 w-full flex flex-col items-center relative">
    
  {/* Purple background box (centered behind content) */}
  <div className="absolute inset-0 flex justify-center items-center -z-10">
    <div className="w-[24rem] h-[20rem] bg-[#fa8072] rounded-[2rem]" />
  </div>

  {/* Image + floating description */}
  <div className="relative w-full max-w-lg">
    <img
      src={items[selected].img}
      alt={items[selected].title}
      className="w-full h-auto max-h-[36rem] object-contain"
    />

    {/* Description box on right center */}
    <div className="absolute w-40 top-1/2 text-sm left-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg px-3 py-2  text-gray-900 border border-gray-200 max-w-sm">
      {items[selected].desc}
    </div>
  </div>

 </div>
  </div>
</section>

  );
}

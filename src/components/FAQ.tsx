import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "@/styles/globals.css";

const faqs: { q: string; a: string }[] = [
  {
    q: "Fregie nedir ve ne işe yarar?",
    a: "Fregie, market ürünlerinin barkodunu okutarak içindekileri analiz etmeni sağlar. Sana özel tercih ettiğin beslenme türüne göre ürünün uygun olup olmadığını hemen gösterir."
  },
  {
    q: "Şu anda hangi diyetleri destekliyor?",
    a: "Fregie şu anda yalnızca vegan ve vejetaryen beslenme tercihlerine göre çalışır. Yakında ketojenik, glütensiz gibi diğer diyet destekleri de eklenecek."
  },
  {
    q: "Alerjen filtreleme özelliği var mı?",
    a: "Evet, Fregie ile süt, yumurta, fındık, soya gibi yaygın alerjenleri seçerek içeriğinde bulunan ürünleri anında görebilirsin."
  },
  {
    q: "İnternetsiz çalışır mı?",
    a: "Hayır, şu an için Fregie internet bağlantısı olmadan çalışmaz. Ürün içerik bilgileri gerçek zamanlı olarak veri tabanından alınmaktadır."
  },
  {
    q: "Tarama işlemi ne kadar hızlı?",
    a: "Barkodu okuttuktan sonra saniyeler içinde analiz yapılır ve ürünün sana uygun olup olmadığı renkli simgelerle gösterilir."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white   max-w-screen-xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: Heading and subheading */}
          <div>
  <p className="text-lg font-medium mb-2 text-gray-900">SSS'ye Hoş Geldin!</p>
  <h2 className="text-5xl font-bold mb-4 text-gray-900 leading-tight">
  <span className="text-[#fa8072]">fregie</span> Hakkında<br />Merak Ettiklerin
  </h2>
</div>

          {/* Right column: FAQ accordion */}
          <div className="divide-y divide-gray-200">
            {faqs.map((f, idx) => (
              <div key={f.q}>
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900 cursor-pointer  ">{f.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="pb-6 pr-8 text-gray-600   text-base">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
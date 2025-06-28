import { ScanLine, Star, HeartHandshake } from "lucide-react";

const stats = [
  {
    label: "5.000+ Ürün Tarandı",
    desc: "Fregie kullanıcıları şimdiye kadar 5 binden fazla ürünün içeriğini inceledi.",
    icon: <ScanLine className="w-6 h-6 text-[#fa8072]" />,
  },
  {
    label: "%97 Uyum Oranı",
    desc: "Taradığınız ürünlerde tercihlerinize göre hızlı ve doğru analiz sunuyoruz.",
    icon: <Star className="w-6 h-6 text-[#fa8072]" />,
  },
  {
    label: "Her Gün Yeni Ürünler",
    desc: "Veritabanımız sürekli güncelleniyor. Her geçen gün daha fazla ürün desteği.",
    icon: <HeartHandshake className="w-6 h-6 text-[#fa8072]" />,
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white max-w-screen-xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
          <div>
            <button className="px-4 py-2 mb-4 rounded-full border border-gray-300 text-gray-700 flex items-center gap-2 text-sm font-medium">
              <span className="inline-block w-3 h-3 rounded-full border border-gray-400 mr-2" />
              Neden fregie?
            </button>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
  <span className="text-[#fa8072]">fregie</span> Güvenilirliğiyle<br />Taradığın Her Ürünü Tanı
</h2>


          </div>
          <p className="text-lg text-gray-500 max-w-xl md:text-right">
  Gıda içeriklerini anlamak artık daha kolay. Fregie ile binlerce ürünü analiz ettik; her taramada kullanıcı tercihlerine göre akıllı sonuçlar sunduk.
</p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-gray-100 rounded-2xl p-8 flex flex-col items-start  "
            >
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full border border-[#fa8072]">
                {s.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{s.label}</div>
              <div className="text-gray-600 text-base">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
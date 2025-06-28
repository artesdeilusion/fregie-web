import "@/styles/globals.css"
import Link from "next/link";

export default function Showcase() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
  <div>
        <div className="max-w-lg space-y-6 md:max-w-none">
        <h4 className="text-lg  text-gray-500  ">
        Fregie, karmaşık içerik listelerini sizin yerinize çözümler.


          </h4>
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          📦 İçindekiler Listesi Artık Gizemli Değil


          </h2>

          <p className="mt-4 text-xl text-gray-700">
          Tatlandırıcılar, katkı maddeleri, hayvansal içerikler... Ürünü tarayın, Fregie neyin ne olduğunu size sade bir dille anlatsın. 


          </p>

         <div className=" py-4">
         <Link href="/download" className="px-6 py-3   rounded-full bg-black text-white hover:bg-gray-700      ">
          Uygulamayı edin
        </Link>
         </div>
        
        </div>
      </div>

      <div>
        <img
          src="/images/about/1.jpg"
          className="rounded-4xl"
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="pt-12 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
      <div className="max-w-lg space-y-6 md:max-w-none">
      <h4 className="text-lg  text-gray-500  ">
        Fregie, karmaşık içerik listelerini sizin yerinize çözümler.


          </h4>
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Güvenli Alışveriş, Sağlıklı Çocuklar



          </h2>
          <p className="mt-4 text-xl text-gray-700">
          Her ürünün içeriğini saniyeler içinde tarayın; süt, gluten, yumurta gibi yaygın alerjenleri tespit edin. Ailenizin sağlığı için alışveriş yaparken daha bilinçli kararlar verin.


          </p>
          <div className=" py-4">
         <Link href="/download" className="px-6 py-3   rounded-full bg-black text-white hover:bg-gray-700      ">
          Uygulamayı edin
        </Link>
         </div>

        </div>
      </div>

      <div className="sm:order-first ">
        <img
          src="/images/about/2.jpg"
          className="rounded-4xl"
          alt=""
        />
      </div>
    </div>
  </div>

</section>
  );
}


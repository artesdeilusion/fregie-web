import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-40 bg-white px-4 ">
      <div className="container max-w-xl mx-auto  text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900  ">Ne yediğini <br /> bilmen gerek!</h1>
        <p className="text-lg font-light md:text-xl mb-8 text-gray-600  ">
Saniyeler içinde ürün içeriğini analiz et, kişisel tercih ve diyetine uygun olup olmadığını hemen öğren.

        </p>
        <Link href="/download" className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-700      ">
          Uygulamayı edin
        </Link>
        
      </div>
      <img src="/images/mobile-phone.png" alt="Sonic Speaker" className="mx-auto mt-12 w-full max-w-md" />
    </section>
  );
}

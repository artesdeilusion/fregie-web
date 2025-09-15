import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8  ">
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto   lg:max-w-none text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">fregie</h3>
            <p className="mt-4 text-gray-500 text-left lg:text-lg">
              Akıllı barkod tarayıcımızla sağlıklı beslenme seçimlerini kolaylaştırıyoruz. 
              Tara, öğren ve diyetine ve alerjilerine uygun olanı seç.
            </p>

            <div className="mt-6 flex justify-start">
              <img
                src="/images/app-store-badge.svg"
                alt="App Store'dan İndir"
                className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-2">
            <div>
              <strong className="font-medium text-gray-900"> Yasal </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link className="text-gray-700 transition hover:text-gray-700/75" href="/privacy"> Gizlilik Politikası </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-gray-700/75" href="/tos">
                    Kullanım Şartları
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> İletişim </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="mailto:hello@fregie.com"> info@artesdeilusion.com </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="https://instagram.com/fregieapp"> Instagram </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-8 border-t border-gray-100 pt-8">
          <p className="text-left text-xs/relaxed text-black">
            © Copyright 2025 Coddin Technologies. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

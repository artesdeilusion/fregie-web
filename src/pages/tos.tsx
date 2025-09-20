import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Kullanım Şartları - fregie</title>
        <meta name="description" content="fregie uygulamasının kullanım şartları. Hizmet kullanım koşullarını, haklarınızı ve yasal sorumlulukları öğrenin. Detaylı kullanım şartları." />
        <meta name="keywords" content="kullanım şartları, hizmet koşulları, yasal haklar, fregie, kullanım politikası" />
        <meta name="robots" content="noindex" />


        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fregie.app/tos" />
        <meta property="og:title" content="Kullanım Şartları - fregie" />
        <meta property="og:description" content="fregie uygulamasının kullanım şartları ve hizmet koşulları." />
        <meta property="og:image" content="https://fregie.app/images/tos-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://fregie.app/tos" />
        <meta property="twitter:title" content="Kullanım Şartları - fregie" />
        <meta property="twitter:description" content="Hizmet kullanım koşulları ve yasal haklar." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="fregie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fa8072" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fregie.app/tos" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Kullanım Şartları",
              "description": "fregie uygulamasının kullanım şartları",
              "url": "https://fregie.app/tos",
              "mainEntity": {
                "@type": "Article",
                "name": "fregie Kullanım Şartları",
                "description": "Hizmet kullanım koşulları ve yasal sorumluluklar hakkında detaylı bilgi",
                "publisher": {
                  "@type": "Organization",
                  "name": "Artes de Ilusion"
                },
                "datePublished": "2025-01-01",
                "dateModified": new Date().toISOString().split('T')[0]
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white text-black font-sans pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kullanım Şartları</h1>
            <p className="text-xl text-gray-600">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-green-600" />
                1. Genel Hükümler
              </h2>
              <p className="text-gray-700 mb-4">
                Bu Kullanım Şartları (&ldquo;Şartlar&rdquo;), fregie mobil uygulamasını (&ldquo;Uygulama&rdquo;) kullanımınızı düzenler. 
                Uygulamayı kullanarak bu şartları kabul etmiş sayılırsınız.
              </p>
              <p className="text-gray-700">
                fregie, Artes de Ilusion (&ldquo;Şirket&rdquo;, &ldquo;biz&rdquo;, &ldquo;bizim&rdquo;) tarafından işletilmektedir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">2. Hizmet Tanımı</h2>
              <p className="text-gray-700 mb-4">
                fregie, kullanıcıların ürün barkodlarını tarayarak besin değeri ve içerik bilgilerini 
                analiz etmelerine olanak sağlayan bir mobil uygulamadır. Hizmet şunları içerir:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Barkod tarama ve ürün tanıma</li>
                <li>Besin değeri ve içerik analizi</li>
                <li>Kişiselleştirilmiş diyet ve alerji uyarıları</li>
                <li>Ürün geçmişi ve favoriler</li>
                <li>Beslenme takibi ve raporlama</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">3. Kullanım Koşulları</h2>
              
              <h3 className="text-xl font-semibold mb-4">3.1 Uygun Kullanım</h3>
              <p className="text-gray-700 mb-4">
                Uygulamayı yalnızca yasal ve uygun amaçlar için kullanmalısınız. Aşağıdaki kullanımlar yasaktır:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Yasadışı faaliyetler için kullanım</li>
                <li>Başkalarının haklarını ihlal eden kullanım</li>
                <li>Uygulamanın güvenliğini tehdit eden kullanım</li>
                <li>Spam veya zararlı içerik yayma</li>
                <li>Uygulamanın çalışmasını engelleme</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">3.2 Hesap Sorumluluğu</h3>
              <p className="text-gray-700 mb-4">
                Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi kimseyle paylaşmayın ve 
                hesabınızda şüpheli aktivite fark ederseniz derhal bizi bilgilendirin.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                4. Sorumluluk Reddi
              </h2>
              <p className="text-gray-700 mb-4">
                fregie, sağlık ve beslenme konularında bilgilendirme amaçlı bir araçtır. 
                Aşağıdaki önemli uyarıları dikkate alın:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Uygulama tıbbi tavsiye yerine geçmez</li>
                <li>Ciddi alerjiler için mutlaka doktorunuza danışın</li>
                <li>Ürün bilgileri değişebilir, her zaman etiketi kontrol edin</li>
                <li>Beslenme kararlarınızda kendi sorumluluğunuzdadır</li>
              </ul>
              <p className="text-gray-700">
                Şirket, uygulama kullanımından doğabilecek herhangi bir zarardan sorumlu değildir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">5. Fikri Mülkiyet Hakları</h2>
              <p className="text-gray-700 mb-4">
                fregie uygulaması ve tüm içeriği, Şirket&apos;in fikri mülkiyetidir. 
                Aşağıdaki haklar korunmaktadır:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Telif hakkı korumalı içerik</li>
                <li>Ticari markalar ve logolar</li>
                <li>Patentli teknolojiler</li>
                <li>Ticari sırlar ve gizli bilgiler</li>
              </ul>
              <p className="text-gray-700">
                Bu içerikleri izinsiz kullanmak, kopyalamak veya dağıtmak yasaktır.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">6. Gizlilik</h2>
              <p className="text-gray-700 mb-4">
                Kişisel verilerinizin toplanması, kullanılması ve korunması, 
                ayrı bir Gizlilik Politikası ile düzenlenmiştir. 
                Bu şartları kabul ederek, Gizlilik Politikamızı da kabul etmiş sayılırsınız.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">7. Hizmet Değişiklikleri</h2>
              <p className="text-gray-700 mb-4">
                Şirket, uygulamayı herhangi bir zamanda değiştirme, güncelleme veya 
                durdurma hakkını saklı tutar. Önemli değişiklikler önceden bildirilecektir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">8. Hesap Sonlandırma</h2>
              <p className="text-gray-700 mb-4">
                Aşağıdaki durumlarda hesabınız sonlandırılabilir:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Bu şartların ihlali</li>
                <li>Uygunsuz kullanım</li>
                <li>Uzun süreli inaktivite</li>
                <li>Yasal zorunluluk</li>
              </ul>
              <p className="text-gray-700">
                Hesap sonlandırıldığında, verileriniz 30 gün içinde silinir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">9. Sınırlı Garanti</h2>
              <p className="text-gray-700 mb-4">
                Uygulama &ldquo;olduğu gibi&rdquo; sunulur. Şirket, uygulamanın kesintisiz, 
                hatasız veya güvenli olacağını garanti etmez.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">10. Sorumluluk Sınırlaması</h2>
              <p className="text-gray-700 mb-4">
                Şirket&apos;in sorumluluğu, kullanıcının ödediği ücretle sınırlıdır. 
                Dolaylı, özel, tesadüfi veya sonuçsal zararlardan sorumlu değildir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">11. Uyuşmazlık Çözümü</h2>
              <p className="text-gray-700 mb-4">
                Bu şartlardan doğan uyuşmazlıklar, Türkiye Cumhuriyeti mahkemelerinde 
                çözülecektir. Türk hukuku uygulanacaktır.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">12. Şartların Değiştirilmesi</h2>
              <p className="text-gray-700 mb-4">
                Bu şartları zaman zaman güncelleyebiliriz. Değişiklikler uygulama içinde 
                bildirilecek ve web sitemizde yayınlanacaktır. Kullanıma devam etmek, 
                güncellenmiş şartları kabul ettiğiniz anlamına gelir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                13. Kabul ve Onay
              </h2>
              <p className="text-gray-700 mb-4">
                Uygulamayı kullanarak bu Kullanım Şartlarını kabul etmiş sayılırsınız. 
                Kabul etmiyorsanız, uygulamayı kullanmayın.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">14. İletişim</h2>
              <p className="text-gray-700 mb-4">
                Bu Kullanım Şartları hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-posta:</strong>info@fregie.app<br />
                 </p>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;

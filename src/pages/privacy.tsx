import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası - fregie | Kişisel Verilerinizin Korunması</title>
        <meta name="description" content="fregie uygulamasının gizlilik politikası. Kişisel verilerinizin nasıl korunduğunu, toplandığını ve kullanıldığını öğrenin. KVKK uyumlu." />
        <meta name="keywords" content="gizlilik politikası, kişisel veri koruması, KVKK, fregie, veri güvenliği" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fregie.app/privacy" />
        <meta property="og:title" content="Gizlilik Politikası - fregie" />
        <meta property="og:description" content="fregie uygulamasının gizlilik politikası. Kişisel verilerinizin korunması." />
        <meta property="og:image" content="https://fregie.app/images/privacy-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://fregie.app/privacy" />
        <meta property="twitter:title" content="Gizlilik Politikası - fregie" />
        <meta property="twitter:description" content="Kişisel verilerinizin korunması hakkında bilgi." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="fregie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fa8072" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fregie.app/privacy" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Gizlilik Politikası",
              "description": "fregie uygulamasının gizlilik politikası",
              "url": "https://fregie.app/privacy",
              "mainEntity": {
                "@type": "Article",
                "name": "fregie Gizlilik Politikası",
                "description": "Kişisel verilerinizin korunması ve kullanımı hakkında detaylı bilgi",
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
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gizlilik Politikası</h1>
            <p className="text-xl text-gray-600">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                1. Giriş
              </h2>
              <p className="text-gray-700 mb-4">
                fregie (&ldquo;biz&rdquo;, &ldquo;bizim&rdquo; veya &ldquo;uygulama&rdquo;) olarak, kullanıcılarımızın gizliliğine saygı duyuyoruz. 
                Bu Gizlilik Politikası, fregie mobil uygulamasını kullandığınızda toplanan, kullanılan ve korunan 
                bilgileri açıklar.
              </p>
              <p className="text-gray-700">
                Bu politikayı kabul ederek, belirtilen şekilde bilgilerinizi toplamamıza ve kullanmamıza izin veriyorsunuz.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-600" />
                2. Topladığımız Bilgiler
              </h2>
              
              <h3 className="text-xl font-semibold mb-4">2.1 Kişisel Bilgiler</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Ad ve soyad</li>
                <li>E-posta adresi</li>
                <li>Telefon numarası (isteğe bağlı)</li>
                <li>Doğum tarihi (isteğe bağlı)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2.2 Sağlık ve Diyet Bilgileri</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Alerjiler ve hassasiyetler</li>
                <li>Diyet tercihleri (vejetaryen, vegan, vb.)</li>
                <li>Sağlık hedefleri</li>
                <li>Beslenme kısıtlamaları</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2.3 Kullanım Verileri</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Taranan barkodlar</li>
                <li>Ürün arama geçmişi</li>
                <li>Uygulama kullanım istatistikleri</li>
                <li>Cihaz bilgileri (model, işletim sistemi)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                3. Bilgilerin Kullanımı
              </h2>
              <p className="text-gray-700 mb-4">
                Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Uygulamanın temel işlevlerini sağlamak</li>
                <li>Kişiselleştirilmiş ürün önerileri sunmak</li>
                <li>Alerji ve diyet uyarıları vermek</li>
                <li>Hizmet kalitesini iyileştirmek</li>
                <li>Müşteri desteği sağlamak</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">4. Bilgi Paylaşımı</h2>
              <p className="text-gray-700 mb-4">
                Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız, ancak aşağıdaki durumlar hariç:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Açık rızanızla</li>
                <li>Yasal zorunluluk durumunda</li>
                <li>Hizmet sağlayıcılarımızla (veri işleme sözleşmeleri kapsamında)</li>
                <li>İş transferi durumunda</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">5. Veri Güvenliği</h2>
              <p className="text-gray-700 mb-4">
                Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanırız:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>SSL/TLS şifreleme</li>
                <li>Güvenli veri depolama</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Erişim kontrolü ve kimlik doğrulama</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">6. Veri Saklama</h2>
              <p className="text-gray-700 mb-4">
                Kişisel verilerinizi, hizmet sağlamak için gerekli olduğu sürece saklarız. 
                Hesabınızı sildiğinizde, verileriniz 30 gün içinde kalıcı olarak silinir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">7. Kullanıcı Hakları</h2>
              <p className="text-gray-700 mb-4">
                KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Kişisel verilerinize erişim hakkı</li>
                <li>Verilerinizin düzeltilmesi hakkı</li>
                <li>Verilerinizin silinmesi hakkı</li>
                <li>İşlemeye itiraz etme hakkı</li>
                <li>Veri taşınabilirliği hakkı</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">8. Çerezler ve Takip Teknolojileri</h2>
              <p className="text-gray-700 mb-4">
                Uygulamamız, kullanıcı deneyimini iyileştirmek için çerezler ve benzer teknolojiler kullanabilir. 
                Bu teknolojiler, kullanım istatistiklerini toplamak ve uygulama performansını iyileştirmek için kullanılır.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">9. Çocukların Gizliliği</h2>
              <p className="text-gray-700 mb-4">
                fregie, 13 yaşından küçük çocuklardan bilerek kişisel bilgi toplamaz. 
                13 yaşından küçük bir çocuk bize kişisel bilgi verirse, bu bilgileri derhal sileriz.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">10. Politika Değişiklikleri</h2>
              <p className="text-gray-700 mb-4">
                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda, 
                uygulama içinde bildirim gönderecek ve web sitemizde güncel versiyonu yayınlayacağız.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">11. İletişim</h2>
              <p className="text-gray-700 mb-4">
                Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-posta:</strong> privacy@fregie.com<br />
                  <strong>Adres:</strong> [Şirket Adresi]<br />
                  <strong>Telefon:</strong> [Telefon Numarası]
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

export default PrivacyPolicy;

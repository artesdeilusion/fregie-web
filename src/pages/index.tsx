import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Section } from 'lucide-react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import FAQ from '@/components/FAQ';
import ProductShowcase from '@/components/ProductShowcase';
import Stats from '@/components/Stats';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FregieWebsite = () => {
   const heroRef = useScrollAnimation();
  const preferencesRef = useScrollAnimation();
  const productRef = useScrollAnimation();
  const showcaseRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  

  const getAnimationClass = (isVisible: boolean, scrollDirection: 'up' | 'down') => {
    if (!isVisible) {
      return scrollDirection === 'down' 
        ? 'translate-y-20 opacity-0 blur-sm' 
        : '-translate-y-20 opacity-0 blur-sm';
    }
    return 'translate-y-0 opacity-100 blur-0';
  };

  return (
    <>
      <Head>
        <title>fregie app</title>
        <meta name="description" content="fregie ile ürün barkodlarını tarayın, içerikleri analiz edin ve diyetinize uygun beslenme seçimleri yapın. Alerjilerinizi ve beslenme tercihlerinizi koruyun." />
        <meta name="keywords" content="barkod tarayıcı, sağlıklı beslenme, alerji kontrolü, diyet takibi, besin analizi, fregie, mobil uygulama" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fregie.app/" />
        <meta property="og:title" content="fregie - Akıllı Barkod Tarayıcı | Sağlıklı Beslenme Kolaylaşır" />
        <meta property="og:description" content="fregie ile ürün barkodlarını tarayın, içerikleri analiz edin ve diyetinize uygun beslenme seçimleri yapın." />
        <meta property="og:image" content="https://fregie.app/images/og-image.jpg" />
        <meta property="og:site_name" content="fregie" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fregie.app/" />
        <meta property="twitter:title" content="fregie - Akıllı Barkod Tarayıcı" />
        <meta property="twitter:description" content="Sağlıklı beslenme seçimlerini kolaylaştıran akıllı barkod tarayıcı uygulaması." />
        <meta property="twitter:image" content="https://fregie.app/images/twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="fregie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fa8072" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="fregie" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fregie.app/" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "fregie",
              "description": "Akıllı barkod tarayıcı ile sağlıklı beslenme seçimlerini kolaylaştıran mobil uygulama",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "TRY"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Artes de Ilusion"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white text-black font-sans relative">
        {/* Bottom blur effect */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        
        <div 
          ref={heroRef.ref}
          className={`transition-all duration-1000 transform relative pt-20 ${
            getAnimationClass(heroRef.isVisible, heroRef.scrollDirection)
          }`}
        >
          {/* Floating fruits for hero - positioned on borders */}
          <div className="fixed top-20 right-4 w-32 h-32 opacity-20 ">
            <img src="/images/fruits/ananas_lime.png" alt="Watermelon" className="w-full h-full object-contain" />
          </div>
          <div className="fixed top-40 left-4 w-24 h-24 opacity-15">
            <img src="/images/fruits/lime.png" alt="Lime" className="w-full h-full object-contain" />
          </div>
          <Hero />
        </div>

        <section 
          id="about"
          ref={preferencesRef.ref}
          className={`bg-[#fafafa] py-28 transition-all duration-1000 transform relative ${
            getAnimationClass(preferencesRef.isVisible, preferencesRef.scrollDirection)
          }`}
        >
          
          <div className="mx-auto   px-4 text-center font-black text-3xl sm:text-4xl md:text-5xl leading-snug space-y-4  ">
    {/* Satır 1 */}
    <div className="inline-flex flex-wrap justify-center items-center gap-4">
      <span>Tercihlerini</span>
      <span className="inline-flex   items-center justify-center bg-black rounded-full p-4 sm:p-5">
        <img
          src="/images/cart.png"
          alt="Analiz"
          className="w-6 h-6 sm:w-10 sm:h-10"
        />
      </span>
      <span>belirle.</span>
       <span>Barkodu tarat</span>
      <span className="inline-flex items-center justify-center bg-black rounded-full p-4 sm:p-5">
        <img
          src="/images/white_barcode.png"
          alt="Barkod"
          className="w-6 h-6 sm:w-10 sm:h-10"
        />
      </span>
      <span>fregie içindekileri</span>
       <span className="inline-flex  items-center justify-center bg-black rounded-full p-4 sm:p-5">
        <img
          src="/images/dart.png"
          alt="Analiz"
          className="w-6 h-6 sm:w-10 sm:h-10"
        />
      </span>
      <span>analiz etsin.</span>
    </div>
  </div>
        </section>

        <div 
          id="how"
          ref={productRef.ref}
          className={`transition-all duration-1000 transform relative ${
            getAnimationClass(productRef.isVisible, productRef.scrollDirection)
          }`}
        >
          
          <ProductShowcase />
        </div>

        <div 
                id="why"

          ref={showcaseRef.ref}
          className={`transition-all duration-1000 transform relative ${
            getAnimationClass(showcaseRef.isVisible, showcaseRef.scrollDirection)
          }`}
        >
          {/* Floating fruits for showcase - positioned on borders */}
          <div className="fixed top-140 right-4 w-28 h-28 opacity-20 ">
            <img src="/images/fruits/grapefruit.png" alt="Grapefruit" className="w-full h-full object-contain" />
          </div>
          <div className="fixed top-160 left-4 w-20 h-20 opacity-15">
            <img src="/images/fruits/ananas_lime.png" alt="Pineapple Lime" className="w-full h-full object-contain" />
          </div>
          <Showcase />
        </div>

        <div 
          ref={statsRef.ref}
          className={`transition-all duration-1000 transform relative ${
            getAnimationClass(statsRef.isVisible, statsRef.scrollDirection)
          }`}
        >
          {/* Floating fruits for stats - positioned on borders */}
          <div className="fixed top-180 right-4 w-20 h-20 opacity-25">
            <img src="/images/fruits/watermelon.png" alt="Watermelon" className="w-full h-full object-contain" />
          </div>
          <div className="fixed top-200 left-4 w-24 h-24 opacity-20">
            <img src="/images/fruits/lime.png" alt="Lime" className="w-full h-full object-contain" />
          </div>
          <Stats />
        </div>
   
           <div id='faq' ref={faqRef.ref}>
     <FAQ />

           </div>
         
        </div>
     </>
    );
  };

  export default FregieWebsite;
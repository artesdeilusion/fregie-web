import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const DownloadPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Set tracking cookie
    const setTrackingCookie = () => {
      const now = new Date();
      const expiryDate = new Date(now.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year
      document.cookie = `download_visit=${now.getTime()}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    };

    // Track IP and redirect to App Store
    const trackAndRedirect = async () => {
      try {
        // Set cookie for tracking
        setTrackingCookie();

        // Get IP address (you can use a service like ipapi.co or similar)
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        
        // Log IP for analytics (you can send this to your analytics service)
        console.log('Download page visited from IP:', ipData.ip);
        
        // You can send this data to your analytics endpoint
        // await fetch('/api/track-download', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ 
        //     ip: ipData.ip, 
        //     userAgent: navigator.userAgent,
        //     timestamp: new Date().toISOString(),
        //     referrer: document.referrer
        //   })
        // });

        // Redirect to App Store after a short delay
        setTimeout(() => {
          // App Store URL for fregie app (replace with your actual App Store URL)
          window.location.href = 'https://apps.apple.com/app/fregie/id123456789';
        }, 1000);

      } catch (error) {
        console.error('Error tracking download:', error);
        // Fallback redirect even if tracking fails
        setTimeout(() => {
          window.location.href = 'https://apps.apple.com/app/fregie/id123456789';
        }, 1000);
      }
    };

    trackAndRedirect();
  }, []);

  return (
    <>
      <Head>
        <title>fregie İndir - App Store'dan Ücretsiz İndirin | Akıllı Barkod Tarayıcı</title>
        <meta name="description" content="fregie uygulamasını App Store'dan indirin. Akıllı barkod tarayıcı ile sağlıklı beslenme seçimlerini kolaylaştırın. Alerjilerinizi kontrol edin." />
        <meta name="keywords" content="fregie indir, barkod tarayıcı indir, sağlıklı beslenme uygulaması, app store" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fregie.app/download" />
        <meta property="og:title" content="fregie İndir - App Store'dan Ücretsiz İndirin" />
        <meta property="og:description" content="fregie uygulamasını App Store'dan indirin. Akıllı barkod tarayıcı ile sağlıklı beslenme seçimlerini kolaylaştırın." />
        <meta property="og:image" content="https://fregie.app/images/download-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fregie.app/download" />
        <meta property="twitter:title" content="fregie İndir - App Store'dan Ücretsiz İndirin" />
        <meta property="twitter:description" content="Akıllı barkod tarayıcı uygulamasını indirin." />
        <meta property="twitter:image" content="https://fregie.app/images/download-twitter.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="fregie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fa8072" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fregie.app/download" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "fregie İndir",
              "description": "fregie uygulamasını App Store'dan indirin",
              "url": "https://fregie.app/download",
              "mainEntity": {
                "@type": "MobileApplication",
                "name": "fregie",
                "applicationCategory": "HealthApplication",
                "operatingSystem": "iOS",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "TRY"
                }
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white text-black font-sans pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-[#f6d1cd] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#fa8072]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">fregie İndiriliyor</h1>
          <p className="text-gray-600 mb-8">
            App Store'a yönlendiriliyorsunuz...
          </p>
          
          <div className="animate-pulse">
            <div className="w-8 h-8 border-4 border-[#fa8072] border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Otomatik yönlendirme çalışmazsa, 
            <a 
              href="https://apps.apple.com/app/fregie/id123456789" 
              className="text-[#fa8072] hover:underline ml-1"
            >
              buraya tıklayın
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default DownloadPage;

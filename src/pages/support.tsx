import Head from 'next/head'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support • Fregie</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-white text-black font-sans pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Destek</h1>
            <p className="text-xl text-gray-600">Sorularınız için bize e‑posta ile ulaşın.</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">İletişim</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>E‑posta:</strong>{' '}
                  <a href="mailto:info@artesdeilusion.com" target="_blank" className="text-blue-600 underline">
                    info@artesdeilusion.com
                  </a>
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
  )
}



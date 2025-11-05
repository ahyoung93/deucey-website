import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 bg-green-50">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-green-900 mb-6 tracking-tight">
            Strava for Tennis
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Track and share your tennis with friends.
          </p>

          {/* App Store Button */}
          <a
            href="https://apps.apple.com/app/id6747102781"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1234567890"
              alt="Download on the App Store"
              className="h-14 sm:h-16"
            />
          </a>
        </div>

        {/* App Video */}
        <div className="mt-12 flex flex-col items-center">
          <div className="relative w-48 sm:w-56">
            <div className="aspect-[9/19.5] bg-gray-900 rounded-[2rem] shadow-xl border-4 border-gray-900 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/demo.mov" type="video/mp4" />
                {/* Fallback */}
                <div className="w-full h-full bg-gradient-to-br from-deucey-green to-green-700 flex items-center justify-center text-white font-semibold text-sm">
                  Video not supported
                </div>
              </video>
            </div>
          </div>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/deucey.app?igsh=aDlxOW44aHFjejhl&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-deucey-green hover:text-green-800 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              © 2025 Lacertus Capital Inc. All rights reserved.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-deucey-green transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-deucey-green transition-colors">
                Terms of Service
              </a>
              <a href="mailto:support@deuceyapp.com" className="text-gray-600 hover:text-deucey-green transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

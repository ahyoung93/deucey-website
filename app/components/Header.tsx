export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-50/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <a href="/" className="inline-block">
          <img
            src="/logo.png"
            alt="Deucey"
            className="h-12 w-auto"
          />
        </a>
      </div>
    </header>
  );
}

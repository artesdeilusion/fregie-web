import Link from "next/link";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="navbar bg-white backdrop-blur-sm fixed left-0 right-0 z-[12]">
      <div className="relative max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/">
          <div className="text-2xl font-bold text-black">fregie</div>
        </Link>

        {/* Center: Absolutely centered nav */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-200">
            ne?
          </a>
          <a href="#how" className="text-gray-700 hover:text-black transition-colors duration-200">
            nasıl?
          </a>
          <a href="#why" className="text-gray-700 hover:text-black transition-colors duration-200">
            neden?
          </a>
          <a href="#faq" className="text-gray-700 hover:text-black transition-colors duration-200">
            sss
          </a>
        </nav>

        {/* Right: Button */}
        <Link href="/download" className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-700      ">
          Uygulamayı edin
        </Link>
      </div>
    </header>
  );
}

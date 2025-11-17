import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-black tracking-[-0.02em] text-xl md:text-2xl">
            <span className="inline-block bg-red-600 text-white px-2 py-1 mr-2">FLUX</span>
            RECORDINGS
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="#releases" className="hover:opacity-60 transition">Releases</a>
            <a href="#artists" className="hover:opacity-60 transition">Artists</a>
            <a href="#about" className="hover:opacity-60 transition">About</a>
            <a href="/test" className="hover:opacity-60 transition">Test</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 border border-black/20">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

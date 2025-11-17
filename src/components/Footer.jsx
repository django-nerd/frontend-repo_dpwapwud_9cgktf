export default function Footer() {
  return (
    <footer id="about" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h3 className="text-2xl font-black tracking-tight">About</h3>
            <p className="mt-4 text-black/70 max-w-xl">
              Founded in 2017, Flux Recordings is a Zürich-based imprint focused on minimal forms, precision engineering, and timeless design. We release music that rewards deep listening.
            </p>
          </div>
          <div className="md:col-span-5">
            <h3 className="text-2xl font-black tracking-tight">Newsletter</h3>
            <form id="newsletter" className="mt-4 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full border border-black/20 px-4 py-3 placeholder-black/40 focus:outline-none focus:border-black" />
              <button className="px-5 bg-black text-white uppercase tracking-widest text-sm border border-black hover:bg-white hover:text-black transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between text-xs uppercase tracking-widest text-black/60">
          <p>© {new Date().getFullYear()} Flux Recordings</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-60">Bandcamp</a>
            <a href="#" className="hover:opacity-60">Spotify</a>
            <a href="#" className="hover:opacity-60">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

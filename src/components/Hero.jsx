export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-24 md:py-36 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Precision sound.
              <br />
              Swiss design.
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg text-black/70">
              An independent label crafting forward-thinking electronic music with grid-level attention to detail.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#releases" className="px-6 py-3 bg-black text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black border border-black transition-colors">
                Latest releases
              </a>
              <a href="#newsletter" className="px-6 py-3 bg-white text-black uppercase tracking-widest text-sm border border-black hover:bg-black hover:text-white transition-colors">
                Join newsletter
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[3/4] w-full bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:24px_24px] bg-[position:0_0]" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />
    </section>
  )
}

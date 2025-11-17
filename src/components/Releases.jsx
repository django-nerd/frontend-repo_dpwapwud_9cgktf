const releases = [
  { id: 1, artist: 'KLEIN', title: 'Axis / Dial', cat: 'FLUX001', year: '2025' },
  { id: 2, artist: 'ÉTOILE', title: 'Cold Signal', cat: 'FLUX002', year: '2025' },
  { id: 3, artist: 'RØ', title: 'Lattice Works', cat: 'FLUX003', year: '2025' },
  { id: 4, artist: 'NAGEL', title: 'Raster EP', cat: 'FLUX004', year: '2025' },
]

export default function Releases() {
  return (
    <section id="releases" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Releases</h2>
          <a href="#" className="text-sm uppercase tracking-widest hover:opacity-60">View all</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-black">
          {releases.map((r) => (
            <div key={r.id} className="bg-white p-8 flex items-center justify-between group">
              <div>
                <p className="text-xs uppercase tracking-widest text-black/60">{r.cat} · {r.year}</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">{r.artist}</h3>
                <p className="text-black/70">{r.title}</p>
              </div>
              <div className="h-24 w-24 border border-black/10 grid place-items-center group-hover:bg-black group-hover:text-white transition-colors">
                <span className="text-xs uppercase tracking-widest">Play</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

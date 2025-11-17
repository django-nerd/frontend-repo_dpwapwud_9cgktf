const artists = [
  { id: 1, name: 'KLEIN', role: 'Producer', origin: 'Zürich' },
  { id: 2, name: 'ÉTOILE', role: 'Composer', origin: 'Geneva' },
  { id: 3, name: 'RØ', role: 'Sound Designer', origin: 'Basel' },
  { id: 4, name: 'NAGEL', role: 'DJ', origin: 'Bern' },
]

export default function Artists() {
  return (
    <section id="artists" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Artists</h2>
          <a href="#" className="text-sm uppercase tracking-widest hover:opacity-60">View roster</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {artists.map((a) => (
            <div key={a.id} className="border border-black/10 p-6 hover:-translate-y-1 transition-transform">
              <div className="aspect-square mb-4 bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:12px_12px]" />
              <h3 className="font-black tracking-tight">{a.name}</h3>
              <p className="text-sm text-black/70">{a.role} — {a.origin}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

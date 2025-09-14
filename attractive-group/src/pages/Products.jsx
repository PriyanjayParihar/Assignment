import { motion } from 'framer-motion'
import { useState } from 'react'

const products = [
  'Outrun Pro+',
  'Outrun Pro',
  'Hawk Pro',
  'Cub Pro',
  'Electric Motorcycles',
  'Three-Wheelers',
  'Conversion Kits',
]

export default function Products() {
  const [active, setActive] = useState(0)
  return (
    <div className="container-px mx-auto">
      <h1 className="text-3xl font-bold mb-6">EV Mart (AAP ELECTRIC)</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="aspect-video rounded bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center">
            <motion.div
              key={active}
              initial={{ opacity: 0, rotate: -5, scale: 0.98 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="text-xl font-semibold"
            >
              360° View Placeholder — {products[active]}
            </motion.div>
          </div>
        </div>
        <div className="space-y-3">
          {products.map((name, i) => (
            <button
              key={name}
              onClick={() => setActive(i)}
              className={`w-full text-left px-4 py-3 rounded border transition ${
                active === i ? 'bg-primary text-slate-900 border-primary' : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <InfoCard title="Spare Parts & Exports" text="Bajaj, TVS, Hero, Honda and more with global distribution." />
        <InfoCard title="Tyre & Tube Manufacturing" text="Visual factory infographic and capacity details." />
      </div>
    </div>
  )
}

function InfoCard({ title, text }) {
  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} viewport={{ once: true }} className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{text}</p>
    </motion.div>
  )
}


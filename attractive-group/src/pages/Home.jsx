import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <div className="space-y-24">
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="container-px mx-auto min-h-[70vh] grid lg:grid-cols-2 items-center gap-10">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Attractive Group
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/80 text-lg"
            >
              Dynamic. Self-Reliant. Innovative. Since 1980 in Bhopal, India.
            </motion.p>
            <motion.a
              href="#journey"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary text-slate-950 font-semibold px-6 py-3 rounded shadow-lg shadow-primary/30"
            >
              Explore Our Journey
            </motion.a>
            <p className="text-sm text-white/60">Employees 100+ • Revenue $132k (FY 22-23) • Valuation $13.07M</p>
          </div>
          <motion.div style={{ y }} className="relative">
            <HeroArt />
          </motion.div>
        </div>
      </section>

      <section id="journey" className="container-px mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-white/20" />
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-6 md:pl-10 py-5"
            >
              <span className="absolute left-0 md:left-2 top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
              <p className="text-sm text-white/60">{item.year}</p>
              <p className="text-lg md:text-xl font-semibold">{item.title}</p>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function HeroArt() {
  return (
    <svg className="w-full max-w-xl mx-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#grad)" strokeWidth="3">
        <path d="M10 350 Q 200 300 300 360 T 590 350" opacity=".6"/>
        <motion.path d="M10 300 Q 200 250 300 310 T 590 300" opacity=".4" animate={{ pathLength: [0, 1] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}/>
      </g>
      <motion.rect x="120" y="80" width="360" height="160" rx="18" className="fill-white/5 stroke-white/10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} />
      <motion.circle cx="180" cy="260" r="28" className="fill-primary" animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
      <motion.circle cx="420" cy="260" r="28" className="fill-primary" animate={{ x: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
    </svg>
  )
}

const timeline = [
  { year: '1980', title: 'Founded by Mr. R.P. Asati (Bhopal, India)', desc: 'Started with Valuation Consultancy.' },
  { year: '1990s', title: 'TVS Dealership', desc: 'Expanded into retail and service excellence.' },
  { year: '2000s', title: 'Diversification', desc: 'Automobiles, Auto Parts, Motors, Rubbers.' },
  { year: '2010s', title: 'Exports & Manufacturing', desc: 'Tyre & Tube, international trade.' },
  { year: '2020s', title: 'EV Manufacturing', desc: 'AAP ELECTRIC: scooters, motorcycles, conversion kits.' },
]


import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container-px mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">About Us</h1>
        <p className="text-white/70">Owner: Mr. Apoorv Asati • Founded 1980 by Mr. R.P. Asati</p>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title} whileHover={{ rotateY: 180 }} className="[transform-style:preserve-3d] group h-28 bg-white/5 rounded border border-white/10 p-4">
                <div className="[backface-visibility:hidden]">
                  <p className="font-semibold">{v.title}</p>
                  <p className="text-sm text-white/60">{v.desc}</p>
                </div>
                <div className="absolute inset-0 grid place-items-center rotate-y-180 [backface-visibility:hidden] bg-primary/10 text-primary font-bold rounded">
                  {v.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Fast Facts</h2>
          <ul className="space-y-2 text-white/80">
            <li>Employees: 100+</li>
            <li>Revenue (FY 22-23): $132,000</li>
            <li>Group Valuation: $13.07 Million</li>
            <li>Capitalization: INR 60 Crores</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

const values = [
  { title: 'Integrity', desc: 'We do the right thing.' },
  { title: 'Responsibility', desc: 'We own our outcomes.' },
  { title: 'Excellence', desc: 'We raise the bar.' },
  { title: 'Pioneering', desc: 'We lead with innovation.' },
  { title: 'Unity', desc: 'We win as one.' },
]


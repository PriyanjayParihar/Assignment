import { motion } from 'framer-motion'

const phases = [
  { title: 'Phase 1', text: 'Expand EV Mart network across central India.' },
  { title: 'Phase 2', text: 'Scale exports and supply chain.' },
  { title: 'Phase 3', text: 'R&D for next-gen electric mobility.' },
]

export default function Vision() {
  return (
    <div className="container-px mx-auto">
      <h1 className="text-3xl font-bold mb-6">Vision & Future Plans</h1>
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded" />
        {phases.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative pl-6 md:pl-10 py-6">
            <span className="absolute left-0 md:left-2 top-7 h-4 w-4 rounded-full bg-white" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-white/70">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


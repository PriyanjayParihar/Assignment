import { motion } from 'framer-motion'

const entities = [
  'Attractive Automobiles',
  'Attractive Motors',
  'Attractive Overseas',
  'Attractive Auto Parts Pvt Ltd',
  'Attractive Automobiles LLP',
  'Attractive Rubbers',
]

export default function Entities() {
  return (
    <div className="container-px mx-auto">
      <h1 className="text-3xl font-bold mb-6">Group Entities</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {entities.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-black/20 hover:shadow-primary/20"
          >
            <div className="h-28 rounded bg-gradient-to-br from-primary/20 to-accent/20 mb-4" />
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-white/60">Explore operations, products and milestones.</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


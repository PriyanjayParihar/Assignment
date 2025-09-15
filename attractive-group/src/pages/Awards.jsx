import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const awards = [
  { title: 'MACAU 2015', desc: 'International recognition for excellence.' },
  { title: 'TVS Awards', desc: 'Dealership performance accolades.' },
  { title: 'National CSI Awards', desc: 'Customer satisfaction leadership.' },
]

export default function Awards() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % awards.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="container-px mx-auto">
      <h1 className="text-3xl font-bold mb-6">Awards & Achievements</h1>
      <div className="relative h-60 rounded-xl overflow-hidden bg-white/5 border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 grid place-items-center text-center p-6"
          >
            <div>
              <div className="h-28 w-28 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 mb-4" />
              <h3 className="text-xl font-bold">{awards[index].title}</h3>
              <p className="text-white/70">{awards[index].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}


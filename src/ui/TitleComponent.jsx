'use client'
import { motion } from 'framer-motion';

export default function TitleComponent() {
  return (
    <div className="flex flex-col w-1/2">
        <motion.h1
          className="text-6xl text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Viktor Klijn
        </motion.h1>
        <motion.p
          className="text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Een sociale 20-jarige software development student met een vleugje Deense charme, enthousiast om te ontdekken en te creëren.
        </motion.p>
      </div>
  )
}
'use client'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Hero.module.css'

const headlines = [
  "Simplify Taxes with TaxNirvana",
  "Make ITR feel like Nirvana ",
  "No more tax chaos. Just clarity.",
  "India’s chillest tax filing tool "
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % headlines.length)
    }, 2000) // 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero}>
      <AnimatePresence mode="wait">
      <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className={styles.title}
>
  <Typewriter
    words={[
      "Simplify Taxes with ",
      "Make ITR feel like ",
      "No more tax chaos. Just ",
      "India’s chillest tax filing tool: "
    ]}
    loop={0}
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
  <span className={styles.highlight}>TaxNirvana</span>
</motion.h1>

      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={styles.subtitle}
      >
        India's easiest ITR & GST filing platform. Built for peace of mind.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.cta}
      >
        Get Started
      </motion.button>
    </section>
  )
}

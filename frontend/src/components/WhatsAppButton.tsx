import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const PHONE = '917781855388' // country code + number, no +
const MESSAGE = encodeURIComponent("Hi Ashish! I came across your portfolio and would love to connect. 👋")

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const href = `https://wa.me/${PHONE}?text=${MESSAGE}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center gap-2 bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Chat with me on WhatsApp
            {/* Arrow */}
            <span className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bc5c] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-colors"
      >
        <FaWhatsapp size={30} />
        {/* Online ping */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-green-300 border-2 border-white animate-ping" />
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
      </motion.a>
    </div>
  )
}

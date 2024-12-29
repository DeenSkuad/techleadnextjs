'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TabContent {
  title: string
  content: string
}

export function Tabs({ content }: { content: Record<string, TabContent> }) {
  const [activeTab, setActiveTab] = useState(Object.keys(content)[0])

  return (
    <section>
      <div>
        {Object.entries(content).map(([id, tab]) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`
              relative px-4 py-2 text-sm font-medium transition-colors
              ${activeTab === id ? 'text-foreground' : 'text-muted-foreground'}
            `}
          >
            {tab.title}
            {activeTab === id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500"
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-8 text-center"
      >
        <p>{content[activeTab].content}</p>
      </motion.div>
    </section>
  )
} 
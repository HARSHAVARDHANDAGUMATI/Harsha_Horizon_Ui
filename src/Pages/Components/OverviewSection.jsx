import { motion } from 'framer-motion'
import StatCard from '../../Components/Cards/StatCard'

function OverviewSection({ stats }) {
  return (
    <div className="dashboard-grid">
      {stats.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04 }}
        >
          <StatCard {...item} />
        </motion.div>
      ))}
    </div>
  )
}

export default OverviewSection

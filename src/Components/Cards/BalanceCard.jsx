import { formatCurrency } from '../../Utils/formatters'
import Card from '../UI/Card'
import Button from '../UI/Button'

function BalanceCard({ total = 25000, growth = 23.4 }) {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-400 p-6 text-white">
      <p className="text-sm font-medium text-white/80">Business design</p>
      <p className="mt-5 text-sm font-medium text-white/70">Total balance</p>
      <h3 className="mt-1 font-display text-4xl font-extrabold">
        {formatCurrency(total)}
      </h3>
      <p className="mt-3 text-sm text-white/80">
        Increased by {growth}% this month.
      </p>
      <Button variant="secondary" className="mt-6 bg-white text-brand-600 hover:bg-white/90">
        Top up balance
      </Button>
    </Card>
  )
}

export default BalanceCard

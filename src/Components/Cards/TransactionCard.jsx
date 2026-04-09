import Card from '../UI/Card'

function TransactionCard({ title, amount, time, positive = true }) {
  return (
    <Card className="flex items-center justify-between p-4">
      <div>
        <p className="font-bold text-[var(--text)]">{title}</p>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{time}</p>
      </div>
      <p className={`font-display text-lg font-bold ${positive ? 'text-emerald-500' : 'text-rose-500'}`}>
        {amount}
      </p>
    </Card>
  )
}

export default TransactionCard

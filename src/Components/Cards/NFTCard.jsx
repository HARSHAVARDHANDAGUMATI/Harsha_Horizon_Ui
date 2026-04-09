import { MdFavoriteBorder } from 'react-icons/md'
import Button from '../UI/Button'
import Card from '../UI/Card'

function NFTCard({ title, author, price, image, likes, bidders = [] }) {
  return (
    <Card className="overflow-hidden p-3">
      <div className="relative h-52 overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <button
          type="button"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-500 shadow-soft"
        >
          <MdFavoriteBorder className="h-4 w-4" />
        </button>
      </div>
      <div className="px-2 pb-2 pt-4">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">By {author}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <div className="flex -space-x-2">
              {bidders.map((bidder, index) => (
                <span
                  key={`${bidder}-${index}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[radial-gradient(circle_at_30%_30%,#ffd0ee,transparent_28%),linear-gradient(135deg,#3857ff,#7d6bff)] text-[10px] font-bold text-white"
                >
                  {bidder}
                </span>
              ))}
              <span className="ml-1 self-center text-xs font-medium text-[var(--text-soft)]">
                {likes}+
              </span>
            </div>
            <p className="mt-4 text-xs font-bold text-brand-500">
              Current Bid: {price}
            </p>
          </div>
          <Button className="rounded-full px-5 py-2.5 text-xs">Place Bid</Button>
        </div>
      </div>
    </Card>
  )
}

export default NFTCard

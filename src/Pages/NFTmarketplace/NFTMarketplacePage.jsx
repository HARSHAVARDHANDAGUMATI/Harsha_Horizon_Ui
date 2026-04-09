import { useEffect, useState } from 'react'
import Button from '../../Components/UI/Button'
import Card from '../../Components/UI/Card'
import { nftService } from '../../Services/nftService'
import HistorySection from './Components/HistorySection'
import NFTGrid from './Components/NFTGrid'
import TopCreators from './Components/TopCreators'
import TrendingSection from './Components/TrendingSection'

function NFTMarketplacePage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    nftService.getMarketplaceData().then(setData)
  }, [])

  if (!data) {
    return null
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-[var(--text-muted)]">
          Pages / NFT Marketplace
        </p>
        <h2 className="font-display text-3xl font-bold text-[var(--text)]">
          NFT Marketplace
        </h2>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.9fr_0.9fr]">
        <div className="space-y-5">
          <Card className="relative overflow-hidden bg-[linear-gradient(90deg,#4d19ff_0%,#5a1fff_45%,#3a0fff_100%)] p-8 text-white">
            <div className="absolute right-8 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.22),transparent_16%),linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.08)_100%)]" />
            <h2 className="relative z-10 mt-2 max-w-xl font-display text-5xl font-extrabold leading-[1.15]">
              {data.hero.title}
            </h2>
            <p className="relative z-10 mt-4 max-w-md text-base leading-7 text-white/80">
              {data.hero.description}
            </p>
            <div className="relative z-10 mt-8 flex items-center gap-4">
              <Button
                variant="white"
                className="rounded-full bg-white px-6 text-[#1b2559] hover:bg-white/90"
              >
                Discover now
              </Button>
              <button type="button" className="text-sm font-bold text-white">
                Watch video
              </button>
            </div>
            <div className="pointer-events-none absolute right-10 top-7 hidden h-[210px] w-[250px] xl:block">
              <div className="absolute right-24 top-0 h-20 w-20 rotate-[-24deg] rounded-[20px] bg-[linear-gradient(135deg,#2d2d57,#111,#5b5bd8)] shadow-soft" />
              <div className="absolute right-0 top-10 h-8 w-28 rotate-[-12deg] rounded-full bg-white/60 blur-[1px]" />
              <div className="absolute bottom-0 right-8 h-36 w-28 rounded-t-[42px] rounded-b-[18px] bg-[linear-gradient(180deg,#ffffff,#bfc8ff_70%,#6f7dff_100%)] shadow-soft">
                <div className="absolute left-1/2 top-4 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-[#7f8dff]" />
              </div>
            </div>
          </Card>

          <TrendingSection items={data.featured} />
          <NFTGrid title="Recently Added" items={data.recent} />
        </div>

        <div className="space-y-5">
          <TopCreators creators={data.creators} />
          <HistorySection items={data.history} />
        </div>
      </div>
    </div>
  )
}

export default NFTMarketplacePage

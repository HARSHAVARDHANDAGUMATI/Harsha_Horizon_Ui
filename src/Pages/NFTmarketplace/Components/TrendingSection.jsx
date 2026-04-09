import { creatorTabs } from '../../../Utils/constants'
import SectionHeader from '../../../Components/Common/SectionHeader'
import NFTCard from '../../../Components/Cards/NFTCard'

function TrendingSection({ items }) {
  return (
    <section>
      <SectionHeader
        title="Trending NFTs"
        action={
          <div className="flex flex-wrap gap-6 text-sm font-bold text-brand-500">
            {creatorTabs.map((tab) => (
              <button key={tab} type="button">
                {tab}
              </button>
            ))}
          </div>
        }
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <NFTCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default TrendingSection

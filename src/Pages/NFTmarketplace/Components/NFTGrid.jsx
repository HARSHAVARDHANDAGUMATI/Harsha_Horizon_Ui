import SectionHeader from '../../../Components/Common/SectionHeader'
import NFTCard from '../../../Components/Cards/NFTCard'

function NFTGrid({ title, items }) {
  return (
    <section>
      <SectionHeader title={title} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <NFTCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default NFTGrid

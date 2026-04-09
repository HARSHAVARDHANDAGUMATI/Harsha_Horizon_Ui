import Card from '../../../Components/UI/Card'

const infoGroups = [
  { label: 'Education', value: 'Stanford University' },
  { label: 'Languages', value: 'English, Spanish, Italian' },
  { label: 'Department', value: 'Product Design' },
  { label: 'Work History', value: 'Google, Facebook' },
  { label: 'Organization', value: 'Simmmple Web LLC' },
  { label: 'Birthday', value: '20 July 1986' },
]

function ProfileDetails() {
  return (
    <Card className="p-4 sm:p-5">
      <h3 className="font-display text-[22px] font-bold text-[var(--text)] sm:text-[28px]">
        General Information
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)] sm:leading-7">
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others a
        hand.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {infoGroups.map((item) => (
          <div
            key={item.label}
            className="rounded-[18px] bg-[var(--surface-soft)] px-4 py-4 sm:py-5"
          >
            <p className="text-xs text-[var(--text-soft)]">{item.label}</p>
            <p className="mt-1 break-words text-sm font-medium leading-6 text-[var(--text)]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default ProfileDetails

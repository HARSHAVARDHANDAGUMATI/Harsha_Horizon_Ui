import Card from '../UI/Card'

function ProfileCard({ name, role }) {
  return (
    <Card className="overflow-hidden p-3">
      <div className="h-[108px] rounded-[22px] bg-[radial-gradient(circle_at_25%_20%,rgba(116,89,255,0.7),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_65%_80%,rgba(30,64,255,0.5),transparent_24%),linear-gradient(135deg,#081d8d_0%,#2437ff_42%,#1d2057_100%)]" />

      <div className="relative -mt-9 flex flex-col items-center px-4 pb-4">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-white bg-[radial-gradient(circle_at_35%_30%,#78b9ff,transparent_25%),linear-gradient(135deg,#3857ff,#7d6bff)] text-xl font-bold text-white shadow-soft dark:border-navy-800">
          H
        </div>

        <h3 className="mt-3 font-display text-[24px] font-bold text-[var(--text)]">
          {name}
        </h3>
        <p className="text-sm text-[var(--text-muted)]">{role}</p>

        <div className="mt-5 grid w-full grid-cols-3 gap-3 text-center">
          <div>
            <p className="font-display text-[26px] font-bold text-[var(--text)]">
              17
            </p>
            <p className="text-xs text-[var(--text-soft)]">Posts</p>
          </div>
          <div>
            <p className="font-display text-[26px] font-bold text-[var(--text)]">
              9.7k
            </p>
            <p className="text-xs text-[var(--text-soft)]">Followers</p>
          </div>
          <div>
            <p className="font-display text-[26px] font-bold text-[var(--text)]">
              274
            </p>
            <p className="text-xs text-[var(--text-soft)]">Following</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard

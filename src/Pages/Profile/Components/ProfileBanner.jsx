import { HiOutlineCloud } from 'react-icons/hi'
import { IoMdMore } from 'react-icons/io'
import { MdFileUpload } from 'react-icons/md'
import Card from '../../../Components/UI/Card'
import Button from '../../../Components/UI/Button'

function ProfileBanner() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.25fr_0.9fr_1.4fr]">
      <Card className="p-0">
        <div className="h-full rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-3">
          <div className="h-[108px] rounded-[20px] bg-[radial-gradient(circle_at_20%_10%,rgba(77,104,255,0.95),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_70%_80%,rgba(124,92,255,0.55),transparent_22%),linear-gradient(135deg,#0a1585_0%,#2535ff_45%,#11194a_100%)]" />
          <div className="relative -mt-7 flex flex-col items-center px-4 pb-4">
            <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-4 border-white bg-[radial-gradient(circle_at_35%_30%,#8ac2ff,transparent_25%),linear-gradient(135deg,#3857ff,#7d6bff)] text-lg font-bold text-white dark:border-navy-800">
              H
            </div>
            <h3 className="mt-3 font-display text-[22px] font-bold text-[var(--text)]">
              Harsha
            </h3>
            <p className="text-sm text-[var(--text-muted)]">Product Designer</p>

            <div className="mt-4 grid w-full grid-cols-3 gap-3 text-center">
              <div>
                <p className="font-display text-[24px] font-bold text-[var(--text)]">
                  17
                </p>
                <p className="text-xs text-[var(--text-soft)]">Posts</p>
              </div>
              <div>
                <p className="font-display text-[24px] font-bold text-[var(--text)]">
                  9.7k
                </p>
                <p className="text-xs text-[var(--text-soft)]">Followers</p>
              </div>
              <div>
                <p className="font-display text-[24px] font-bold text-[var(--text)]">
                  274
                </p>
                <p className="text-xs text-[var(--text-soft)]">Following</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="relative px-6 py-7 text-center">
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-soft)]"
        >
          <IoMdMore className="h-5 w-5" />
        </button>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--surface-soft)] text-brand-500">
          <HiOutlineCloud className="h-10 w-10" />
        </div>
        <h3 className="mt-6 font-display text-[28px] font-bold text-[var(--text)]">
          Your storage
        </h3>
        <p className="mx-auto mt-2 max-w-[200px] text-sm leading-6 text-[var(--text-muted)]">
          Supervise your drive space in the easiest way
        </p>
        <div className="mt-9">
          <div className="mb-2 flex items-center justify-between text-xs text-[var(--text-soft)]">
            <span>25.6 Gb</span>
            <span>50 Gb</span>
          </div>
          <div className="h-2 rounded-full bg-[var(--surface-soft)]">
            <div className="h-2 w-[68%] rounded-full bg-brand-500" />
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="grid h-full gap-4 rounded-[20px] border border-dashed border-[var(--border)] p-4 md:grid-cols-[1fr_1.15fr]">
          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-[20px] border border-dashed border-[var(--border)] bg-[var(--surface-soft)]/40 text-center text-brand-500">
            <MdFileUpload className="h-14 w-14" />
            <p className="mt-3 text-[24px] font-bold">Upload Files</p>
            <p className="mt-1 text-xs text-[var(--text-soft)]">
              PNG, JPG and GIF files are allowed
            </p>
          </div>
          <div className="flex flex-col justify-center p-2">
            <h3 className="font-display text-[30px] font-bold leading-tight text-[var(--text)]">
              Complete your profile
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Stay on the pulse of distributed projects with an online whiteboard
              to plan, coordinate and discuss.
            </p>
            <Button className="mt-6 h-11 w-fit rounded-[14px] px-6">
              Publish now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProfileBanner

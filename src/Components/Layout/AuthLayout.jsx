import { useContext } from 'react'
import { MdLightMode, MdNightlightRound } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'

function AuthLayout() {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="min-h-screen bg-[var(--bg)] p-2 transition-colors md:p-3">
      <div className="mx-auto grid min-h-[calc(100vh-16px)] max-w-[1560px] overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)] shadow-horizon lg:grid-cols-[47%_53%]">
        <div className="flex min-h-[100svh] items-start justify-center overflow-y-auto px-6 py-6 md:px-12 lg:px-16 lg:py-8">
          <div className="w-full max-w-[420px]">
            <Outlet />
          </div>
        </div>

        <aside
          className="relative hidden min-h-[100svh] overflow-hidden rounded-bl-[180px] lg:flex lg:flex-col lg:justify-between"
          style={{
            background:
              'radial-gradient(circle at 18% 8%, rgba(255, 178, 228, 0.95), transparent 17%), radial-gradient(circle at 8% 22%, rgba(82, 228, 255, 0.55), transparent 14%), radial-gradient(circle at 30% 82%, rgba(255, 173, 241, 0.35), transparent 20%), linear-gradient(135deg, #2430ff 10%, #2945ff 44%, #1f7bff 72%, #3f5dff 100%)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.18),transparent_18%),radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.14),transparent_18%)]" />

          <div className="relative flex flex-1 flex-col items-center justify-center px-12">
            <div className="flex h-[160px] w-[160px] items-center justify-center rounded-full bg-white shadow-[0_20px_45px_rgba(22,31,104,0.2)]">
              <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full bg-transparent">
                <div className="absolute inset-x-0 bottom-[-30px] h-[76px] rounded-full bg-[#3552ff]" />
              </div>
            </div>

            <h2 className="mt-10 flex items-center font-display text-[58px] font-bold tracking-[-0.04em] text-white">
              Horizon
              <span className="ml-2 rounded-[12px] border-[3px] border-white px-2 py-0 text-[34px] leading-none text-white">
                UI
              </span>
            </h2>

            <div className="mt-16 w-full max-w-[380px] rounded-[24px] border border-white/20 bg-white/8 px-8 py-5 text-center backdrop-blur-md">
              <p className="text-sm text-white/90">
                Learn more about Horizon UI on
              </p>
              <a
                href="https://horizon-ui.com"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-[20px] font-bold text-white"
              >
                horizon-ui.com
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-between pl-24 pr-10 pb-8 text-[12px] text-white/90">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              <a href="https://horizon-ui.com" target="_blank" rel="noreferrer">
                Marketplace
              </a>
              <a href="https://horizon-ui.com" target="_blank" rel="noreferrer">
                License
              </a>
              <a href="https://horizon-ui.com" target="_blank" rel="noreferrer">
                Terms of Use
              </a>
              <a href="https://horizon-ui.com" target="_blank" rel="noreferrer">
                Blog
              </a>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <MdLightMode className="h-5 w-5 text-white" />
              ) : (
                <MdNightlightRound className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default AuthLayout

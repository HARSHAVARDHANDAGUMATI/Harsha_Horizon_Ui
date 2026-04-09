import { useContext, useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'
import { isEmail, isRequired } from '../../Utils/validators'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Spinner from '../UI/Spinner'

function SignInForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useContext(AuthContext)
  const [form, setForm] = useState({
    email: 'harsha@horizon-ui.com',
    password: 'horizon',
    keepLoggedIn: true,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (!isRequired(form.email) || !isRequired(form.password)) {
      setError('Please fill in both email and password.')
      return
    }

    if (!isEmail(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setIsSubmitting(true)

    try {
      await login(form)
      navigate(location.state?.from?.pathname ?? '/dashboard', {
        replace: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[var(--surface-soft)] text-[13px] font-medium text-[var(--text)] transition hover:bg-[var(--surface-muted)]"
        >
          <FcGoogle className="mr-2 h-5 w-5" />
          Sign in with Google
        </button>
        <button
          type="button"
          className="flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[var(--surface-soft)] text-[13px] font-medium text-[var(--text)] transition hover:bg-[var(--surface-muted)]"
        >
          <FaApple className="mr-2 h-4 w-4" />
          Sign in with Apple
        </button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-[var(--border)]" />
        <span className="text-xs text-[var(--text-soft)]">or</span>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-bold text-[var(--text)]">
            Email*
          </label>
          <Input
            type="email"
            placeholder="mail@simmmple.com"
            value={form.email}
            className="h-[50px] rounded-[14px] border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder:text-[var(--text-soft)]"
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[var(--text)]">
            Password*
          </label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Min. 8 characters"
              value={form.password}
              className="h-[50px] rounded-[14px] border-[var(--border)] bg-[var(--surface)] pr-12 text-[var(--text)] placeholder:text-[var(--text-soft)]"
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-soft)]"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <MdVisibility className="h-5 w-5" />
              ) : (
                <MdVisibilityOff className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-[12px] font-medium text-[var(--text)]">
          <input
            type="checkbox"
            checked={form.keepLoggedIn}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                keepLoggedIn: event.target.checked,
              }))
            }
            className="h-3.5 w-3.5 rounded border-brand-500 text-brand-500 focus:ring-brand-500"
          />
          Keep me logged in
        </label>
        <Link
          to="/auth/forgot-password"
          className="text-[12px] font-bold text-brand-500"
        >
          Forget password?
        </Link>
      </div>

      {error ? <p className="mt-4 text-sm font-medium text-rose-500">{error}</p> : null}

      <Button
        className="mt-6 h-[50px] w-full rounded-[14px] bg-brand-500 text-sm font-bold text-white hover:bg-[var(--brand-strong)]"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : 'Sign In'}
      </Button>
    </form>
  )
}

export default SignInForm

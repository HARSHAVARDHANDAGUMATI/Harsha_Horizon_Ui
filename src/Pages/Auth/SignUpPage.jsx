import { useContext, useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../Components/UI/Button'
import Input from '../../Components/UI/Input'
import Spinner from '../../Components/UI/Spinner'
import AuthContext from '../../Context/AuthContext'
import { isEmail, isRequired } from '../../Utils/validators'

function SignUpPage() {
  const navigate = useNavigate()
  const { register } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (
      !isRequired(form.name) ||
      !isRequired(form.email) ||
      !isRequired(form.password) ||
      !isRequired(form.confirmPassword)
    ) {
      setError('Please fill in all the fields.')
      return
    }

    if (!isEmail(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (form.password.trim().length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Password and confirm password must match.')
      return
    }

    setError('')
    setIsSubmitting(true)

    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      })
      navigate('/dashboard', { replace: true })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-col justify-start pt-8">
        <h1 className="font-display text-[44px] font-bold tracking-[-0.04em] text-[var(--text)]">
          Sign Up
        </h1>
        <p className="mt-2 text-sm text-[var(--text-soft)]">
          Enter your details to create your account!
        </p>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[var(--surface-soft)] text-[13px] font-medium text-[var(--text)] transition hover:bg-[var(--surface-muted)]"
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Sign up with Google
            </button>
            <button
              type="button"
              className="flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[var(--surface-soft)] text-[13px] font-medium text-[var(--text)] transition hover:bg-[var(--surface-muted)]"
            >
              <FaApple className="mr-2 h-4 w-4" />
              Sign up with Apple
            </button>
          </div>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-soft)]">or</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-bold text-[var(--text)]">
                Full Name*
              </label>
              <Input
                placeholder="Harsha"
                value={form.name}
                className="h-[46px] rounded-[14px] border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder:text-[var(--text-soft)]"
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[var(--text)]">
                Email*
              </label>
              <Input
                type="email"
                placeholder="mail@simmmple.com"
                value={form.email}
                className="h-[46px] rounded-[14px] border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder:text-[var(--text-soft)]"
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
                  className="h-[46px] rounded-[14px] border-[var(--border)] bg-[var(--surface)] pr-12 text-[var(--text)] placeholder:text-[var(--text-soft)]"
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

            <div>
              <label className="mb-2 block text-sm font-bold text-[var(--text)]">
                Confirm Password*
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  className="h-[46px] rounded-[14px] border-[var(--border)] bg-[var(--surface)] pr-12 text-[var(--text)] placeholder:text-[var(--text-soft)]"
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      confirmPassword: event.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((current) => !current)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-soft)]"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? (
                    <MdVisibility className="h-5 w-5" />
                  ) : (
                    <MdVisibilityOff className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {error ? (
              <p className="text-sm font-medium text-rose-500">{error}</p>
            ) : null}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-[46px] w-full rounded-[14px] bg-brand-500 text-sm font-bold text-white hover:bg-[var(--brand-strong)]"
            >
              {isSubmitting ? <Spinner /> : 'Create Account'}
            </Button>
          </form>

          <p className="mt-4 text-[12px] text-[var(--text)]">
            Already have an account?{' '}
            <Link to="/auth/sign-in" className="font-bold text-brand-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <p className="pt-6 text-[12px] text-[var(--text-soft)]">
        © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </p>
    </div>
  )
}

export default SignUpPage

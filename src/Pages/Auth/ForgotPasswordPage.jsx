import { Link } from 'react-router-dom'
import Button from '../../Components/UI/Button'
import Input from '../../Components/UI/Input'

function ForgotPasswordPage() {
  return (
    <div>
      <p className="text-sm font-medium text-[var(--text-muted)]">
        Password reset
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold text-[var(--text)]">
        Forgot your password?
      </h1>
      <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
        Enter your email address and we&apos;ll send you a secure recovery link.
      </p>
      <div className="mt-8 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-horizon">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[var(--text)]">
              Email address
            </label>
            <Input type="email" placeholder="mail@example.com" />
          </div>
          <Button className="w-full">Send recovery link</Button>
        </div>
      </div>
      <p className="mt-6 text-sm text-[var(--text-muted)]">
        Remembered it?{' '}
        <Link to="/auth/sign-in" className="font-bold text-brand-500">
          Back to sign in
        </Link>
      </p>
    </div>
  )
}

export default ForgotPasswordPage

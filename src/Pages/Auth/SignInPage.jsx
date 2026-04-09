import { Link } from 'react-router-dom'
import SignInForm from '../../Components/Forms/SignInForm'

function SignInPage() {
  return (
    <div className="flex min-h-[760px] flex-col">
      <div className="flex flex-1 flex-col justify-center">
        <div className="w-full">
          <h1 className="font-display text-[44px] font-bold tracking-[-0.04em] text-[var(--text)]">
            Sign In
          </h1>
          <p className="mt-2 text-sm text-[var(--text-soft)]">
            Enter your email and password to sign in!
          </p>

          <div className="mt-8">
            <SignInForm />
          </div>

          <p className="mt-5 text-[12px] text-[var(--text)]">
            Not registered yet?{' '}
            <Link to="/auth/sign-up" className="font-bold text-brand-500">
              Create an Account
            </Link>
          </p>
        </div>
      </div>

      <p className="pt-10 text-[12px] text-[var(--text-soft)]">
        © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </p>
    </div>
  )
}

export default SignInPage

import { initials } from '../../Utils/helpers'

function Avatar({ name, size = 'md' }) {
  const sizes = {
    sm: 'h-9 w-9 text-xs',
    md: 'h-11 w-11 text-sm',
    lg: 'h-14 w-14 text-base',
  }

  return (
    <span
      className={`inline-flex ${sizes[size]} items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 font-bold text-white`}
    >
      {initials(name)}
    </span>
  )
}

export default Avatar

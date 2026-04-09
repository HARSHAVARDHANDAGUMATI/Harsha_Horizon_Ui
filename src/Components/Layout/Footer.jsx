function Footer() {
  return (
    <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 px-1 pb-8 text-sm text-[var(--text-muted)]">
      <p>© 2026 Horizon UI. Built with React, Tailwind CSS, and reusable components.</p>
      <div className="flex gap-4">
        <a href="https://github.com/horizon-ui/horizon-tailwind-react" target="_blank" rel="noreferrer">
          Reference
        </a>
        <a href="https://www.figma.com" target="_blank" rel="noreferrer">
          Design
        </a>
      </div>
    </footer>
  )
}

export default Footer

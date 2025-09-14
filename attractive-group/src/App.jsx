import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <BackgroundDecor />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="container-px mx-auto flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-primary/20 ring-1 ring-primary/40 grid place-items-center">
            <span className="text-primary font-extrabold">AG</span>
          </div>
          <div>
            <p className="font-semibold leading-tight">Attractive Group</p>
            <p className="text-xs text-white/60">Dynamic. Self-Reliant. Innovative.</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ['/', 'Home'],
            ['/about', 'About'],
            ['/entities', 'Group'],
            ['/products', 'Products'],
            ['/awards', 'Awards'],
            ['/vision', 'Vision'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="relative py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-px mx-auto py-8 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Attractive Group. All rights reserved.</p>
        <p>Founded 1980 • Group Valuation $13.07M • Capitalization ₹60 Cr</p>
      </div>
    </footer>
  )
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="url(#g)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}


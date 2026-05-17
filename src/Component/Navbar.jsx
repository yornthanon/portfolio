import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

const getInitialDark = () => {
  const stored = localStorage.getItem('theme')
  const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark)
  return isDark
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])


  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)

    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((el) => el && observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      sections.forEach((el) => el && observer.unobserve(el))
    }
  }, [])

  return (
    <nav
      className={`theme-transition fixed top-0 inset-x-0 z-50 transition-all duration-500 [animation:fade-in_0.6s_ease-out] ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-dark-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between'>
        <a href='#home' className='text-lg md:text-xl font-extrabold text-gray-900 dark:text-white tracking-tight'>
          <span className='bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent'>
            Thanon
          </span>
        </a>

        <div className='flex items-center gap-1'>
          <div className='hidden md:flex items-center gap-1'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  active === item.href
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                    active === item.href
                      ? 'w-5 bg-gray-900 dark:bg-white'
                      : 'w-0 bg-gray-900 dark:bg-white group-hover:w-5'
                  }`}
                />
              </a>
            ))}
          </div>

          <button
            onClick={toggleDark}
            className='ml-2 p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
            aria-label='Toggle dark mode'
          >
            {dark ? (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                <path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                <path fillRule='evenodd' d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z' clipRule='evenodd' />
              </svg>
            )}
          </button>

          <button
            className='md:hidden relative z-50 flex flex-col gap-1.5 p-2'
            onClick={() => setOpen(!open)}
            aria-label='Toggle menu'
          >
            <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-t border-gray-200 dark:border-dark-border/50 px-6 py-5 space-y-2'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === item.href
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
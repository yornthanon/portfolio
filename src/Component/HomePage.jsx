import heroImg from "../assets/IMG_2037.jpeg";

const HomePage = () => {
  return (
    <section
      id='home'
      className='theme-transition relative min-h-screen flex items-center px-6 overflow-hidden bg-white dark:bg-dark-bg'
    >
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-gray-300/30 to-gray-400/10 dark:from-gray-700/30 dark:to-gray-600/10 rounded-full blur-3xl animate-pulse-glow' />
        <div className='absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-gray-400/20 to-gray-300/10 dark:from-gray-600/20 dark:to-gray-700/10 rounded-full blur-3xl animate-pulse-glow' style={{ animationDelay: '1.5s' }} />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-gray-200/10 to-transparent dark:from-gray-700/5 rounded-full blur-3xl' />
        <div className='absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[length:32px_32px] opacity-30' />
      </div>

      <div className='relative max-w-6xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='animate-fade-in-up'>
              <span className='inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50'>
                <span className='w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse' />
                Available for work
              </span>
            </div>
            <div className='space-y-3 animate-fade-in-up' style={{ animationDelay: '0.15s' }}>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight'>
                Hi, I'm{' '}
                <span className='bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent'>
                  Thanon
                </span>
              </h1>
            </div>

            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg animate-fade-in-up' style={{ animationDelay: '0.3s' }}>
              Backend Developer specializing in building scalable and robust server-side applications. Experienced in designing Clean Architecture, managing Relational Databases, and implementing secure RESTful APIs. I focus on writing clean, maintainable code and optimizing system performance to solve complex problems.
            </p>

            <div className='flex flex-wrap gap-4 animate-fade-in-up' style={{ animationDelay: '0.45s' }}>
              <a
                href='#background'
                className='group relative px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gray-900/20 dark:hover:shadow-white/10 hover:-translate-y-0.5'
              >
                <span className='relative z-10'>View Projects</span>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-100 dark:to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </a>
              <a
                href='#contact'
                className='px-7 py-3 border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-50 dark:hover:bg-dark-surface hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 hover:-translate-y-0.5'
              >
                Contact Me
              </a>
            </div>

            <div className='flex items-center gap-5 pt-2 animate-fade-in-up' style={{ animationDelay: '0.6s' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/yornthanon', icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' },
                { label: 'Facebook', href: 'https://www.facebook.com/tha.non.20', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label: 'Telegram', href: 'https://t.me/yornthanon', icon: 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'
                  aria-label={s.label}
                >
                  <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className='hidden md:flex justify-center animate-scale-in'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-gray-300/40 to-gray-400/20 dark:from-gray-600/40 dark:to-gray-500/20 rounded-2xl blur-2xl animate-float' />
              <div className='relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 p-[2px] shadow-2xl animate-float'>
                <div className='w-full h-full rounded-2xl bg-white dark:bg-dark-bg flex items-center justify-center overflow-hidden relative'>
                  <img
                    src={heroImg}
                    alt='Thanon'
                    className='relative w-full h-full object-cover brightness-110 contrast-105'
                    style={{ filter: 'brightness(1.1) contrast(1.05) blur(0.4px)' }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-40' />
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_40%,rgba(0,0,0,0.08)_100%)]' />
                </div>
              </div>
              <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-gray-400/20 dark:bg-gray-600/20 rounded-full blur-2xl' />
              <div className='absolute -top-4 -left-4 w-32 h-32 bg-gray-400/15 dark:bg-gray-600/15 rounded-full blur-2xl' />
            </div>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-float'>
          <div className='flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500'>
            <span className='text-[10px] font-medium tracking-widest uppercase'>Scroll</span>
            <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
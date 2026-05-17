import { useState } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'yornthano@gmail.com',
    href: 'mailto:yornthano@gmail.com',
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
  },
  {
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    href: null,
    icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'Phone',
    value: '+855 71 449 3721',
    href: 'tel:+855714493721',
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
  },
]

const ContactPage = () => {
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    if (!name) newErrors.name = 'Please enter your name';
    if (!email) newErrors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';
    if (!message) newErrors.message = 'Please enter your message';
    return newErrors;
  };

  return (
    <section id='contact' className='theme-transition py-28 px-6 bg-white dark:bg-dark-bg'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16 reveal'>
          <span className='text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500'>
            Contact
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4'>
            Contact
          </h2>
          <p className='text-gray-500 dark:text-gray-400 mt-3'>
            Have a project or opportunity? I'd love to hear from you.
          </p>
          <div className='mx-auto mt-6 w-16 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full' />
        </div>

        <div className='grid lg:grid-cols-5 gap-12 items-start'>
          <form
            className='lg:col-span-3 space-y-5 reveal-left'
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newErrors = validate(formData);
              setErrors(newErrors);
              if (Object.keys(newErrors).length === 0) {
                const text = `New message from portfolio:
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Subject: ${formData.get('subject') || 'No subject'}
Message: ${formData.get('message')}`

                fetch(`https://api.telegram.org/bot8890173191:AAH-uCz6ltaGZqUs6zL2Llb_mG9Ph_Fr4LY/sendMessage`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    chat_id: 5917168307,
                    text,
                  }),
                })

                alert('Your message has been sent successfully!');
                e.target.reset();
                setErrors({});
              }
            }}
          >
            <div className='grid sm:grid-cols-2 gap-5'>
              <div>
                <input
                  type='text'
                  name='name'
                  placeholder='Your name'
                  className='w-full px-4 py-3.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-200'
                />
                {errors.name && (
                  <p className='text-red-400 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1'>
                    <svg className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  className='w-full px-4 py-3.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-200'
                />
                {errors.email && (
                  <p className='text-red-400 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1'>
                    <svg className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className='w-full px-4 py-3.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-200'
            />
            <div>
              <textarea
                rows={5}
                name='message'
                placeholder='Your message'
                className='w-full px-4 py-3.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-200 resize-none'
              />
              {errors.message && (
                <p className='text-red-400 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1'>
                  <svg className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
                  </svg>
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type='submit'
              className='group relative w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-white/10'
            >
              <span className='relative z-10'>Send Message</span>
              <div className='absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-100 dark:to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </button>
          </form>

          <div className='lg:col-span-2 space-y-5 reveal-right'>
            {contactInfo.map((info) => {
              const Wrapper = info.href ? 'a' : 'div'
              const wrapperProps = info.href
                ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <Wrapper
                  key={info.label}
                  {...wrapperProps}
                  className='card-hover theme-transition flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card'
                >
                  <div className='w-11 h-11 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border flex items-center justify-center shrink-0'>
                    <svg className='w-5 h-5 text-gray-600 dark:text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className='text-xs font-medium text-gray-400 dark:text-gray-500'>{info.label}</p>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>{info.value}</p>
                  </div>
                </Wrapper>
              )
            })}

            <div className='theme-transition p-5 rounded-2xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card'>
              <p className='text-xs font-medium text-gray-400 dark:text-gray-500 mb-3'>Follow me</p>
              <div className='flex items-center gap-3'>
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
                    className='w-10 h-10 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200'
                    aria-label={s.label}
                  >
                    <svg className='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'>
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
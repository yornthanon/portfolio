const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Royal University Of Phnom Penh',
    period: '2026-Present',
    desc: 'Currently in Year 2. Focused on software engineering, data structures, and web technologies.',
  },
]

const school = [
  {
    level: 'High School',
    school: 'Samdech HunSen Angsophy High School',
    period: '2022-2024',
    desc: 'Focused on science and mathematics track. Developed foundational problem-solving skills and participated in academic competitions.',
  },
  {
    level: 'Lower Secondary School',
    school: 'AngChum TrorpangChhuk Secondary School',
    period: '2019-2021',
    desc: 'Built a strong academic foundation with a focus on Khmer literature, mathematics, and introductory computer studies.',
  },
  {
    level: 'Primary School',
    school: 'Kosh Tromung Primary School',
    period: '2012-2018',
    desc: 'Completed basic education with a focus on core subjects including Khmer, mathematics, science, and social studies.',
  },
]

const AboutPage = () => {
  return (
    <section id='about' className='theme-transition py-28 px-6 bg-gray-50 dark:bg-dark-surface'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-20 reveal'>
          <span className='text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500'>
            About
          </span>
          <div className='mx-auto mt-6 w-16 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full' />
        </div>

        <div className='text-center mb-12 reveal'>
          <h3 className='text-xl font-semibold text-gray-900 dark:text-white flex items-center justify-center gap-2'>
            <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342' />
            </svg>
            Education
          </h3>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          {education.map((item, i) => (
            <div
              key={i}
              className='card-hover theme-transition rounded-2xl border border-gray-200 dark:border-dark-border p-6 bg-white dark:bg-dark-card'
            >
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0'>
                  <svg className='w-5 h-5 text-gray-600 dark:text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342' />
                  </svg>
                </div>
                <div>
                  <span className='text-xs font-semibold text-gray-600 dark:text-gray-400'>
                    {item.period}
                  </span>
                  <h4 className='text-base font-semibold text-gray-900 dark:text-white mt-1'>
                    {item.degree}
                  </h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {item.school}
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed'>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='grid md:grid-cols-2 gap-16 items-start'>
          <div className='space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed reveal-left'>
            <p className='text-lg'>
              Hi, I'm Yorn Thanon, a Year 2 Computer Science student at the Royal University of Phnom Penh (RUPP). I am a backend-focused developer with a passion for building secure and high-performance server-side applications. Currently, I am honing my skills in Clean Architecture and Modern Java Technologies to solve real-world problems through efficient code.
            </p>
            <div className='flex flex-wrap gap-3 pt-2'>
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Postgres', 'Java', 'SpringBoot'].map(
                (s) => (
                  <span
                    key={s}
                    className='text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md border border-gray-200/50 dark:border-gray-700/50'
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </div>

          <div className='relative pl-6 border-l-2 border-gray-200 dark:border-dark-border space-y-10 reveal-right'>
            {school.map((item, i) => (
              <div key={i} className='relative'>
                <div className='absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400 border-2 border-gray-50 dark:border-dark-surface' />
                <span className='text-xs font-semibold text-gray-600 dark:text-gray-400'>
                  {item.period}
                </span>
                <h3 className='text-base font-semibold text-gray-900 dark:text-white mt-1'>
                  {item.level}
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {item.school}
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
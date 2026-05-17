import { useState } from 'react'
import certImg from "../assets/cloud.jpg"
import {
  SiReact, SiHtml5, SiCss, SiTailwindcss, SiSpring,
  SiPostgresql, SiDocker, SiGit, SiLinux, SiFigma
} from "react-icons/si"
import { FaAws } from "react-icons/fa6"
import { DiJava } from "react-icons/di"

const projects = [
  {
    title: 'CommercePro',
    desc: 'A full-featured e-commerce platform with real-time inventory, payment processing, and an admin dashboard.',
    tags: ['React', 'Node.js', 'Stripe', 'Postgres'],
    image: null,
    link: '#',
  },
  {
    title: 'Analytix',
    desc: 'Interactive analytics dashboard with real-time data visualization, drill-down exploration, and PDF export.',
    tags: ['D3.js', 'TypeScript', 'WebSocket', 'Chart.js'],
    image: null,
    link: '#',
  },
  {
    title: 'FlowBoard',
    desc: 'Kanban-style project management tool with drag-and-drop, team collaboration, and sprint planning.',
    tags: ['Next.js', 'Firebase', 'Tailwind', 'Zustand'],
    image: null,
    link: '#',
  },
  {
    title: 'Chatter',
    desc: 'Real-time messaging platform supporting group chats, file sharing, and message search for 50K+ users.',
    tags: ['React', 'Socket.io', 'Redis', 'MongoDB'],
    image: null,
    link: '#',
  },
]

const certs = [
  {
    title: 'Huawei Cloud',
    issuer: 'Huawei',
    date: '2024',
    image: certImg,
    link: certImg,
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Coursera',
    date: '2023',
    image: null,
    link: '#',
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2024',
    image: null,
    link: '#',
  },
]

const skillIcons = {
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  'Tailwind CSS': SiTailwindcss,
  Java: DiJava,
  Spring: SiSpring,
  SpringBoot: SiSpring,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  AWS: FaAws,
  Git: SiGit,
  'CI/CD': SiGit,
  Linux: SiLinux,
  Figma: SiFigma,
  'UI/UX': SiFigma,
  'Design Systems': SiFigma,
  'Responsive Design': SiFigma,
  SpringSecurity: SiSpring,
}

const skillColors = {
  React: 'text-sky-500',
  HTML: 'text-orange-500',
  CSS: 'text-blue-600',
  'Tailwind CSS': 'text-cyan-500',
  Java: 'text-red-500',
  Spring: 'text-green-500',
  SpringBoot: 'text-green-500',
  PostgreSQL: 'text-indigo-500',
  Docker: 'text-blue-500',
  AWS: 'text-orange-400',
  Git: 'text-orange-600',
  'CI/CD': 'text-green-600',
  Linux: 'text-yellow-500',
  Figma: 'text-pink-500',
  'UI/UX': 'text-purple-500',
  'Design Systems': 'text-purple-500',
  'Responsive Design': 'text-purple-500',
  SpringSecurity: 'text-green-500',
}

const categories = [
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring', 'SpringBoot', 'PostgreSQL', 'SpringSecurity'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Responsive Design'],
  },
]

const tabs = [
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'skills', label: 'Skills & Tech' },
]

const EducationPage = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id='background' className='theme-transition py-28 px-6 bg-gray-50 dark:bg-dark-surface'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <span className='text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500'>
            Showcase
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4'>
            My Background
          </h2>
        </div>

        <div className='flex justify-center mb-12 reveal'>
            <div className='theme-transition inline-flex bg-white dark:bg-dark-card rounded-2xl p-1.5 border border-gray-200 dark:border-dark-border gap-1 shadow-sm'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'projects' && (
          <div className='grid md:grid-cols-2 gap-6'>
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.link}
                target='_blank'
                rel='noopener noreferrer'
                className='card-hover theme-transition group block bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden cursor-pointer'
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className='h-52 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden'>
                  {p.image ? (
                    <img src={p.image} alt={p.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105'>
                      <div className='text-center'>
                        <svg className='w-12 h-12 mx-auto text-gray-400/60 dark:text-gray-500/40 mb-2' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z' />
                        </svg>
                        <span className='text-sm text-gray-400/60 dark:text-gray-500/40 font-medium'>Project Screenshot</span>
                      </div>
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='absolute top-4 right-4'>
                    <span className='text-xs font-medium text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 dark:border-white/10'>
                      {p.title}
                    </span>
                  </div>
                </div>
                <div className='p-6 md:p-8'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>{p.title}</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5'>{p.desc}</p>
                  <div className='flex flex-wrap gap-2'>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className='text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md border border-gray-200/50 dark:border-gray-700/50'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {certs.map((c, i) => (
              <div
                key={c.title}
                onClick={() => c.image && setSelectedCert(c)}
                className='card-hover theme-transition group block bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden cursor-pointer'
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className='h-44 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center relative overflow-hidden'>
                  {c.image ? (
                    <img src={c.image} alt={c.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
                  ) : (
                    <div className='text-center transition-transform duration-500 group-hover:scale-105'>
                        <svg className='w-14 h-14 mx-auto text-gray-400/60 dark:text-gray-500/40 mb-2' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z' />
                      </svg>
                      <span className='text-sm text-gray-400/60 dark:text-gray-500/40 font-medium'>Certificate</span>
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='absolute top-3 right-3'>
                    <span className='text-[10px] font-medium text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded'>
                      {c.date}
                    </span>
                  </div>
                </div>
                <div className='p-5'>
                  <div className='flex items-center gap-2 mb-1'>
                    <svg className='w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
                    </svg>
                    <h4 className='text-sm font-semibold text-gray-900 dark:text-white'>{c.title}</h4>
                  </div>
                  <p className='text-xs text-gray-500 dark:text-gray-400 ml-6'>{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedCert && (
          <div
            className='fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm'
            onClick={() => setSelectedCert(null)}
          >
            <div
              className='relative max-w-lg w-full bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className='absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors'
              >
                <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className='w-full h-auto max-h-[70vh] object-contain'
              />
              <div className='p-4 flex items-center justify-between bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border'>
                <div>
                  <h4 className='text-sm font-semibold text-gray-900 dark:text-white'>{selectedCert.title}</h4>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>{selectedCert.issuer}</p>
                </div>
                <a
                  href={selectedCert.link}
                  download
                  className='px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2'
                >
                  <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3' />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className='card-hover theme-transition rounded-2xl border border-gray-200 dark:border-dark-border p-6 bg-white dark:bg-dark-card'
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className='text-sm font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2'>
                  <span className='w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500' />
                  {cat.title}
                </h3>
                <ul className='space-y-4'>
                  {cat.skills.map((s) => (
                    <li key={s} className='flex items-center gap-3 group'>
                      <span className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors ${skillColors[s] || 'text-gray-600 dark:text-gray-400'}`}>
                        {(() => {
                          const Icon = skillIcons[s]
                          return Icon ? <Icon className='w-5 h-5' /> : <span className='text-xs font-bold text-gray-500 dark:text-gray-300'>{s[0]}</span>
                        })()}
                      </span>
                      <span className='text-sm text-gray-600 dark:text-gray-400'>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default EducationPage
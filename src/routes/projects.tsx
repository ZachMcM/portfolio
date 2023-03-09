import { useEffect, useState, useRef, useMemo } from 'react'
import RepoCard from '../components/RepoCard'
import Stat from '../components/Stat'
import { ScrollRestoration } from 'react-router-dom'

export default function Projects() {
    const [repos, setRepos] = useState([])
    const [search, setSearch] = useState('')

    const [stats, setStats] = useState<any[]>([])

    const scrollRef = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      getRepos()
      getStats()
    }, [])

    const filteredRepos = useMemo(() => {
        return repos.filter((repo: any) => {
            return repo.name.toLowerCase().includes(search.toLowerCase().replace(/\s/g, '-')) || repo.language.toLowerCase().includes(search.toLowerCase())
        })
    }, [search, repos]) 

    async function getRepos() {
        const response = await fetch('https://zm-portfolio-backend.up.railway.app/repos')
        const data = await response.json()
        setRepos(data)
    }

    function scrollToStats() {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    async function getStats() {
        const response = await fetch('https://zm-portfolio-backend.up.railway.app/stats')
        const data = await response.json()
        setStats(data)
    }

    return (
        <main className="w-full pt-10 pb-32 px-10 lg:px-28 flex flex-col bg-white dark:bg-zinc-900 dark:text-white min-h-screen">
            <ScrollRestoration />
            <section className="my-10">
                <h1 className="text-2xl font-medium md:text-3xl">Projects</h1>
                <p className='text-gray-400 mt-3 md:text-lg'>All of my personal and school projects. Ranging from Java programs, to fullstack web apps pulled stragiht from my Github!</p>
                <button className='flex items-center mt-3 text-emerald-500 hover:text-emerald-600' onClick={() => scrollToStats()}>
                    <p className='mr-2'>View Stats</p>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
                <div className="outline-none mt-10 flex items-center dark:text-white bg-transparent border border-gray-400 p-4 rounded-lg w-full focus-within:outline-emerald-500 focus-within:outline-1">
                    <i className="cursor-pointer mr-2 fa-solid fa-magnifying-glass text-gray-400"></i>
                    <input 
                    type="text"
                    placeholder="Search by project name or language"
                    value={search} 
                    className="w-full bg-transparent outline-none text-sm md:text-lg"
                    onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-10">
                    {
                        filteredRepos.map((rep: any) => {
                            return (
                                <RepoCard 
                                    name={rep.name}
                                    description={rep.description}
                                    url={rep.url}
                                    language={rep.language}
                                    homepage={rep.homepage}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <div ref={scrollRef}></div>
            <section className="mt-40 mb-8">
                <h1 className="text-2xl font-medium md:text-3xl">Stats</h1>
                <div className='mt-10 w-full'>
                    {
                        stats.map((stat: any) => {
                            return (
                                <Stat
                                    name={stat.name}
                                    count={stat.count}
                                    percent={stat.percent}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}
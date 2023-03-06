import { useEffect, useState } from 'react'
import RepoCard from '../components/RepoCard'
import Stat from '../components/Stat'

export default function Projects() {
    const [repos, setRepos] = useState([])
    const [search, setSearch] = useState('')

    const [stats, setStats] = useState<any[]>([])
  
    useEffect(() => {
      getRepos()
      getStats()
    }, [])

    async function getRepos() {
        const response = await fetch('https://zm-portfolio-backend.up.railway.app/repos')
        const data = await response.json()
        if (search === '') {
          setRepos(data)
        } else {
          setRepos(data.filter((repo: any) => repo.name.toLowerCase().includes(search.replace(/\s+/g, '-').toLowerCase()) || repo.language.toLowerCase().includes(search.toLowerCase())))
        }
    }
    
    function handleSearch(userSearch: string) {
        setSearch(userSearch)
        getRepos()
    }

    async function getStats() {
        const response = await fetch('https://zm-portfolio-backend.up.railway.app/stats')
        const data = await response.json()
        setStats(data)
    }

    return (
        <main className="w-full pt-10 pb-32 px-10 flex flex-col md:px-48 xl:px-56 2xl:px-96 bg-white dark:bg-slate-900 dark:text-white">
            <section className="my-10">
                <h1 className="text-2xl font-medium md:text-3xl">Projects</h1>
                <p className='text-gray-400 mt-3 md:text-lg'>All of my personal and school projects. Ranging from Java programs, to fullstack web apps pulled stragiht from my Github!</p>
                <a href='#stats' className='flex items-center mt-3 text-sky-400'>
                    <p className='mr-2'>View Stats</p>
                    <i className="fa-solid fa-arrow-down"></i>
                </a>
                <div className="outline-none mt-10 flex items-center dark:text-white bg-transparent border border-gray-400 p-4 rounded-lg w-full focus-within:outline-sky-400 focus-within:outline-1">
                    <i className="cursor-pointer mr-2 fa-solid fa-magnifying-glass text-gray-400"></i>
                    <input 
                    type="text"
                    placeholder="Search by project name or language"
                    value={search} 
                    className="w-full bg-transparent outline-none text-sm md:text-lg"
                    onChange={e => handleSearch(e.target.value)}
                    />
                </div>
                <div className="mt-10 flex flex-wrap w-full">
                    {
                        repos.map((rep: any) => {
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
                <div id='stats'></div>
            </section>
            <section className="mt-28 mb-10">
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
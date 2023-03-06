import { useState, useEffect } from 'react'
import RepoCard from '../components/RepoCard'
import { Link } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'

export default function Home() {
    const [repos, setRepos] = useState<any[]>([])
  
    useEffect(() => {
        getRepos()
    }, [])
  
    async function getRepos() {
        const response = await fetch('https://zm-portfolio-backend.up.railway.app/repos')
        const data: any[] = await response.json()
        setRepos([data[0], data[1], data[2]])
    }

    return (
        <main className="w-full pt-10 pb-32 px-28 flex flex-col bg-white dark:bg-slate-900 dark:text-white">
            <ScrollRestoration />
            <section className="my-10">
                <h1 className="text-2xl font-medium md:text-3xl">My name is <span className='text-sky-400'>Zach McMullen</span> and welcome to my portfolio!</h1>
                <p className="text-gray-400 mt-3 md:text-lg">This fullstack portfolio was built using React JS, Typescript, Tailwind CSS, Express JS, and the Github REST API. Here you can find information about my projects and me!</p>
            </section>
            <section className="my-10">
                <h1 className="text-2xl font-medium md:text-3xl">About Me</h1>
                <p className="text-gray-400 mt-3 md:text-lg">My name is Zach McMullen and I'm a student and developer from Las Vegas, Nevada. Beyond coding I love to play basketball, video games and spend time with my family.</p>
            <ul className="mt-5 flex">
                <li><a className='mr-3 text-sky-400 hover:text-sky-500 text-lg' href="https://www.linkedin.com/in/zach-mcmullen-ba3a2621b/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a className='mx-3 text-sky-400 hover:text-sky-500 text-lg' href="https://github.com/ZachMcM"><i className="fa-brands fa-github"></i></a></li>
                <li><a className='mx-3 text-sky-400 hover:text-sky-500 text-lg' href="mailto:zachmcmullen04@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
            </ul>
            </section>
            <section className="my-10">
                <h1 className="text-2xl font-medium md:text-3xl">Recent Projects</h1>
                <div className="my-10 lg:grid lg:grid-cols-3 lg:gap-10">
                    {
                        repos.map((repo : any) => {
                            return (
                            <RepoCard 
                                name={repo.name}
                                description={repo.description}
                                url={repo.url}
                                language={repo.language}
                                homepage={repo.homepage}
                            />
                            )
                        })
                    }
                </div>
                <Link to={'/projects'} className='p-4 bg-sky-400 rounded-md hover:bg-sky-500 duration-700 text-white'>All Projects</Link>
            </section>
        </main> 
    )
}
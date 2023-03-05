import { useState, useEffect } from 'react'

interface Repo {
  name: string
  description: string
  url: string
  language: string
  homepage: string
}

import './App.css'
import RepoCard from './RepoCard'

function App() {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRepos()
    setInitialColorMode()
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

  function setInitialColorMode() {
    const savedColorMode = localStorage.getItem('colorMode')
    if (savedColorMode) {
      document.body.classList.add(savedColorMode)
    } else {
      document.body.classList.add('dark')
    }
  }

  function setColorMode() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      localStorage.setItem('colorMode', 'light')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      localStorage.setItem('colorMode', 'dark')
    }
  }

  function handleSearch(userSearch: string) {
    setSearch(userSearch)
    getRepos()
  }

  return (
    <>
      <nav className='bg-white dark:bg-slate-900 md:text-lg sticky z-50 top-0 w-full text-sm flex px-5 py-8 justify-between shadow-lg dark:text-white'>
        <p className='mx-3'>Zach McMullen</p>
        <ul className='flex'>
          <li className='mx-3 md:text-2xl'><a className='text-sky-400 hover:text-sky-500' href='https://github.com/ZachMcM'><i className="fa-brands fa-github"></i></a></li>
          <li className='mx-3 md:text-2xl'><button onClick={() => (setColorMode())}><i className="fa-solid fa-circle-half-stroke"></i></button></li>
        </ul>
      </nav> 
      <main className="w-full pt-10 pb-32 px-10 flex flex-col md:px-48 xl:px-56 2xl:px-96 bg-white dark:bg-slate-900 dark:text-white">
        <section className="my-10">
          <h1 className="text-2xl font-medium md:text-3xl">My name is <span className='text-sky-400'>Zach McMullen</span> and welcome to my portfolio!</h1>
          <p className="text-gray-400 mt-3 md:text-lg">This fullstack portfolio was built using React JS, Typescript, Tailwind CSS, Express JS, and the Github REST API. Here you can find information about my projects and me!</p>
        </section>
        <section className="my-10">
          <h1 className="text-2xl font-medium md:text-3xl">Projects</h1>
          <div className="outline-none mt-6 flex items-center dark:text-white bg-transparent border border-gray-400 p-4 rounded-lg w-full focus-within:outline-sky-400 focus-within:outline-1">
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
              repos.map((repo : Repo) => {
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
        </section>
        <section className="my-10">
          <h1 className="text-2xl font-medium md:text-3xl">About Me</h1>
          <p className="text-gray-400 mt-3 md:text-lg">My name is Zach McMullen and I'm a student and developer from Las Vegas, Nevada. Beyond coding I love to play basketball, video games and spend time with my family.</p>
          <ul className="mt-5 flex">
            <li><a className='mr-3 text-sky-400 hover:text-sky-500 text-lg' href="https://www.instagram.com/zachmcmullen0/"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a className='mx-3 text-sky-400 hover:text-sky-500 text-lg' href="https://www.linkedin.com/in/zach-mcmullen-ba3a2621b/"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a className='mx-3 text-sky-400 hover:text-sky-500 text-lg' href="https://github.com/ZachMcM"><i className="fa-brands fa-github"></i></a></li>
            <li><a className='mx-3 text-sky-400 hover:text-sky-500 text-lg' href="mailto:zachmcmullen04@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
          </ul>
        </section>
        <section className="my-10">
          <h1 className="text-2xl font-medium md:text-3xl">Stats</h1>
        </section>
      </main>   
      <footer className='text-sm w-full px-10 md:px-48 xl:px-56 2xl:px-96 pb-12'>
          <ul className='my-3 flex'>
            <li className='hover:text-gray-400 mx-2'>
              <a href="#">Home</a>
            </li>
            <li className='hover:text-gray-400 mx-2'>
              <a href="/projects">Projects</a>
            </li>
            <li className='hover:text-gray-400 mx-2'>
              <a href="https://github.com/ZachMcM?tab=repositories"><i className="fab fa-github"></i></a>
            </li>
          </ul>
          <p className='dark:text-gray-300 mx-2'>© 2021 Zach McMullen</p>
        </footer>
    </>
  )
}

export default App

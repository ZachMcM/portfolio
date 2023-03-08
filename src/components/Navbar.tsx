import {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    useEffect(() => {
        setInitialColorMode()
    })

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

    return (
        <nav className='bg-white dark:bg-zinc-900 md:text-lg sticky z-50 top-0 w-full text-sm flex px-5 py-8 justify-between shadow-lg dark:text-white'>
            <p className='mx-3'>Zach McMullen</p>
            <ul className='flex items-center'>
                <li className='mx-3 md:text-lg text-gray-400 hover:text-gray-500'><Link to={'/'}>Home</Link></li>
                <li className='mx-3 md:text-lg text-gray-400 hover:text-gray-500'><Link to={'/projects'}>Projects</Link></li>
                <li className='mx-3 md:text-2xl'><a className='text-emerald-500 hover:text-emerald-600' href='https://github.com/ZachMcM'><i className="fa-brands fa-github"></i></a></li>
                <li className='mx-3 md:text-2xl'><button onClick={() => (setColorMode())}><i className="fa-solid fa-circle-half-stroke"></i></button></li>
            </ul>
        </nav> 
    )
}
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='p-10 bg-white dark:bg-slate-900'>
            <ul className="flex text-sm my-2">
                <li className="mx-1 text-gray-400 hover:text-gray-500"><Link to={'/'}>Home</Link></li>
                <li className="mx-1 text-gray-400 hover:text-gray-500">·</li>
                <li className="mx-1 text-gray-400 hover:text-gray-500"><Link to={'/projects'}>Projects</Link></li>
            </ul>
            <ul className='flex text-sm my-2'>
                <li className='mx-1'><a className='text-sky-400 hover:text-sky-500' href='https://github.com/ZachMcM'>Github</a></li>
                <li className='mx-1 text-sky-400'>·</li>
                <li className='mx-1'><a className='text-sky-400 hover:text-sky-500' href='https://www.linkedin.com/in/zach-mcmullen-ba3a2621b/'>LinkedIn</a></li>
                <li className='mx-1 text-sky-400'>·</li>
                <li className='mx-1'><a className='text-sky-400 hover:text-sky-500' href='mailto:zachmcmullen04@gmail.com'>Email</a></li>
            </ul>
            <p className='text-gray-400 text-sm ml-1'>Made with <i className="fa-solid fa-heart"></i> by <a className='text-sky-400 hover:text-sky-500 cursor-pointer' href='https://zachmcmullen.com'>Zach McMullen</a></p>
        </footer>
    )
}
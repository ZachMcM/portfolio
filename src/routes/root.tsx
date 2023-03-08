import '../App.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Root() {
    return (
        <div className='bg-white dark:bg-zinc-900 font-poppins'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
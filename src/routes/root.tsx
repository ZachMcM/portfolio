import '../App.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Root() {
    return (
        <div className='bg-white dark:bg-slate-900'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
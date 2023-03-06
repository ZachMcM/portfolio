import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './home'
import Projects from './projects'
import '../App.css'

export default function Root() {
    return (
        <div className='bg-white dark:bg-slate-900'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            <Footer />
        </div>
    )
}
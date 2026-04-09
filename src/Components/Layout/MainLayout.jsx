import { Outlet } from 'react-router-dom'
import '../../App.css'
import Footer from './Footer'
import MobileSidebar from './MobileSidebar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function MainLayout() {
  return (
    <div className="min-h-screen px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-[1600px] gap-4">
        <Sidebar />
        <MobileSidebar />
        <div className="min-w-0 flex-1">
          <Navbar />
          <main className="page-enter mt-5 min-h-[calc(100vh-152px)]">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainLayout

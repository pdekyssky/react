import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"

const SharedLayout = () => {
  return (
    <div>
        <Navbar />

            <Outlet />

        <Footer />
    </div>
  )
}

export default SharedLayout
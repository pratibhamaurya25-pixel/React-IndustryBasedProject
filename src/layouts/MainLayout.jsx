import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="app">
        <Navbar />

        <main className="main-content">
               <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default MainLayout;
import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-4 md:pt-5 px-4 md:px-10 fixed w-full z-10">
        <NavbarComponent />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

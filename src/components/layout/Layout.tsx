import { Outlet } from "react-router-dom";
import NavbarComponent from "../ui/NavbarComponent";


export default function Layout() {
  return (
    <div >
        {/* <NavbarComponent /> */}
        <Outlet />
    </div>
  )
}

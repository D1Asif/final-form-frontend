import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'
import Logo from "../../assets/finalform-black.png"
import { Link } from 'react-router-dom'
import CartButton from '../ui/CartButton'

type TMenuItem = {
    path: string,
    name: string
}

export default function NavbarComponent() {
    const menuItems: TMenuItem[] = [
        {
            path: "/products",
            name: "Products"
        },
        {
            path: "/about-us",
            name: "About us"
        },
        {
            path: "/product-management",
            name: "Product Management"
        }
    ]

    const menu = menuItems.map((item: TMenuItem) => (
        <NavbarItem className='text-body-2' key={item.name}>
            <Link to={item.path}>{item.name}</Link>
        </NavbarItem>
    ))

    return (
        <Navbar className='px-8 rounded-lg shadow-sm w-full'>
            <NavbarContainer className='max-w-[3000px]'>
                <NavbarBrand>
                    <Link to="/">
                        <img className='h-5 md:h-7' src={Logo} alt="FinalForm" />
                    </Link>
                </NavbarBrand>
                <NavbarList>
                    {menu}
                    <CartButton />
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    {menu}
                    <div className='ml-3'>
                        <CartButton />
                    </div>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}

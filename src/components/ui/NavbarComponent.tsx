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

export default function NavbarComponent() {
    return (
        <Navbar className='border-none px-8 rounded-md shadow-sm'>
            <NavbarContainer>
                <NavbarBrand>
                    <Link to="/">
                        <img className='h-5 md:h-7' src={Logo} alt="keep" />
                    </Link>
                </NavbarBrand>
                <NavbarList>
                    <NavbarItem className='text-body-2 '>
                        <Link to="/products">Products</Link>
                    </NavbarItem>
                    <NavbarItem className='text-body-2 '>
                        <Link to="/about-us">About us</Link>
                    </NavbarItem>
                    <NavbarItem className='text-body-2 '>
                        <Link to="/product-management">Product Management</Link>
                    </NavbarItem >
                    <NavbarItem active className='text-body-2 '>
                        <Link to="/cart">Cart</Link>
                    </NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem>Figma</NavbarItem>
                    <NavbarItem>Documentation</NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem active>Get Started</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}

import { Button } from "keep-react";
import Logo from "../../assets/finalform-white.png"
import { FacebookLogo, InstagramLogo, Phone, YoutubeLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

const Footer = () => {
    return (
        <>
            <footer className="relative z-5 bg-black text-white pt-14 pb-6 lg:pt-20 lg:pb-14 px-4 md:px-20 mt-auto">
                <div>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <Link to="/" className="mb-6 inline-block max-w-[180px]">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="max-w-full"
                                    />
                                </Link>
                                <p className="mb-7 text-gray-400">
                                    FinalForm brings you high-performance fitness gear, engineered to push limits & elevate your journey to peak potential.
                                </p>
                                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                                    <Phone size={24} />
                                    <span>&nbsp;+012 (345) 678 99</span>
                                </p>
                            </div>
                        </div>

                        <LinkGroup header="Resources">
                            <NavLink link="/#" label="SaaS Development" />
                            <NavLink link="/#" label="Our Products" />
                            <NavLink link="/#" label="User Flow" />
                        </LinkGroup>
                        <LinkGroup header="Company">
                            <NavLink link="/#" label="About TailGrids" />
                            <NavLink link="/#" label="Contact & Support" />
                            <NavLink link="/#" label="Success History" />
                        </LinkGroup>

                        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                                    Follow Us On
                                </h4>
                                <div className="mb-6 flex gap-5 items-center">
                                    <Button shape="circle">
                                        <FacebookLogo size={32} weight="bold" />
                                    </Button>
                                    <Button shape="circle">
                                        <InstagramLogo size={32} weight="bold" />
                                    </Button>
                                    <Button shape="circle">
                                        <YoutubeLogo size={32} weight="bold" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }: {children: ReactNode, header: string}) => {
    return (
        <>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                    <h4 className="mb-9 text-xl font-semibold">
                        {header}
                    </h4>
                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }: {link: string, label: string}) => {
    return (
        <li>
            <a
                href={link}
                className="inline-block leading-loose text-gray-400 hover:text-white"
            >
                {label}
            </a>
        </li>
    );
};

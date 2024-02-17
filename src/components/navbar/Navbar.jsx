"use client"
import NavLink from "./navlink";


const Navbar = () => {

    // create links
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]


    return (
        <div className="w-full flex justify-between items-center gap-2 mb-10 border-b-[1px] py-5 border-[#b6b6b6]">
            <div>Logo</div>
            <div className="flex justify-end items-center gap-8 font-semibold text-[#ff8a1d]">
                {
                    links.map(link => <NavLink key={link.title} item={link}></NavLink>)
                }
            </div>
        </div>
    );
};

export default Navbar;
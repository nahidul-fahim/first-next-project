import Link from "next/link";


const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center gap-2 mb-10 border-b-[1px] py-5 border-[#b6b6b6]">
            <div>Logo</div>
            <div className="flex justify-end items-center gap-8 font-semibold text-[#ff8a1d]">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ item }) => {

    // get hooks
    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${pathName === item.path ? "border-b-2 border-white duration-500" : "border-b-2 border-[#ffffff00]"}`}>{item.title}</Link>
    );
};

export default NavLink;
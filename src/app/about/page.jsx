"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import aboutImg from "../../../public/next js.png"

const Page = () => {
    const searchParams = useSearchParams();
    console.log(searchParams);

    return (
        <div>
            <h2>About page</h2>
            <Image src={aboutImg} alt="About page image" priority={true} width={500} height={500}></Image>
        </div>
    );
};

export default Page;

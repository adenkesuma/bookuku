import { FC } from "react"
import Image from "next/image";
import BookukuLogo from "../../public/assets/logo-bookuku.png"
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (  
        <header className="w-full py-4">
            <nav className="md:container mx-auto flex justify-between items-center">
                <Image 
                    className="w-[120px]"
                    src={BookukuLogo} 
                    alt="bookuku logo" 
                />
                <ul className="flex justify-between items-center gap-8">
                    <li className="list-none">
                        <Link className="font-semibold text-[16px]" href="#">About</Link>
                    </li>
                    <li className="list-none">
                        <Link className="font-semibold text-[16px]" href="#">Store</Link>
                    </li>
                    <li className="list-none">
                        <Link className="font-semibold text-[16px]" href="#">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Navbar;
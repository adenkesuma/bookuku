import { FC } from "react"
import Image from "next/image"
import BookukuLogo from "../../public/assets/logo-bookuku.png"
import Link from "next/link"

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
                        <Link className="font-semibold text-[16px] hover:border-b-2 hover:border-zinc-900 pb-2" href="#">About</Link>
                    </li>
                    <li className="list-none">
                        <Link className="font-semibold text-[16px] hover:border-b-2 hover:border-zinc-900 pb-2" href="#">Store</Link>
                    </li>
                    <li className="list-none">
                        <Link className="font-semibold text-[16px] hover:border-b-2 hover:border-zinc-900 pb-2" href="#">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
 
export default Navbar
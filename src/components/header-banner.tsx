import { FC } from 'react'
import Authors from "../../public/assets/authors.svg"
import Image from 'next/image';
import QrCode from '../../public/assets/scan.svg'

interface HeaderBannerProps {}

const HeaderBanner: FC<HeaderBannerProps> = () => {
    return (  
        <header className='w-full mt-9'>
            <div className="md:container flex justify-between items-center gap-12">
                <div className='w-[22%]'>
                    <Image className="w-[260px]" src={Authors} alt="authors image"/>
                </div>
                <div className="w-[58%]">
                    <h1 className="text-center text-[50px] font-semibold text-[#1a1a1a] mb-4">
                        Embark on a Literary <br /> Journey at Our Online <br /> Bookstore
                    </h1>
                    <p className="text-center text-[16px] font-normal text-[#444444]">
                        Welcome to the Embark on a Literary Journey at Our Online Bookstore app! Explore the enchanting world of literature at your fingertips. With a vast collection of books ranging from contemporary bestsellers to timeless classics, our app is your gateway to endless reading possibilities. Immerse yourself in captivating stories, discover new authors, and revisit beloved favorites from the comfort of your own device.
                    </p>
                </div>
                <div className="w-[20%]">
                    <p className="text-center mb-6 text-[16px] text-[#444444]">
                        our bookstore has something for everyone,
                        Shop with us today and discover the joy of reading!
                    </p>
                    <Image className='w-[260px]' src={QrCode} alt="scan qr code" />
                </div>
            </div>
        </header>
    )
}

export default HeaderBanner
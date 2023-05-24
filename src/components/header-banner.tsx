import { FC } from 'react'
import Discount from "../../public/assets/discount.svg"
import Authors from "../../public/assets/authors.svg"
import Image from 'next/image'
import Link from 'next/link'
import Sun from "../../public/assets/sun.svg"
import BackgroundBooksStore from "../../public/assets/background-books-store.svg"
import QrCode from '../../public/assets/scan.svg'
import Storm from "../../public/assets/storm.svg"
import People1 from "../../public/assets/people-1.png"
import People2 from "../../public/assets/people-2.png"
import People3 from "../../public/assets/people-3.png"
import { ArrowRight } from 'lucide-react'

interface HeaderBannerProps {}

const HeaderBanner: FC<HeaderBannerProps> = () => {
    return (  
        <header className='w-full mt-9 relative'>
            <div className="md:container flex justify-between items-center gap-12">
                <div className='w-[300px]'>
                    <Image className="w-full" src={Authors} alt="authors image"/>
                </div>
                <div className="w-[60%] z-50">
                    <h1 className="text-center text-[50px] font-semibold text-[#1a1a1a] mb-4">
                        Embark on a Literary <br /> Journey at Our Online <br /> Bookstore
                    </h1>
                    <p className="text-center text-[16px] font-medium text-[#444444]">
                        Welcome to the Embark on a Literary Journey at Our Online Bookstore app! Explore the enchanting world of literature at your fingertips. With a vast collection of books ranging from contemporary bestsellers to timeless classics, our app is your gateway to endless reading possibilities. Immerse yourself in captivating stories, discover new authors, and revisit beloved favorites from the comfort of your own device.
                    </p>
                </div>
                <div className="w-[300px]">
                    <p className="w-full text-center font-medium mb-6 text-[16px] text-[#444444]">
                        our bookstore has something for everyone,
                        Shop with us today and discover the joy of reading!
                    </p>
                    <Image className='w-full' src={QrCode} alt="scan qr code" />
                </div>
            </div>

            <Image
                className='absolute top-4 right-[300px] w-[240px]'
                src={Storm}
                alt="storm svg"
            />
            <Image
                className='w-[55px] h-[55px] absolute top-[185px] left-[450px]'
                src={Sun}
                alt="sun svg"
            />

            <div className="flex justify-between items-center mt-6 mb-10">
                <div className="flex justify-between items-center gap-6">
                    <Image 
                        className=''
                        src={Discount}
                        alt="discount"
                    />
                    <button className="font-bold text-[18px] border-[1.8px] border-zinc-900 rounded-[30px] py-2 px-12">
                        <Link href="#">
                            Explore Now
                        </Link>
                    </button>
                    <button className="bg-zinc-900 rounded-[30px] py-[10px] px-12">
                        <Link href="#">
                            <ArrowRight className="w-8 h-6 text-white"/>
                        </Link>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <p className="font-medium text-[#444444]">Our Community :</p>
                    <div className="flex justify-center items-center">
                        <Image 
                            className="w-[55px] h-[55px] rounded-[50%] border-2 border-white"
                            src={People1}
                            alt="people 1"
                        />
                        <Image 
                            className="w-[55px] h-[55px] rounded-[50%] -ml-4 border-2 border-white"
                            src={People2}
                            alt="people 2"
                        />
                        <Image 
                            className="w-[55px] h-[55px] rounded-[50%] -ml-4 border-2 border-white"
                            src={People3}
                            alt="people 3"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-[24px]">5K</p>
                        <span className="font-medium text-[14px] text-[#444444]">join Book lover </span> 
                    </div>
                </div>
            </div>

            <div>
                <Image 
                    src={BackgroundBooksStore}
                    alt="background books store"
                />
            </div>
        </header>
    )
}

export default HeaderBanner
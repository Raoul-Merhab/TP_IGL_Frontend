import { useState } from 'react';
import Image from 'next/image'
import Navbar from "@/components/Navbar";
import logo from "assets/Logo.png";
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/router';
import getCookies from '@/data/cookies/getCookies';

const Search = ({cookie, value, setValue, toSearch}) => {
    const router = useRouter();
    return (
        <div className=' flex flex-col h-screen bg-[#113E21]'>
			<Navbar role={2} user={getCookies()?.nom} disableSettings={false} current={"Accueil"} functions={[()=>{}]} />
			<div className=" h-[20%] w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
                    Bienvenue sur Article Atlas
                </h2>
                <p>Le moteur de recherche scientifique basé sur l'IA</p>
			</div>
            <div className=' h-[66%] w-[60%] self-center rounded-3xl my-[2%] bg-aa-white overflow-y-scroll hide-scroll-bar'>
                <div className="w-full h-full flex flex-col gap-10 items-center py-4">
                    <div className=' w-2/3 md:w-1/4'>
                        <Image
                            src={logo}
                        />
                    </div>
                    <SearchBar value={value} setValue={setValue} clickSearch={toSearch} />
                </div>
            </div>
        </div>
    )
}

export default Search
import React from 'react'
import Search from '../Search';
import heartIcon from "../../../public/assets/searchResult/heartIcon.svg";
import download from "../../../public/assets/searchResult/download.svg";
import Image from "next/image";
import Navbar from '../Navbar';

const SearchDetail = () => {
    const titre=
        "Article title article title article title article title";
    
    const resume =
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    const mc =
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    const text =
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ";
    const date =
        "01/01/2024"
    const references = [
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
        "Resmue lorem  ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",

    ]
    const auteurs=[
        "lorem loren",
        "lorem loren"
    ]
    const institutions =[
        "lorem loren",
        "lorem loren"
    ]
    function diviserEnDeux(chaine) {
        var longueur = chaine.length;
        var moitie = Math.floor(longueur / 2);

        var partie1 = chaine.substring(0, moitie);
        var partie2 = chaine.substring(moitie);

        return [partie1, partie2];
    }
    var result = diviserEnDeux(text);

    return (
        <div className="w-full">
            <Navbar />
            <div className=" mt-16 w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
                <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
                        Bienvenu Sur Article Atlas
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adip</p>
                </div>
            </div>
            <div className="w-full bg-aa-vert flex justify-center items-center py-4 ">
                <Search /> {/**Search bar */}
            </div>

            <div className="w-full bg-aa-white flex justify-center  text-black py-5">
                <div className="bg-aa-gris  py-10  w-[90%] sm:w-[80%]  rounded-lg">
                    <div className="px-4 flex justify-between  gap-3 sm:gap-5  items-center lg:flex-row flex-col">

                       
                            <p className="text-[18px] sm:text-[20px]  font-semibold text-aa-vert">
                                {titre}
                            </p>
                            
                      

                        <div className="flex justify-between gap-3 sm:gap-5 items-center   lg:flex-row  flex-col ">
                        <p>{date}</p>
                            <div className="flex gap-3 cursor-pointer">
                                <Image src={heartIcon} />
                                <p>Sauvegarder</p>
                            </div>
                            <div className="flex gap-3 cursor-pointer">
                                <Image src={download} />
                                <p>Télécharger PDF </p>
                            </div>
                        </div>
                    </div>





                    <div className=" px-4 py-4">
                        <p> {auteurs.map((e, index) => (
                                    <span key={index} className=" font-normal">
                                        {e},
                                    </span>
                                ))}</p>
                        <p>{institutions.map((e, index) => (
                                    <span key={index} className=" font-normal">
                                       {e},
                                    </span>
                                ))}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-0 sm:gap-9 px-8">
                        <div className="flex flex-col gap-11">
                            <div>
                                <p className="">
                                    <span className="font-bold text-[15px] sm:text-[18px]">Résumé : </span>{" "}
                                    {resume}
                                </p>
                            </div>
                            <div>
                                <p className="">
                                    <span className="font-bold text-[15px] sm:text-[18px]">Mots clés : </span> {mc}
                                </p>
                            </div>
                            <div>{result[0]}</div>
                        </div>
                        <div className="flex flex-col gap-11">
                            <div>{result[1]}</div>
                            <div>
                                <span className="font-bold text-[15px] sm:text-[18px]">References : </span>{" "}
                                {references.map((e, index) => (
                                    <div key={index} className=" font-normal">
                                        ({index + 1}) {e}
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-10 justify-center items-center space-y-2 md:space-y-3">
                <div className="flex justify-center items-center bg-aa-marron text-white sm:w-[25%] w-[50%] cursor-pointer py-3 md:py-4 rounded-md my-10 hover:bg-aa-marron/[0.8] transition-colors duration-[0.2s]">
                    <button className="w-full bg-transparent  text-[15px] sm:text-[18px] font-semibold uppercase" type="">
                        Modifier
                    </button>
                </div>
                <div className="flex justify-center items-center bg-aa-vert text-white  sm:w-[25%]  w-[50%] cursor-pointer py-3 md:py-4 rounded-md my-10 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
                    <button className="w-full bg-transparent  text-[15px] sm:text-[18px] font-semibold uppercase" type="">
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
}
export default SearchDetail;






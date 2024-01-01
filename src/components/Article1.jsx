import React from 'react'
import Image from "next/image";
import heartIcon from "../../public/assets/searchResult/heartIcon.svg";
import download from "../../public/assets/searchResult/download.svg";
export default function Article1({ article }) {
  return (
    <div className=" bg-aa-gris px-7 py-4">
      <div className="flex flex-col py-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg md:text-2xl">{article.titre}</h2>
          <p className="font-medium lg:block hidden">{article.date}</p>
        </div>
        <div className="flex flex-wrap">
          {article.authors.map((author, index) => (
            <p key={index} className="mr-2">{author},</p>
          ))}
        </div>
        <p className="font-medium block lg:hidden">{article.date}</p>
      </div>

      <div className="py-4">{article.resume}</div>

      <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row justify-between items-center pt-3">
        <div className='flex  justify-between items-center '>

          <div className="flex items-center gap-3 cursor-pointer mb-2">
            <Image src={download} />
            <p>Télécharger PDF</p>
          </div>
        </div>

        <div className="uppercase bg-[#B38B59] font-semibold text-white px-8 py-2 cursor-pointer hover:bg-[#B38B59]/[0.8] transition-colors duration-[0.2s]">
          Consulter
        </div>
      </div>

    </div>

  )
}
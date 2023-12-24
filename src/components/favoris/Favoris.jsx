import Image from "next/image";
import React from "react";
import heartIcon from "../../../public/assets/searchResult/heartIcon.svg";
import download from "../../../public/assets/searchResult/download.svg";
const Favoris = () => {
  const articles = [
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
  ];
  return (
    <>
      <div className="w-full px-32 py-10 bg-[#F0F0F0] text-black">
        <div>
          <h2 className="text-[42px]  max-w-[290px] font-bold text-[#113E21]">
            Consulter Mes Favoris
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      <div className="w-full bg-[#FEFEFE] text-black flex flex-col items-center justify-center gap-3 py-20">
        {articles.map((article) => (
          <div className="max-w-[60%] bg-[#F0F0F0] px-7 py-4">
            <div className="flex flex-col py-3">
              <div className="flex justify-between items-center ">
                <h2 className="font-semibold text-[20px]">{article.titre}</h2>
                <p className="font-medium">{article.date}</p>
              </div>
              <div className="flex">
                {article.authors.map((author, index) => (
                  <p>{author} ,</p>
                ))}
              </div>
            </div>
            <div className="py-4">{article.resume}</div>
            <div className="flex justify-between items-center pt-3">
              <div className="flex items-center gap-3 cursor-pointer">
                <Image src={heartIcon} />
                <p>Annuler</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <Image src={download} />
                <p>Télécharger PDF</p>
              </div>

              <div className="uppercase bg-[#B38B59] font-semibold text-white px-8 py-2 cursor-pointer hover:bg-[#B38B59]/[0.8] transition-colors duration-[0.2s]">
                Consulter
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favoris;

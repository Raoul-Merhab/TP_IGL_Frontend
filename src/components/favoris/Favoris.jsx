import React from "react";
import Article from "../Article";
import Navbar from "../Navbar";
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
    <div className='bg-[#FEFEFE]'>
    <Navbar/>
      <div className="mt-16 w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
            Consulter Mes Favoris
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      </div>
      <div className="w-[90%] sm:w-[60%] mx-auto text-black flex flex-col items-center justify-center py-20 gap-3">
        {/**Map sur les articles*/}
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </>
  );
  
};

export default Favoris;

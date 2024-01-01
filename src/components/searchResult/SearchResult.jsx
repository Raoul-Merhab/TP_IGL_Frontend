import React from 'react'
import Header from '../Header';
import Article1 from '../Article1';
import Search from '../Search';
import Filtre from '../Filtre';
import Navbar from '../Navbar';
const SearchResult = () => {
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
    <div className="w-full">
      <div className='bg-[#FEFEFE]'>
      <Navbar />
      <div className=" mt-16 w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
            Bienvenu Sur Article Atlas
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      </div>
      <div className="w-full bg-aa-vert flex justify-center items-center py-4 ">
        <Search /> {/**Search bar */}
      </div>
      <div className="flex flex-col-reverse sm:flex-row bg-aa-white px-3 gap-5 py-2">

        <div className="w-full  sm:w-[60%] text-black flex flex-col gap-3">  {/**Map sur les articles*/}
          {articles.map((article, index) => (
            <Article1 key={index} article={article} />
          ))}
        </div>
        <Filtre /> {/**Search criteres */}
      </div>
    </div>
  );
}

export default SearchResult
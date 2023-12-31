import React from "react";
import heartIcon from "../../../public/assets/searchResult/heartIcon.svg";
import download from "../../../public/assets/searchResult/download.svg";
import Image from "next/image";

const Article = () => {
  const resume =
    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
  const mc =
    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
  const text =
    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ";
  function diviserEnDeux(chaine) {
    var longueur = chaine.length;
    var moitie = Math.floor(longueur / 2);

    var partie1 = chaine.substring(0, moitie);
    var partie2 = chaine.substring(moitie);

    return [partie1, partie2];
  }
  var result = diviserEnDeux(text);
  return (
    <div className="px-[190px] bg-aa-white text-black py-5">
      <div className="bg-aa-gris  py-10  rounded-lg">
        <div className="px-4 flex justify-between items-center">
          <p className="text-[20px] font-semibold text-aa-vert">
            Article-title article title article title article title
          </p>
          <p>07-12-2023</p>
          <div className="flex gap-3">
            <Image src={heartIcon} /> <p>Sauvegarder</p>
          </div>

          <div className="flex gap-3">
            <Image src={download} /> <p>Télécharger PDF </p>
          </div>
        </div>
        <div className=" px-4 py-4">
          <p>Author name, author name</p>
          <p>Institution name1, institution name 2</p>
        </div>
        <div className="flex gap-9 px-8">
          <div className="flex flex-col gap-11">
            <div>
              <p className="">
                <span className="font-bold text-[18px]">Résumé : </span>{" "}
                {resume}
              </p>
            </div>
            <div>
              <p className="">
                <span className="font-bold text-[18px]">Mots clés </span> {mc}
              </p>
            </div>
            <div>{result[0]}</div>
          </div>
          <div>{result[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default Article;

import React from "react";
import upload from "../../../public/assets/upload/uploadIcon.svg";
import Image from "next/image";
const Upload = () => {
  const tab = [
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
  ];
  return (
    <>
      <div className="w-full px-32 py-10 bg-aa-gris text-black">
        <div>
          <h2 className="text-[42px]  max-w-[370px] font-bold text-aa-vert">
            Upload De Nouveaux Articles
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      <div className="bg-aa-white flex px-36 py-8 gap-9">
        <div className="text-black flex flex-col justify-center items-center bg-aa-gris px-7 pb-36 pt-10 rounded-lg">
          <div className="pb-16">
            <Image src={upload} />
          </div>
          <div className="flex flex-col gap-4 py-8">
            <p className="">lien d'article(s) pdf:</p>
            <input type="text" className="w-[428px] py-2 text-[20px]" />
          </div>
          <div className="py-4 bg-aa-marron w-full text-center text-[18px] text-white">
            Upload
          </div>
        </div>
        <div className="w-full bg-aa-marron rounded-lg px-16 py-5">
          <p className="font-semibold text-[20px] text-white">
            Articles uploadés{" "}
          </p>
          <div className="max-h-[591px] pt-4  overflow-y-scroll">
            {tab.map((e) => (
              <div className="py-8 bg-aa-gris my-4 mx-4 px-4 text-black">
                {e}
              </div>
            ))}
          </div>
          {/* <div className="text-center pt-10  w-full flex items-center justify-center">
            <p className="w-[70%] bg-aa-gris px-6 py-3 text-aa-marron text-[17px] font-semibold rounded-lg">
              AJOUTER MODERATEUR
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Upload;

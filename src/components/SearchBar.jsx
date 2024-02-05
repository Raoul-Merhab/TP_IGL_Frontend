import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchBar = ({value, setValue, clickSearch}) => {
    return (
        <div className=' w-full flex flex-col gap-10 items-center'>
            <div className="bg-aa-gris py-3 px-2 flex w-[83%] rounded-md flex-col md:flex-row">
                <input
                    placeholder="Recherche ..."
                    type="text"
                    value={value}
                    onChange={(event)=>{setValue(event.target.value)}}
                    className=" ml-2 py-2 text-[16px] sm:text-[20px] w-full text-black bg-aa-gris placeholder:text-[16px] sm:placeholder:text-[20px]  placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
                />
                
                <div className="bg-aa-vert px-8 h-8 md:h-12 font-semibold text-[16px] sm:text-[20px] rounded-md flex items-center justify-around gap-3 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s] cursor-pointer">
                    <FontAwesomeIcon
                        icon={faSearch}
                        color="#F0F0F0"
                        size="1x"
                        className=" cursor-pointer"
                    />
                    <button className="text-white sm:text-base " onClick={clickSearch}>Recherche</button>
                </div>
            </div>
            <p className=' text-aa-marron w-[80%] text-center'>lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
    )
}

export default SearchBar
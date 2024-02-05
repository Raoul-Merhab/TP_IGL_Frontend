import { useState } from "react";
import { useRouter } from "next/router";
import logo from "assets/Logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faChevronDown, faGear, faBars } from "@fortawesome/free-solid-svg-icons";
import handleSignOut from "@/data/auth/handleSignOut";


const Navbar = ({ role, user, disableSettings, current, functions }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenBars, setIsOpenBars] = useState(false);
	const router = useRouter();
	// role = 1 => user
	// role = 2 => mod
	// role = 3 => admin
	const roles = {
		1: "Utilisateur",
		2: "Moderateur",
		3: "Administrateur",
	}
	const links = {
		"Utilisateur":[
			{
				path: functions?()=>{functions[0](); setIsOpenBars(false)}:()=>{},
				name: "Accueil",
			},
			{
				path: functions?()=>{functions[1](); setIsOpenBars(false)}:()=>{},
				name: "Favoris",
			},
		],
		"Moderateur":[
			{
				path: function () {
					router.push("/");
				},
				name: "Accueil",
				color: "black",
			}
		],
		"Administrateur":[
			{
				path: functions?()=>{functions[0](); setIsOpenBars(false)}:()=>{},
				name: "Accueil",
			},{
				path: functions?()=>{functions[1](); setIsOpenBars(false)}:()=>{},
				name: "Upload",
			},
			{
				path: functions?()=>{functions[2](); setIsOpenBars(false)}:()=>{},
				name: "Moderateurs",
			},
		],
	}
	const toggleName = () => {
		setIsOpen(!isOpen);
		setIsOpenBars(false);
	};
	const onClickAccueil = () =>{
		router.push("/")
	}
	const onClickLogOut = () =>{
		handleSignOut();
		router.reload("/");
	}
	const onClickSettings = () =>{
		router.push("/account")
	}
	const onClickBars = () =>{
		setIsOpenBars(!isOpenBars);
		setIsOpen(false);
	}
	return (
		<div className=" h-[10%] w-full bg-aa-white flex flex-col">
			<div className="w-full h-[15%] bg-[#113E21]" />
			<nav className="w-full h-[85%] flex flex-row justify-between items-center px-1 md:px-4">
				<div className=" h-full flex flex-col justify-center items-center py-1 cursor-pointer" onClick={onClickAccueil}>
					<div className=" h-8 w-8 md:w-fit md:h-[80%]">
						<Image
							className=" h-full w-full"
							src={logo}
						/>
					</div>
					<h1 className=" text-aa-vert font-serif font-bold text-xs text-center">Article Atlas</h1>
				</div>
				<div className=" hidden md:flex flex-row gap-10 items-center">
					<div className=" flex flex-row gap-10">
						{
							links[roles[role]].map((link, index) => (
								<div key={index} className="flex flex-row items-center justify-center cursor-pointer" onClick={link.path}>
									<h1 className={`text-${current === link.name?"aa-marron":"black"} font-bold text-xl`}>{link.name}</h1>
								</div>
							))
						}
					</div>
					<div className=" text-ellipsis relative w-60 px-4 py-2 rounded-xl bg-aa-gris flex flex-row items-center justify-between">
						<h1 className="truncate">
							{user}
						</h1>
						<FontAwesomeIcon
							icon={faChevronDown}
							color={"#113E21"}
							size="1x"
							className={` rounded-full border-2 border-aa-vert p-1 ${disableSettings?"cursor-auto":"cursor-pointer"}`}
							onClick={disableSettings?()=>{}:toggleName}
						/>
						{
							isOpen &&
							<div className=" cursor-pointer absolute w-full bottom-0 translate-y-[120%] left-0 px-4 py-2 rounded-xl bg-aa-gris border-2 border-aa-vert flex flex-row gap-4 items-center" onClick={onClickSettings}>
								<FontAwesomeIcon
									icon={faGear}
									color={"#113E21"}
									size="1x"
									/>
								Paramètres du compte
							</div>
						}
					</div>
					<FontAwesomeIcon
						icon={faRightFromBracket}
						color={"#113E21"}
						size="2x"
						onClick={onClickLogOut}
						className=" cursor-pointer"
					/>
				</div>
				<div className=" md:hidden text-ellipsis relative w-60 px-4 py-2 rounded-xl bg-aa-gris flex flex-row items-center justify-between">
					<h1 className="truncate">
						{user}
					</h1>
					<FontAwesomeIcon
						icon={faChevronDown}
						color={"#113E21"}
						size="1x"
						className={` rounded-full border-2 border-aa-vert p-1 ${disableSettings?"cursor-auto":"cursor-pointer"}`}
						onClick={disableSettings?()=>{}:toggleName}
					/>
					{
						isOpen &&
						<div className=" cursor-pointer absolute w-full bottom-0 translate-y-[120%] left-0 px-4 py-2 rounded-xl bg-aa-gris border-2 border-aa-vert flex flex-row gap-4 items-center" onClick={onClickSettings}>
							<FontAwesomeIcon
								icon={faGear}
								color={"#113E21"}
								size="1x"
								/>
							Paramètres du compte
						</div>
					}
				</div>
				<div className="flex md:hidden relative">
					<FontAwesomeIcon
						icon={faBars}
						color={"#113E21"}
						size="2x"
						onClick={onClickBars}
						className=" cursor-pointer"
					/>
					{
						isOpenBars &&
						<div className=" absolute top-0 translate-y-[40px] w-32 right-0 bg-aa-gris rounded-2xl border-2 border-aa-vert border-aa-">
							<div className=" flex flex-col">
								{
									links[roles[role]].map((link, index) => (
										<>
											<div key={index} className="flex flex-row items-center justify-center cursor-pointer p-2" onClick={link.path}>
												<h1 className={`text-${current === link.name?"aa-marron":"black"} font-bold text-base`}>{link.name}</h1>
											</div>
											<div className=" w-[80%] ml-[10%] h-[1px] -mb-[1px] bg-aa-vert "></div>
										</>
									))
								}
							</div>
							<div className="flex flex-row w-full items-center gap-3 justify-center cursor-pointer bg-aa-vert p-2 rounded-xl" onClick={onClickLogOut}>
								<FontAwesomeIcon
									icon={faRightFromBracket}
									color={"#FEFEFE"}
									size="1x"
									className=" cursor-pointer"
								/>
								<h1 className={`text-aa-white font-bold text-base`}>Log Out</h1>
							</div>
						</div>
					}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

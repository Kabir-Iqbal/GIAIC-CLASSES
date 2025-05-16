import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo.png";
const Navbar = () => {
	return (
		<div>
			<div className='w-[1920px] h-[92px] bg-[#043873] py-4 px-[220px] flex justify-between items-center '>
				<div>
					<Image src={logo} alt='logo' width={191} height={34} />
				</div>
				<div className='w-[737.5px] h-[60px] flex justify-between items-center'>
					<div className='w-[549px] h-23px'>
						<ul className='text-[18px] font-semibold leading-[23px] flex justify-between text-white'>
							<li>Products</li>
							<li>Services</li>
							<li>Resources</li>
							<li>Contact</li>
						</ul>
					</div>
					<div>
						<button className='py-4 px-10 rounded-lg bg-[#FFE492]'>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

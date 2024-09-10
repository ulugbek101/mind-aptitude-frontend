import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	const [profileDropDownIsOpen, setProfileDropDownIsOpen] = useState(false);

	return (
		<aside className="bg-gray-800 select-none w-[20%] h-full">
			<div className="p-2 sm:p-6 lg:p-8 h-full">
				<div className="flex flex-col items-start h-full">
					<div className="flex flex-col gap-4 h-full">
						<div className="px-3 flex items-center gap-6 mb-4">
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
								alt="Your Company"
							/>
							<span className="font-bold text-xl text-white">
								Mind aptitude
							</span>
						</div>
						<NavLink
							to="/classes"
							className={({ isActive }) =>
								`${
									isActive && "bg-gray-700"
								} flex items-center gap-4 rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white  active:scale-90 transition`
							}
						>
							<i className="material-icons">book</i>
							Classes
						</NavLink>
						{/* <NavLink
							to="/workshops"
							className={({ isActive }) =>
								`${
									isActive && "bg-gray-700"
								} flex items-center gap-4 rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white  active:scale-90 transition`
							}
						>
							<i className="material-icons">note</i>
							Workshops
						</NavLink> */}
						<NavLink
							to="/tests"
							className={({ isActive }) =>
								`${
									isActive && "bg-gray-700"
								} flex items-center gap-4 rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white  active:scale-90 transition`
							}
						>
							<i className="material-icons">list</i>
							Tests
						</NavLink>
						<p className="mt-auto flex items-center gap-4 rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white cursor-pointer active:scale-90 transition">
							<i className="material-icons">logout</i>
							Logout
						</p>
					</div>

					{/* <div className="flex items-center gap-6">
						<i className="material-icons text-white cursor-pointer active:ring-2 active:ring-white rounded-full p-1">
							notifications
						</i>
						<div className="cursor-pointer w-[32px] h-[32px] active:ring-2 active:ring-white rounded-full p-1">
							<i className="material-icons text-white">person</i>
						</div>
					</div> */}
				</div>
			</div>
		</aside>
	);
}

export default Navbar;

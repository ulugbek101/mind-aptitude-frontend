import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
	return (
		<div className="flex h-[100vh]">
			<Navbar />
			<main className="p-2 sm:p-6 lg:p-8 w-[80%]">
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;

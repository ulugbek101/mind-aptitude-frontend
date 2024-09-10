import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === "/") {
			navigate("/classes");
		}
	}, []);

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

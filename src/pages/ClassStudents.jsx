import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title";

function ClassStudents() {
	const { className } = useParams();
	const navigate = useNavigate();

	function handleBack() {
		navigate("/classes");
	}

	return (
		<>
			<Title>{className.toUpperCase()} class's students</Title>
			<div className="mt-10">
				<div className="flex items-center justify-between">
					<button
						onClick={() => handleBack()}
						className="flex items-center gap-1 rounded bg-gray-700 text-white py-2 px-4 active:scale-90 mb-5 transition"
					>
						<span className="material-icons">undo</span>
						Back to classes
					</button>
					<div className="flex items-center gap-2">
						<Link
							to={`/room/${className}`}
							rel="noopener noreferrer"
							target="_blank"
							className="flex items-center gap-1 rounded bg-gray-700 text-white py-2 px-4 active:scale-90 mb-5 transition"
						>
							<span className="material-icons">videocam</span>
							New meeting
						</Link>
						<Link
							to={`/workshops/${className}`}
							className="flex items-center gap-1 rounded bg-purple-700 text-white py-2 px-4 active:scale-90 mb-5 transition"
						>
							<span className="material-icons">note</span>
							New workshop
						</Link>
						<button className="flex items-center gap-1 rounded bg-yellow-300 py-2 px-4 active:scale-90 mb-5 transition">
							<span className="material-icons">add</span>
							New student
						</button>
					</div>
				</div>
				<div className="relative overflow-x-auto rounded">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									#
								</th>
								<th scope="col" className="px-6 py-3">
									Fullname
								</th>
								<th scope="col" className="px-6 py-3">
									Email
								</th>
								<th scope="col" className="px-6 py-3">
									Phone number
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									1
								</th>
								<td className="px-6 py-3">John Doe</td>
								<td className="px-6 py-3">johndoe@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5555</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									2
								</th>
								<td className="px-6 py-3">Jane Smith</td>
								<td className="px-6 py-3">janesmith@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5556</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									3
								</th>
								<td className="px-6 py-3">Bob Johnson</td>
								<td className="px-6 py-3">bobjohnson@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5557</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									4
								</th>
								<td className="px-6 py-3">Alice Williams</td>
								<td className="px-6 py-3">alicewilliams@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5558</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									5
								</th>
								<td className="px-6 py-3">Charlie Brown</td>
								<td className="px-6 py-3">charliebrown@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5559</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									6
								</th>
								<td className="px-6 py-3">David Miller</td>
								<td className="px-6 py-3">davidmiller@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5560</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									7
								</th>
								<td className="px-6 py-3">Eve Davis</td>
								<td className="px-6 py-3">evedavis@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5561</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									8
								</th>
								<td className="px-6 py-3">Bob Johnson</td>
								<td className="px-6 py-3">bobjohnson@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5557</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									9
								</th>
								<td className="px-6 py-3">Alice Williams</td>
								<td className="px-6 py-3">alicewilliams@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5558</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									10
								</th>
								<td className="px-6 py-3">Charlie Brown</td>
								<td className="px-6 py-3">charliebrown@gmail.com</td>
								<td className="px-6 py-3">+1 555-555-5559</td>
							</tr>
						</tbody>
					</table>
					<div className="mt-5 flex items-center justify-center gap-4">
						<button className="border border-gray-900 hover:bg-white hover:text-black transition rounded-full p-1 bg-gray-900 text-white">
							<span class="material-icons flex items-center justify-center">
								chevron_left
							</span>
						</button>
						<div className="flex items-center gap-1">
							<button className="hover:bg-white hover:text-black transition rounded-full border border-gray-900 py-1 px-3 bg-gray-900 text-white">
								1
							</button>
							<button className="rounded-full bg-white border border-gray-900 py-1 px-3 text-black">
								2
							</button>
							<button className="hover:bg-white hover:text-black transition rounded-full border border-gray-900 py-1 px-3 bg-gray-900 text-white">
								3
							</button>
						</div>
						<button className="border border-gray-900 hover:bg-white hover:text-black transition rounded-full p-1 bg-gray-900 text-white">
							<span class="material-icons flex items-center justify-center">
								chevron_right
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ClassStudents;

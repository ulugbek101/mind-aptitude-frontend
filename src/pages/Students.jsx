import React from "react";
import Title from "../components/Title";

function Students() {
	return (
		<>
			<Title>All students</Title>
			<div className="mt-10">
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
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									1
								</th>
								<td className="px-6 py-4">John Doe</td>
								<td className="px-6 py-4">johndoe@gmail.com</td>
								<td className="px-6 py-4">+1 555-555-5555</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									2
								</th>
								<td className="px-6 py-4">Jane Smith</td>
								<td className="px-6 py-4">janesmith@gmail.com</td>
								<td className="px-6 py-4">+1 555-555-5556</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									3
								</th>
								<td className="px-6 py-4">Bob Johnson</td>
								<td className="px-6 py-4">bobjohnson@gmail.com</td>
								<td className="px-6 py-4">+1 555-555-5557</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									4
								</th>
								<td className="px-6 py-4">Alice Williams</td>
								<td className="px-6 py-4">alicewilliams@gmail.com</td>
								<td className="px-6 py-4">+1 555-555-5558</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									5
								</th>
								<td className="px-6 py-4">Charlie Brown</td>
								<td className="px-6 py-4">charliebrown@gmail.com</td>
								<td className="px-6 py-4">+1 555-555-5559</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									6
								</th>
								<td className="px-6 py-4">David Miller</td>
								<td className="px-6 py-4">davidmiller@gmail.com</td>
								<td className="px-6 py-4">+1 555-555-5560</td>
							</tr>
							<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									7
								</th>
								<td className="px-6 py-4">Eve Davis</td>
								<td className="px-6 py-4">evedavis@gmail.com</td>
								<td className="px-6 py-4">+1 555-555-5561</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Students;

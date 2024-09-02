import Title from "../components/Title";

function Classes() {
	return (
		<>
			<div>
				<Title>My classes</Title>
				<div className="mt-10">
					<button className="flex items-center gap-1 rounded bg-yellow-300 py-2 px-4 active:scale-90 mb-5 ml-auto transition">
						<span className="material-icons">add</span>
						New class
					</button>
					<div className="relative overflow-x-auto rounded">
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										#
									</th>
									<th scope="col" className="px-6 py-3">
										Name
									</th>
									<th scope="col" className="px-6 py-3">
										Students
									</th>
									<th scope="col" className="px-6 py-3">
										Time
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
									<td className="px-6 py-4">A1</td>
									<td className="px-6 py-4">2</td>
									<td className="px-6 py-4">18:00 - 20:00</td>
								</tr>
								<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										2
									</th>
									<td className="px-6 py-4">A2</td>
									<td className="px-6 py-4">4</td>
									<td className="px-6 py-4">10:00 - 12:00</td>
								</tr>
								<tr className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 bg-white dark:bg-gray-800">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										3
									</th>
									<td className="px-6 py-4">A3</td>
									<td className="px-6 py-4">1</td>
									<td className="px-6 py-4">08:00 - 10:00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Classes;

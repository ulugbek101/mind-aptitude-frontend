import { Link } from "react-router-dom";

function Registration() {
	return (
		<div className="font-[sans-serif]">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-4 h-full">
				<div className="max-md:order-1 lg:col-span-2 md:h-screen w-full bg-[#000842] md:rounded-tr-xl md:rounded-br-xl lg:p-12 p-8">
					<img
						src="https://readymadeui.com/signin-image.webp"
						className="lg:w-[70%] w-full h-full object-contain block mx-auto"
						alt="login-image"
					/>
				</div>

				<div className="w-full p-6">
					<form>
						<div className="mb-8">
							<h3 className="text-gray-800 text-3xl font-extrabold">
								Registration
							</h3>
							<p className="text-sm mt-4 text-gray-800">
								Already have an account{" "}
								<Link
									to="/login"
									className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
								>
									Sign in here
								</Link>
							</p>
						</div>

						<div className="mt-2">
							<label
								htmlFor="email"
								className="text-gray-800 text-[15px] mb-2 block"
							>
								E-mail:
							</label>
							<div className="relative flex items-center">
								<input
									id="email"
									name="email"
									type="email"
									required
									className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
									placeholder="Enter email"
								/>
								<i className="material-icons w-[18px] h-[18px] absolute right-4 text-gray-400">
									mail
								</i>
							</div>
						</div>

						<div className="mt-2">
							<label
								htmlFor="fullName"
								className="text-gray-800 text-[15px] mb-2 block"
							>
								Full name:
							</label>
							<div className="relative flex items-center">
								<input
									id="fullName"
									name="fullName"
									type="text"
									required
									className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
									placeholder="Enter email"
								/>
								<i className="material-icons w-[18px] h-[18px] absolute right-4 text-gray-400">
									person
								</i>
							</div>
						</div>

						<div className="mt-2">
							<label
								htmlFor="phoneNumber"
								className="text-gray-800 text-[15px] mb-2 block"
							>
								Phone number:
							</label>
							<div className="relative flex items-center">
								<input
									id="phoneNumber"
									name="phoneNumber"
									type="text"
									required
									className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
									placeholder="Enter email"
								/>
								<i className="material-icons w-[18px] h-[18px] absolute right-4 text-gray-400">
									phone
								</i>
							</div>
						</div>

						<div className="mt-2">
							<label
								htmlFor="password1"
								className="text-gray-800 text-[15px] mb-2 block"
							>
								Password:
							</label>
							<div className="relative flex items-center">
								<input
									id="password1"
									name="password1"
									type="password"
									required
									className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
									placeholder="Enter password"
								/>
								<i className="material-icons w-[18px] h-[18px] absolute right-4 text-gray-400 cursor-pointer">
									visibility
								</i>
							</div>
						</div>

						<div className="mt-2">
							<label
								htmlFor="password2"
								className="text-gray-800 text-[15px] mb-2 block"
							>
								Password confirmation:
							</label>
							<div className="relative flex items-center">
								<input
									id="password2"
									name="passwor2"
									type="password"
									required
									className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
									placeholder="Enter password"
								/>
								<i className="material-icons w-[18px] h-[18px] absolute right-4 text-gray-400 cursor-pointer">
									visibility
								</i>
							</div>
						</div>

						<div className="mt-8">
							<button
								type="button"
								className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
							>
								Sign up
							</button>
						</div>

						<div className="my-4 flex items-center gap-4">
							<hr className="w-full border-gray-300" />
							<p className="text-sm text-gray-800 text-center">or</p>
							<hr className="w-full border-gray-300" />
						</div>

						<button
							type="button"
							className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20px"
								className="inline"
								viewBox="0 0 512 512"
							>
								<path
									fill="#fbbd00"
									d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
									data-original="#fbbd00"
								/>
								<path
									fill="#0f9d58"
									d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
									data-original="#0f9d58"
								/>
								<path
									fill="#31aa52"
									d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
									data-original="#31aa52"
								/>
								<path
									fill="#3c79e6"
									d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
									data-original="#3c79e6"
								/>
								<path
									fill="#cf2d48"
									d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
									data-original="#cf2d48"
								/>
								<path
									fill="#eb4132"
									d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
									data-original="#eb4132"
								/>
							</svg>
							Continue with google
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Registration;

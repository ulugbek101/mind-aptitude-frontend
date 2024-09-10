import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Classes from "./pages/Classes";
import ClassStudents from "./pages/ClassStudents";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Registration from "./pages/Registration"

function App() {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route path="/classes" element={<Classes />} />
				<Route path="/classes/:className" element={<ClassStudents />} />
				{/* <Route path="/room" element={<RoomSetup />} /> */}
				<Route path="/room/:roomName" element={<Room />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/registration" element={<Registration />} />
		</Routes>
	);
}

export default App;

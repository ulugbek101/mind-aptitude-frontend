import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Classes from "./pages/Classes";
import Room from "./pages/Room";
import RoomSetup from "./pages/RoomSetup";
import Students from "./pages/Students";

function App() {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Classes />} />
				<Route path="/students" element={<Students />} />
				<Route path="/room" element={<RoomSetup />} />
				<Route path="/room/:roomName" element={<Room />} />
			</Route>
		</Routes>
	);
}

export default App;

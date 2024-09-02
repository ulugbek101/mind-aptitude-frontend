import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomSetup() {
	const [room, setRoom] = useState("");
	const navigate = useNavigate();

	function handleFormSubmit(e) {
		e.preventDefault();
		navigate(`/room/${room}`)
	}

	return (
		<div>
			<form action="" onSubmit={handleFormSubmit}>
				<label htmlFor="">Room name</label>
				<input
					value={room}
					onChange={e => setRoom(e.target.value)}
					type="text"
				/>
				<button type="submit">Enter</button>
			</form>
		</div>
	);
}

export default RoomSetup;

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function Room() {
	const { roomName } = useParams();

	async function meetingRoom(element) {
		const appId = 1155845383;
		const serverSecret = "53b94494f7c695f9d4b9209b33dce3ea";
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appId,
			serverSecret,
			roomName,
			Date.now().toString(),
			"thedevu101"
		);
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		zp.joinRoom({
			container: element,
			scenario: {
				mode: ZegoUIKitPrebuilt.VideoConference,
			},
		});
	}

	return <div ref={meetingRoom}></div>;
}

export default Room;

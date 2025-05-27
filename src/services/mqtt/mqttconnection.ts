import { useEffect } from "react";
import mqtt from "mqtt";
import { useDispatch } from "react-redux";
import { updateStation } from "@/store/slices/stationSlice";
import { updateWater } from "@/store/slices/waterSlice";

const Mqttconnection = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const client = mqtt.connect("ws://10.41.31.225:8083/mqtt", {
			username: "root",
			password: "Mu123456!",
			reconnectPeriod: 5000,
			connectTimeout: 30000,
		});

		client.on("connect", () => {
			const allTopics = [
				// "MU/WASTEWATER/DDC1",
				// "MU/WASTEWATER/DDC2",
				// "MU/WASTEWATER/DDC3",
				// "MU/WASTEWATER/DDC4",
				// "MU/WASTEWATER/DDC5",
				// "MU/WASTEWATER/DDC6",
				// "MU/WASTEWATER/WQ",
				"MU/WASTEWATER/#",
			];

			client.subscribe(allTopics);
			console.log("connected mqtt");
		});

		client.on("message", (topic, message) => {
			const value = JSON.parse(message.toString());

			console.log("topic", topic);
			console.log("message", value);

			if (topic.includes("MU/WASTEWATER/WQ")) {
				dispatch(updateWater({ topic, value }));
			} else {
				dispatch(updateStation({ topic, value }));
			}
		});

		return () => {
			client.end();
		};
	}, [dispatch]);

	return null;
};
export default Mqttconnection;

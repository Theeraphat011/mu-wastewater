"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import Mqttconnection from "./mqttconnection";

interface LayoutClient {
	children: React.ReactNode
}

export default function ClientLayout({ children }: LayoutClient) {
	return (
		<Provider store={store}>
			<Mqttconnection />
			{children}
		</Provider>
	);
}

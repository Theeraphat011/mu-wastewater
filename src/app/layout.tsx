import "./globals.css";
import ClientLayout from "../services/mqtt/ClientLayout";
import MenuLink from "@/components/menulink/MenuLink";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Metadata } from "next";

const inter = IBM_Plex_Sans_Thai({
	weight: "400",
	subsets: ["thai"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.example.com"),
	title: "MU || WASTEWATER",
	description: "DEMO || TEST",
	icons: {
		icon: "/map.svg",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html>
			<body className={`${inter.className}`}>
				<main className="relative max-h-screen bg-[#001239]">
					<div className="fixed inset-0">
						<ClientLayout>{children}</ClientLayout>
						<div className="absolute top-[79%] left-[2.5%] z-10 bg-transparent">
							<MenuLink />
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}

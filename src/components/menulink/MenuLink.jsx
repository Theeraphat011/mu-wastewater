"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = () => {
	const pathname = usePathname();

	const menuItems = [
		{ name: "ดูระบบบำบัดน้ำเสีย", path: "/" },
		{ name: "ข้อมูลย้อนหลัง", path: "/historys" },
		{ name: "ดูระบบสูบน้ำฝน", path: "/stormwater" },
	];

	return (
		<nav className="w-full max-w-xs h-auto rounded-xl shadow-lg scale-[100%]">
			<div className="flex flex-col w-full gap-3">
				{menuItems.map((item) => {
					const isActive = pathname === item.path;
					return (
						<Link
							key={item.path}
							href={item.path}
							className={`w-full px-8 py-3 text-lg font-semibold text-center rounded-sm transition-all duration-200 shadow-md border-2
							${isActive ? "bg-gradient-to-t from-[#004886] to-[#00C99B] border-[#00E2A1] text-white scale-105" : "bg-gradient-to-t from-[#0089AA] to-[#72FFE4] border-[#00E2A1] text-[#002069] scale-105"}`}
						>
							{item.name}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default MenuLink;

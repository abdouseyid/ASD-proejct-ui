import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center bg-[#f3f3f6]">
			<Sidebar />
			<Navbar />
			<div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;

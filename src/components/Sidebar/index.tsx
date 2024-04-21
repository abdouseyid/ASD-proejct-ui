import {
	AppsOutline,
	HomeOutline,
	LogOutOutline,
	DocumentTextOutline,
	PeopleOutline,
	PersonOutline,
	FlashOutline,
	CalendarOutline,
} from "react-ionicons";
import profileImage from "../../assets/images/logoM.png";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
	const navigate = useNavigate();

	const navLinks = [
		{
			title: "Home",
			icon: (
				<HomeOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			onClick: () => {
				navigate("/home");
				navLinks.forEach((link) => {
					link.active = false;
				});
			},
		},
		{
			title: "Applications",
			icon: (
				<AppsOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
			onClick: () => {
				navigate("/applications");
				navLinks.forEach((link) => {
					link.active = true;
				});
			},
		},
		{
			title: "Notes",
			icon: (
				<CalendarOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
			onClick: () => {
				navigate("/notes");
				navLinks.forEach((link) => {
					link.active = true;
				});
			},
		},
		{
			title: "Resume",
			icon: (
				<DocumentTextOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
			onClick: () => {
				navigate("/resume");
				navLinks.forEach((link) => {
					link.active = true;
				});
			},
		},
		{
			title: "Portfolio",
			icon: (
				<PersonOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
			onClick: () => {
				window.location.href = "https://www.m-lemine.tech/";
				navLinks.forEach((link) => {
					link.active = true;
				});
			},
		},
		{
			title: "Easy Apply",
			icon: (
				<FlashOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
			onClick: () => {
				navigate("/apply");
				navLinks.forEach((link) => {
					link.active = false;
				});
			},
		},
		{
			title: "Companies",
			icon: (
				<PeopleOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
			onClick: () => {
				navigate("/companies");
				navLinks.forEach((link) => {
					link.active = true;
				});
			},
		},
	];

	return (
		<div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
			<div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">
			<img
						src={profileImage}
						alt="Profile"
						className="w-10 h-10 rounded-full"
					/>
					<span className="text-orange-400 font-semibold md:text-lg text-sm whitespace-nowrap">
						Job Search
					</span>
			</div>
			<div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
				{navLinks.map((link) => {
					return (
						<div
							key={link.title}
							className={`flex items-center gap-2 w-full rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer ${
								link.active ? "bg-orange-300" : "bg-transparent"
							}`}
							onClick={link.onClick}
						>
							{link.icon}
							<span className="font-medium text-[15px] md:block hidden">{link.title}</span>
						</div>
					);
				})}
				<div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer bg-gray-200">
					<LogOutOutline />
					<span className="font-medium text-[15px] md:block hidden">Log Out</span>
				</div>
			</div>
		</div>
	);
};


export default Sidebar;

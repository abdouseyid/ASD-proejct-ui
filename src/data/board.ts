
import { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board: Columns = {
	APPLIED: {
		name: "APPLIED",
		items: [
			{
				id: "1",
				title: "Java Full Stack Engineer",
				description: "Full-stack engineer with experience in Java and React",
				priority: "high",
				deadline: 50,
				tags: [
					{ title: "Tech", ...getRandomColors() },
					{ title: "Frontend", ...getRandomColors() },
				],
			},
			{
				id: "2",
				title: "Software Engineer",
				description: "Experienced software engineer with strong knowledge in JavaScript and Node.js",
				priority: "low",
				deadline: 50,
				alt: "task image",
				tags: [
					{ title: "Tech", ...getRandomColors() },
					{ title: "Backend", ...getRandomColors() },
				],
			},
		],
	},
	SCREEN: {
		name: "SCREEN",
		items: [
			{
				id: "3",
				title: "Java Full Stack Engineer",
				description: "Full-stack engineer with experience in Java and React",
				priority: "medium",
				deadline: 50,
				tags: [
					{ title: "Tech", ...getRandomColors() },
					{ title: "Frontend", ...getRandomColors() },
				],
			},
		],
	},
	INTERVIEWING: {
		name: "INTERVIEWING",
		items: [
			{
				id: "3",
				title: "Java Full Stack Engineer",
				description: "Full-stack engineer with experience in Java and React",
				priority: "low",
				deadline: 50,
				tags: [
					{ title: "Tech", ...getRandomColors() },
					{ title: "Frontend", ...getRandomColors() },
				],
			},
			{
				id: "4",
				title: "Software Engineer",
				description: "Experienced software engineer with strong knowledge in JavaScript and Node.js",
				priority: "medium",
				deadline: 50,
				tags: [
					{ title: "Tech", ...getRandomColors() },
					{ title: "Backend", ...getRandomColors() },
				],
			},
		],
	},
	REJECTED: {
		name: "REJECTED",
		items: [
			{
				id: "5",
				title: "Software Engineer",
				description: "Experienced software engineer with strong knowledge in JavaScript and Node.js",
				priority: "high",
				deadline: 50,
				alt: "task image",
				tags: [
					{ title: "Tech", ...getRandomColors() },
					{ title: "Backend", ...getRandomColors() },
				],
			},
		],
	},
};

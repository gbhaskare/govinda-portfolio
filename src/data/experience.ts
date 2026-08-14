import { Experience } from '../types/portfolio';

export const EXPERIENCES: Experience[] = [
	{
		id: 'engineer-philosophy',
		company: 'Engineer Philosophy Web Services Pvt.Ltd',
		role: 'Software Engineer',
		startDate: 'Feb 2024',
		endDate: 'Present',
		location: 'Indore, Madhya Pradesh',
		description:
			'Developed data-driven web applications using Python and Angular; integrated REST APIs and SQL databases; built responsive, reusable UI components.',
		responsibilities: [
			'Developed data-driven web applications using Python, Angular, REST APIs, and SQL databases.',
			'Built and integrated REST APIs with Angular applications for data processing and application workflows.',
			'Worked with SQL databases to store, retrieve, and manage application data.',
			'Developed responsive and reusable UI components using Angular.',
		],
		tech: ['Python', 'Angular', 'REST APIs', 'SQL'],
		website: undefined,
	},

	{
		id: 'zehntech',
		company: 'Zehntech, India',
		role: 'Junior Software Engineer',
		startDate: 'Aug 2023',
		// No explicit dates provided in the resume snippet; keep dates optional
		location: 'Indore, Madhya Pradesh',
		description:
			'Built responsive frontend components and implemented React.js features; integrated chart libraries for interactive data visualizations.',
		responsibilities: [
			'Built responsive UI components using HTML, CSS, and JavaScript.',
			'Contributed to a client project in React.js, implementing features and UI logic.',
			'Explored and integrated chart libraries for dynamic data visualization.',
		],
		tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Chart.js'],
		website: undefined,
	},
];

export default EXPERIENCES;

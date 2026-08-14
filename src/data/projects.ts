import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
	{
		id: 'mapog-route-compass',
		name: 'MAPOG Route Compass',
		shortDescription: 'Data-driven route planning application with map-based visualization.',
		detailedDescription:
			'Developed a data-driven route planning application using Angular, REST APIs and Angular Material for map-based visualization. Implemented route logic, distance and bearing features, API integration, export functionality, and UI customization.',
		tech: ['Angular', 'Angular Material', 'REST APIs'],
		date: 'Aug 2023 – Dec 2023',
		features: ['Route planning', 'Distance & bearing', 'Export functionality'],
	},

	{
		id: 'territory-management',
		name: 'Territory Management',
		shortDescription: 'Account distribution and hierarchical data visualization using Ag Grid.',
		detailedDescription:
			'Built a territory management application using Angular, REST APIs and Ag Grid for hierarchical account distribution and visualization. Implemented data validation, reporting, charts, and account management workflows.',
		tech: ['Angular', 'REST APIs', 'Ag Grid', 'SQL'],
		date: 'May 2024',
		features: ['Hierarchical data', 'Reporting', 'Charts'],
	},

	{
		id: 'customer-targeting',
		name: 'Customer Targeting',
		shortDescription: 'Customer segmentation and prioritization platform with visualization.',
		detailedDescription:
			'Implemented a customer targeting application using Angular, REST APIs and Ag Grid for segmentation and prioritization. Added targeting workflows, data validation, API integration, and Chart.js visualizations to support analysis.',
		tech: ['Angular', 'REST APIs', 'Ag Grid', 'Chart.js'],
		date: 'Dec 2024',
		features: ['Segmentation', 'Targeting workflows', 'Chart visualizations'],
	},

	{
		id: 'way2rentals',
		name: 'Way2Rentals',
		shortDescription: 'Responsive rental platform built with Next.js and REST APIs.',
		detailedDescription:
			'Developed a responsive rental platform using Next.js and React.js, implementing reusable UI components, property listing workflows, and search/filter functionality.',
		tech: ['Next.js', 'React.js', 'REST APIs', 'JavaScript'],
		date: 'Feb 2026 – Jun 2026',
		features: ['Property listings', 'Search & filter', 'Reusable components'],
	},
];

export default PROJECTS;

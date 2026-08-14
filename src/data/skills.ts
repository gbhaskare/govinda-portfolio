import { Skill } from '../types/portfolio';

export const SKILLS: Skill[] = [
	// Programming Languages
	{ id: 'py', name: 'Python', category: 'Languages', level: 'Advanced', color: 'bg-yellow-400' },
	{ id: 'c', name: 'C', category: 'Languages', level: 'Intermediate', color: 'bg-slate-400' },
	{ id: 'cpp', name: 'C++', category: 'Languages', level: 'Intermediate', color: 'bg-slate-500' },
	{ id: 'js', name: 'JavaScript', category: 'Languages', level: 'Advanced', color: 'bg-yellow-300' },
	{ id: 'ts', name: 'TypeScript', category: 'Languages', level: 'Advanced', color: 'bg-sky-400' },
	{ id: 'sql', name: 'SQL', category: 'Languages', level: 'Advanced', color: 'bg-emerald-400' },
	{ id: 'html', name: 'HTML', category: 'Languages', level: 'Advanced', color: 'bg-orange-300' },
	{ id: 'css', name: 'CSS', category: 'Languages', level: 'Advanced', color: 'bg-blue-300' },

	// Frontend
	{ id: 'angular', name: 'Angular', category: 'Frontend', level: 'Advanced', color: 'bg-red-400' },
	{ id: 'react', name: 'React.js', category: 'Frontend', level: 'Advanced', color: 'bg-cyan-400' },
	{ id: 'next', name: 'Next.js', category: 'Frontend', level: 'Advanced', color: 'bg-indigo-400' },

	// Backend / APIs
	{ id: 'rest', name: 'REST APIs', category: 'Backend', level: 'Advanced', color: 'bg-violet-300' },

	// Database
	{ id: 'mysql', name: 'MySQL', category: 'Database', level: 'Advanced', color: 'bg-emerald-500' },

	// Frameworks / Libraries
	{ id: 'am', name: 'Angular Material', category: 'Frameworks', color: 'bg-rose-300' },
	{ id: 'bootstrap', name: 'Bootstrap', category: 'Frameworks', color: 'bg-purple-300' },
	{ id: 'aggrid', name: 'Ag Grid', category: 'Frameworks', color: 'bg-indigo-200' },
	{ id: 'ngrx', name: 'NgRx', category: 'Frameworks', color: 'bg-fuchsia-300' },
	{ id: 'rxjs', name: 'RxJS', category: 'Frameworks', color: 'bg-amber-300' },
	{ id: 'chartjs', name: 'Chart.js', category: 'Frameworks', color: 'bg-sky-300' },

	// Tools
	{ id: 'git', name: 'Git', category: 'Tools', color: 'bg-gray-400' },
	{ id: 'github', name: 'GitHub', category: 'Tools', color: 'bg-gray-700' },
	{ id: 'linux', name: 'Linux', category: 'Tools', color: 'bg-emerald-300' },
	{ id: 'vscode', name: 'VS Code', category: 'Tools', color: 'bg-sky-200' },
	{ id: 'postman', name: 'Postman', category: 'Tools', color: 'bg-orange-200' },
	{ id: 'cursor', name: 'Cursor', category: 'Tools', color: 'bg-rose-200' },
	{ id: 'copilot', name: 'GitHub Copilot', category: 'Tools', color: 'bg-indigo-200' },
];

export default SKILLS;

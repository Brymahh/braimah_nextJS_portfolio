// Statistical Modeling & Machine Learning (Line Graph Icon)
function ModelingIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polyline points="3 17 9 11 13 15 21 7" />
			<circle cx="9" cy="11" r="1.5" />
			<circle cx="13" cy="15" r="1.5" />
			<circle cx="21" cy="7" r="1.5" />
		</svg>
	);
}


// Deep Learning & Generative AI
function NeuralIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="6" cy="12" r="2" />
			<circle cx="12" cy="6" r="2" />
			<circle cx="12" cy="18" r="2" />
			<circle cx="18" cy="12" r="2" />
			<line x1="8" y1="12" x2="10" y2="6" />
			<line x1="8" y1="12" x2="10" y2="18" />
			<line x1="14" y1="6" x2="16" y2="12" />
			<line x1="14" y1="18" x2="16" y2="12" />
		</svg>
	);
}


// Data Analytics & Visualization 
function AnalyticsIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<line x1="4" y1="20" x2="4" y2="10" />
			<line x1="10" y1="20" x2="10" y2="4" />
			<line x1="16" y1="20" x2="16" y2="14" />
			<line x1="22" y1="20" x2="22" y2="8" />
		</svg>
	);
}


// AI Systems & MLOps (Gear Icon)
function MLOpsIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="12" cy="12" r="3" />
			<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.66 0 1.26-.39 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.46.46 1.14.6 1.82.33.61-.25 1-.85 1-1.51V3a2 2 0 1 1 4 0v.09c0 .66.39 1.26 1 1.51.68.27 1.36.13 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.46.46-.6 1.14-.33 1.82.25.61.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.26.39-1.51 1z" />
		</svg>
	);
}

export {
	ModelingIcon,
	NeuralIcon,
	AnalyticsIcon,
	MLOpsIcon,
};









// function ActivityIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			xmlns="http://www.w3.org/2000/svg"
// 			width="24"
// 			height="24"
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			stroke="currentColor"
// 			strokeWidth="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round">
// 			<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
// 		</svg>
// 	);
// }
// function CodepenIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			xmlns="http://www.w3.org/2000/svg"
// 			width="24"
// 			height="24"
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			stroke="currentColor"
// 			strokeWidth="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round">
// 			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
// 			<line x1="12" x2="12" y1="22" y2="15.5" />
// 			<polyline points="22 8.5 12 15.5 2 8.5" />
// 			<polyline points="2 15.5 12 8.5 22 15.5" />
// 			<line x1="12" x2="12" y1="2" y2="8.5" />
// 		</svg>
// 	);
// }

// function WebhookIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			xmlns="http://www.w3.org/2000/svg"
// 			width="24"
// 			height="24"
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			stroke="currentColor"
// 			strokeWidth="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round">
// 			<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
// 			<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
// 			<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
// 		</svg>
// 	);
// }

// function MobileIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			xmlns="http://www.w3.org/2000/svg"
// 			width="24"
// 			height="24"
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			stroke="currentColor"
// 			strokeWidth="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round">
// 			<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
// 			<line x1="12" x2="12" y1="18" y2="18" />
// 		</svg>
// 	);
// }

// export {
//   ActivityIcon,
//   CodepenIcon,
//   WebhookIcon,
//   MobileIcon,
// };
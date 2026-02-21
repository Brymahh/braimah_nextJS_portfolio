// Statistical Modeling & Machine Learning
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
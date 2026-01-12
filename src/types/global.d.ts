declare global {
	interface Window {
		MathJax?: {
			typeset: () => void;
			// Add any other MathJax functions you use here
		};
	}
}

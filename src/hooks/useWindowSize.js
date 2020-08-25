import { useState, useEffect } from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

export function useWindowSize(escala) {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
		size: undefined,
		isMobile: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			//alert(window.orientation);

			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
				size: escala * window.innerWidth * window.innerHeight,
				//isMobile: window.innerWidth < 800 && window.innerHeight > window.innerWidth,
				isMobile:
					window.innerWidth < 800 ||
					//&& window.orientation == 0
					isMobile,
			});
		}

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, [escala, windowSize.isMobile]); // Empty array ensures that effect is only run on mount

	return windowSize;
}

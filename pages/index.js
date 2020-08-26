import Head from 'next/head';
// import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import { View, Text } from 'react-native-web';
import LandingPage from '../src/LandingPage/LandingPage';
import Landing from '../src/landing2/Landing';
import styled from 'styled-components';

// const Container = styled.body`
// 	@media only screen and (orientation: landscape) {
// 		width: 50vw;
// 		height: 100%;
// 		transform: rotate(-90deg);
// 	}
// `;

export default function Home() {
	return (
		<div style={{ width: '100%' }}>
			<Head>
				<title>Hawk Peru</title>

				<link rel="shortcut icon" type="image/x-icon" href="http://hawkperu.com/favicon.png" />
				<link rel="stylesheet" href="https://use.typekit.net/kxd1ure.css"></link>
			</Head>
			<LandingPage />
			{/* <Landing /> */}
		</div>
	);
}

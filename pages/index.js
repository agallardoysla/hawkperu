import Head from 'next/head';

import { View, Text } from 'react-native-web';
import LandingPage from '../src/LandingPage/LandingPage';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Hawk Peru</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/kxd1ure.css"></link>
			</Head>
			<LandingPage />
		</div>
	);
}

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import YouTube from 'react-youtube';

function Videos({ videos }) {
	let { height, width, isMobile } = useWindowSize(1);

	const [video, setvideo] = useState('2g811Eo7K8U');

	const opts = {
		height: '390',
		width: isMobile ? width * 0.95 : width * 0.8,
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<View
			ref={videos}
			style={{
				height: isMobile ? 500 : height * 0.7,
				width: width,
				justifyContent: 'center',
				marginVertical: isMobile ? 10 : 0,
				//backgroundColor: 'red',
			}}
		>
			<View
				style={{
					width: width,
					alignItems: 'center',
					justifyContent: 'flex-start',
					height: '90%',
				}}
			>
				<YouTube videoId={video} opts={opts} onReady={_onReady} />
				{/* <Image style={{ height: '75%', width: width * 0.8, backgroundColor: 'gray' }} /> */}
				<Text style={{ marginVertical: 5 }}>Cómo funciona nuestro sistema remoto</Text>
				<View
					style={{ width: isMobile ? '70%' : '40%', justifyContent: 'space-between', flexDirection: 'row' }}
				>
					<Miniatura isMobile={isMobile} setvideo={setvideo} />
					<Miniatura isMobile={isMobile} setvideo={setvideo} />
					<Miniatura isMobile={isMobile} setvideo={setvideo} />
					<Miniatura isMobile={isMobile} setvideo={setvideo} />
					<Miniatura isMobile={isMobile} setvideo={setvideo} />
				</View>
			</View>
		</View>
	);
}

const Miniatura = ({ isMobile, setvideo }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				setvideo('BeMJoRppPDw');
			}}
			style={{ width: isMobile ? 50 : 65, height: isMobile ? 10 : 40 }}
		>
			<Image style={{ width: '100%', height: isMobile ? 30 : 40, backgroundColor: 'gray' }} />
		</TouchableOpacity>
	);
};

const _onReady = (event) => {
	// access to player in all event handlers via event.target
	//event.target.pauseVideo();
};

export default Videos;

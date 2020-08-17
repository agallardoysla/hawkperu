import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import YouTube from 'react-youtube';

function Videos({ videos }) {
	let { height, width } = useWindowSize(1);

	const [video, setvideo] = useState('2g811Eo7K8U');

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<View
			ref={videos}
			style={{
				height: height * 0.7,
				width: width,
				justifyContent: 'center',
				//marginVertical: height / 10,
			}}
		>
			<View
				style={{
					width: width,
					alignItems: 'center',
					justifyContent: 'center',
					height: '90%',
				}}
			>
				<YouTube videoId={video} opts={opts} onReady={_onReady} />
				{/* <Image style={{ height: '75%', width: width * 0.8, backgroundColor: 'gray' }} /> */}
				<Text style={{ marginVertical: 5 }}>Cómo funciona nuestro sistema remoto</Text>
				<View style={{ width: '20%', justifyContent: 'space-between', flexDirection: 'row' }}>
					<TouchableOpacity
						onPress={() => {
							setvideo('HNrgK8h2xBc');
						}}
						style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }}
					>
						<Image style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setvideo('BeMJoRppPDw');
						}}
						style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }}
					>
						<Image style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }} />
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							setvideo('BeMJoRppPDw');
						}}
						style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }}
					>
						<Image style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setvideo('BeMJoRppPDw');
						}}
						style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }}
					>
						<Image style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setvideo('BeMJoRppPDw');
						}}
						style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }}
					>
						<Image style={{ width: '15%', height: height / 30, backgroundColor: 'gray' }} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const _onReady = (event) => {
	// access to player in all event handlers via event.target
	//event.target.pauseVideo();
};

export default Videos;

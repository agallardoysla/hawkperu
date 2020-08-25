import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';

function Cobertura({ cobertura }) {
	let { height, width, isMobile } = useWindowSize(1);

	return (
		<View
			ref={cobertura}
			style={{
				height: isMobile ? 'auto' : (width * 1544) / 2315,
				width: width,
				justifyContent: 'flex-start',
				alignItems: 'center',
				//backgroundColor: 'red',
			}}
		>
			<Image
				source={{
					uri: isMobile
						? 'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/coberturamobil.png?alt=media&token=940edf0a-7501-4e6a-9438-38eb05153718'
						: 'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/cobertura.png?alt=media&token=eabf798f-3c79-4913-aab7-cd51ef8f8ff5',
				}}
				style={{
					resizeMode: 'cover',
					height: isMobile ? 900 : (width * 1544) / 2315 + 50,
					width: width,
					//overflow: 'hidden',
				}}
			/>
		</View>
	);
}

export default Cobertura;

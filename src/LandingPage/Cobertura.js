import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';

function Cobertura({ cobertura }) {
	let { height, width } = useWindowSize(1);

	return (
		<View
			ref={cobertura}
			style={{
				height: (width * 1544) / 2315,
				width: width,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/cobertura.png?alt=media&token=eabf798f-3c79-4913-aab7-cd51ef8f8ff5',
				}}
				style={{
					resizeMode: 'cover',
					height: (width * 1544) / 2315 + 50,
					width: width,
					overflow: 'hidden',
				}}
			/>
		</View>
	);
}

export default Cobertura;

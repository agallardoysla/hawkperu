import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';

function Videos({ videos }) {
	let { height, width } = useWindowSize(1);

	return (
		<View
			ref={videos}
			style={{
				height: (width * 3) / 7,
				width: width,
				justifyContent: 'center',
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
				<Image style={{ height: '75%', width: width * 0.8, backgroundColor: 'gray' }} />
				<Text style={{ marginVertical: 20 }}>Cómo funciona nuestro sistema remoto</Text>
				<View style={{ width: '60%', justifyContent: 'space-between', flexDirection: 'row' }}>
					<Image style={{ width: 80, height: 50, backgroundColor: 'gray' }} />
					<Image style={{ width: 80, height: 50, backgroundColor: 'gray' }} />
					<Image style={{ width: 80, height: 50, backgroundColor: 'gray' }} />
					<Image style={{ width: 80, height: 50, backgroundColor: 'gray' }} />
					<Image style={{ width: 80, height: 50, backgroundColor: 'gray' }} />
				</View>
			</View>
		</View>
	);
}

export default Videos;

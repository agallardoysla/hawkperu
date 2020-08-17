import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import { fonts } from '../constantes/Temas';

function Inicio({ inicio, contacto }) {
	let { height, width } = useWindowSize(1);

	return (
		<View
			ref={inicio}
			style={{
				height: (width * 3) / 7,
				marginTop: 40,
				width: '100%',
				backgroundColor: '#f5aa00',
			}}
		>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/autoinicio5.png?alt=media&token=2d63a5c5-98ed-42e4-9b99-29f3f239a08c',
				}}
				style={{
					resizeMode: 'contain',
					width: '60%',
					height: '60%',
					position: 'absolute',
					bottom: 0,
					//left: 0,
					alignSelf: 'center',
					marginLeft: 150,
				}}
			/>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/Recurso%2016.png?alt=media&token=ed03f10c-f55a-40bb-9b39-ee38d49d48c0',
				}}
				style={{
					resizeMode: 'contain',
					width: '30%',
					height: '30%',
					position: 'absolute',
					top: 0,
					right: 0,
					alignSelf: 'center',
				}}
			/>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/sombrainicio_1.png?alt=media&token=d8ca427a-ae8a-4a81-91a1-8d7a6bc90a34',
				}}
				style={{
					resizeMode: 'contain',
					height: 150,
					width: 225,
					position: 'absolute',
				}}
			/>

			<View
				style={{
					paddingLeft: 100,
					height: '100%',
					justifyContent: 'center',
					width: '60%',
					position: 'absolute',
				}}
			>
				<Text
					style={{
						color: 'white',
						marginBottom: 20,
						fontWeight: 'bold',
						fontSize: 35,
						fontFamily: fonts.acumin,
					}}
				>
					Controlar tu vehículo nunca fue tan fácil.
				</Text>
				<TouchableOpacity
					onPress={() => {
						if (contacto.current) {
							window.scrollTo({
								behavior: 'smooth',
								top: contacto.current.offsetTop - 50,
							});
						}
					}}
					style={{ backgroundColor: '#E0040B', padding: 10, width: 150, alignItems: 'center' }}
				>
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Contáctanos</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Inicio;

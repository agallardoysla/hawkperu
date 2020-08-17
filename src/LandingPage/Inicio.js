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
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/Recurso%202.png?alt=media&token=0d404702-8cc3-46bc-9b51-eaf639392aea',
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
					height: 300,
					width: 450,
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
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={{
							color: 'white',
							marginBottom: 0,
							fontWeight: 'bold',
							fontSize: 35,
							fontFamily: fonts.acumin,
						}}
					>
						{'Controlar '}
					</Text>
					<Text
						style={{
							color: 'white',
							marginBottom: 0,
							fontSize: 35,
							fontFamily: fonts.acumin,
						}}
					>
						tu vehículo
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={{
							color: 'white',
							marginBottom: 20,
							fontSize: 35,
							fontFamily: fonts.acumin,
						}}
					>
						{'nunca fue tan '}
					</Text>
					<Text
						style={{
							color: 'white',
							marginBottom: 20,
							fontWeight: 'bold',
							fontSize: 35,
							fontFamily: fonts.acumin,
						}}
					>
						fácil.
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						if (contacto.current) {
							window.scrollTo({
								behavior: 'smooth',
								top: contacto.current.offsetTop - 50,
							});
						}
					}}
					style={{
						backgroundColor: '#E0040B',
						padding: 10,
						width: 150,
						alignItems: 'center',
						borderRadius: 5,
					}}
				>
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Contáctanos</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Inicio;

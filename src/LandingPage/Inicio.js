import React from 'react';
// import { BrowserView, MobileView, isMobile } from 'react-device-detect';

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import { fonts } from '../constantes/Temas';

function Inicio({ inicio, contacto }) {
	let { height, width, isMobile } = useWindowSize(1);

	return (
		<View
			ref={inicio}
			style={{
				width: width,
				height: isMobile ? 470 : 600,
				backgroundColor: '#f5aa00',
				marginTop: 60,
			}}
		>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/autoinicio5.png?alt=media&token=2d63a5c5-98ed-42e4-9b99-29f3f239a08c',
				}}
				style={{
					resizeMode: 'contain',
					width: isMobile ? '75%' : '60%',
					height: isMobile ? '75%' : '60%',
					position: 'absolute',
					bottom: isMobile ? -80 : 0,
					left: isMobile ? 20 : '25%',
					alignSelf: 'center',
				}}
			/>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/satelite.png?alt=media&token=0290316a-4fd6-4897-adb5-0f7951d89f04',
				}}
				style={{
					//satelite
					resizeMode: 'contain',
					width: isMobile ? 120 : 300,
					height: isMobile ? 120 : 300,
					position: 'absolute',
					top: isMobile ? 160 : 0,
					right: 80,
					alignSelf: 'center',
					marginRight: isMobile ? '-10%' : 0,
				}}
			/>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/sombrainicio_1.png?alt=media&token=d8ca427a-ae8a-4a81-91a1-8d7a6bc90a34',
				}}
				style={{
					resizeMode: 'contain',
					height: isMobile ? 250 : 350,
					width: isMobile ? 300 : 450,
					position: 'absolute',
				}}
			/>
			<View
				style={{
					paddingLeft: 50,
					paddingTop: isMobile ? 70 : 200,
					height: '100%',
					justifyContent: 'flex-start',
					width: '90%',
					position: 'absolute',
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={{
							color: 'white',
							marginBottom: 0,
							fontWeight: 'bold',
							fontSize: isMobile ? '7vw' : '3vw',
							fontFamily: fonts.acumin,
						}}
					>
						{'Controlar '}
					</Text>
					<Text
						style={{
							color: 'white',
							marginBottom: 0,
							fontSize: isMobile ? '7vw' : '3vw',
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
							fontSize: isMobile ? '7vw' : '3vw',
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
							fontSize: isMobile ? '7vw' : '3vw',
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
						padding: isMobile ? 10 : 10,
						maxWidth: isMobile ? 150 : 150,
						alignItems: 'center',
						borderRadius: isMobile ? 3 : 5,
					}}
				>
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: isMobile ? '3vw' : '1.5vw' }}>
						Contáctanos
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Inicio;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import { fonts } from '../constantes/Temas';

function Plataforma({ plataforma }) {
	let { height, width, isMobile } = useWindowSize(1);

	return (
		<View
			ref={plataforma}
			style={{
				height: isMobile ? 600 : 700,
				width: width,
				justifyContent: 'center',
			}}
		>
			<View
				style={{
					width: width,
					flexDirection: isMobile ? 'column-reverse' : 'row',
					alignItems: 'center',
					justifyContent: 'center',
					height: isMobile ? '90%' : '90%',
					paddingTop: isMobile ? 50 : 0,
				}}
			>
				<Image
					source={{
						uri:
							'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/plataforma.png?alt=media&token=3fdd20e8-4693-40f9-be18-c5e1d73983d4',
					}}
					style={{
						height: isMobile ? 300 : '100%',
						width: isMobile ? '100%' : '35%',
						resizeMode: 'contain',
						marginRight: isMobile ? 0 : -100,
						marginBottom: isMobile ? 10 : 0,
					}}
				/>
				<View
					style={{
						padding: isMobile ? 0 : 10,
						width: isMobile ? width : width * 0.55,
						height: '60%',
						alignItems: 'center',
						justifyContent: 'center',
						marginLeft: 0,
						backgroudColor: 'red',
					}}
				>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontWeight: 'bold',
							fontSize: isMobile ? '5vw' : 20,
						}}
					>
						BENEFICIOS
					</Text>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontWeight: 'bold',
							fontSize: isMobile ? '5vw' : 20,
							marginBottom: isMobile ? 10 : 25,
						}}
					>
						DE NUESTRA PLATAFORMA
					</Text>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontSize: isMobile ? '5vw' : 20,
							textAlign: 'center',
						}}
					>
						Contamos con una plataforma completa,
					</Text>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontSize: isMobile ? '5vw' : 20,
							textAlign: 'center',
						}}
					>
						la cual se encarga del rastreo
					</Text>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontSize: isMobile ? '5vw' : 20,
							textAlign: 'center',
						}}
					>
						y ubicació de vehículos robados,
					</Text>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontSize: isMobile ? '5vw' : 20,
							textAlign: 'center',
						}}
					>
						además del monitoreo completo de flotas
					</Text>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontSize: isMobile ? '5vw' : 20,
							textAlign: 'center',
						}}
					>
						para una mayor eficacia del personal.
					</Text>
				</View>
			</View>
		</View>
	);
}

export default Plataforma;

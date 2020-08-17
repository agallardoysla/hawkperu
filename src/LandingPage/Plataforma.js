import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import { fonts } from '../constantes/Temas';

function Plataforma({ plataforma }) {
	let { height, width } = useWindowSize(1);

	return (
		<View
			ref={plataforma}
			style={{
				height: (width * 3) / 7,
				width: width,
				justifyContent: 'center',
			}}
		>
			<View
				style={{
					width: width,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					height: '90%',
				}}
			>
				<Image
					source={{
						uri:
							'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/plataforma.png?alt=media&token=3fdd20e8-4693-40f9-be18-c5e1d73983d4',
					}}
					style={{ height: '100%', width: '35%', resizeMode: 'contain' }}
				/>
				<View
					style={{
						padding: 10,
						width: width * 0.55,
						height: '60%',
						alignItems: 'center',
						justifyContent: 'center',
						marginLeft: 30,
					}}
				>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontWeight: 'bold',
							fontSize: 20,
							marginBottom: 25,
						}}
					>
						BENEFICIOS DE NUESTRA PLATAFORMA
					</Text>
					<Text
						style={{
							fontFamily: fonts.acumin,
							fontSize: 20,
							textAlign: 'center',
						}}
					>
						Contamos con una plataforma completa, la cual se encarga del rastreo y ubicació de vehículos
						robados, además del monitoreo completo de flotas para una mayor eficacia del personal.
					</Text>
				</View>
			</View>
		</View>
	);
}

export default Plataforma;

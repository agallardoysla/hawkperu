import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import { fonts } from '../constantes/Temas';

function Contacto({ contacto, setshowForm }) {
	let { height, width } = useWindowSize(1);

	return (
		<View
			ref={contacto}
			style={{
				height: (width * 3) / 7,
				width: width,
				justifyContent: 'center',
				backgroundColor: '#D8DADE',
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
				<Image style={{ height: '90%', width: width * 0.4, backgroundColor: 'black' }} />
				<View
					style={{
						padding: 10,
						width: width * 0.5,
						height: '60%',
						justifyContent: 'center',
						marginLeft: 30,
					}}
				>
					<Text style={{ fontWeight: 'bold', marginBottom: 20 }}>CONTÁCTANOS</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ fonFamily: fonts.acumin, fontWeight: 'bold' }}>Celular:</Text>
						<Text style={{ fonFamily: fonts.acumin }}> +51961995146</Text>
					</View>
					<View style={{ marginBottom: 20 }}>
						<Text style={{ fonFamily: fonts.acumin, fontWeight: 'bold' }}>Correo electrónico:</Text>
						<Text style={{ fonFamily: fonts.acumin }}>hawkseguridad1@gmail.com</Text>
					</View>
					<Text style={{ fonFamily: fonts.acumin }}>Si tiene dudas o sugerencias.</Text>
					<TouchableOpacity
						style={{
							padding: 5,
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: '#009938',
							borderRadius: 5,
							maxWidth: 400,
							marginTop: 10,
						}}
					>
						<Image
							source={{
								uri:
									'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/whats.png?alt=media&token=020313df-a032-406a-8a7b-962aadf34258',
							}}
							style={{ width: 25, height: 25, marginRight: 10, resizeMode: 'contain' }}
						/>
						<Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', fontFamily: fonts.acumin }}>
							Escríbenos al Whatsapp
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							padding: 5,
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: '#E0040B',
							borderRadius: 5,
							maxWidth: 450,
							marginTop: 10,
						}}
						onPress={() => {
							setshowForm(true);
						}}
					>
						<Image
							source={{
								uri:
									'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/gmail.png?alt=media&token=88238aba-d7af-4d43-b411-7bea97038bb6',
							}}
							style={{ width: 25, height: 25, marginRight: 10, resizeMode: 'contain' }}
						/>
						<Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', fontFamily: fonts.acumin }}>
							Enviar un correo electrónico
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Contacto;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';

function Comentarios({ comentarios }) {
	let { height, width } = useWindowSize(1);

	return (
		<View
			ref={comentarios}
			style={{
				width: width,
				justifyContent: 'center',
				marginBottom: 100,
			}}
		>
			<View
				style={{
					width: width,
					height: '100%',
				}}
			>
				<Text style={{ marginTop: 35, marginLeft: width * 0.15, fontWeight: 'bold' }}>COMENTARIOS</Text>
				<View style={{ flexDirection: 'row', width: width, paddingHorizontal: '10%', marginTop: 20 }}>
					<Image
						style={{
							width: 50,
							height: 50,
							marginRight: 20,
							backgroundColor: 'gray',
							borderRadius: 25,
						}}
					/>
					<View style={{ flex: 1, marginRight: '5%' }}>
						<Text>Cecilia Rojas Morales</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text>Estrellas</Text>
							<Text>Fecha</Text>
						</View>
						<Text style={{}}>
							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
							Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
							impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
							textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
							sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
							electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
							creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
							recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye
							versiones de Lorem Ipsum.
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Comentarios;

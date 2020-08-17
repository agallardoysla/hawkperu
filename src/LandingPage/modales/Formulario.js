import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback } from 'react-native-web';
import { useWindowSize } from '../../hooks/useWindowSize';

import { fonts } from '../../constantes/Temas';

function Formulario({ setshowForm }) {
	let { height, width } = useWindowSize(1);

	return (
		<TouchableOpacity
			style={{
				position: 'fixed',
				zIndex: 500,
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: height,
				backgroundColor: 'rgba(52,52,52,0.4)',
				paddingHorizontal: '10%',
			}}
			onPress={() => {
				setshowForm(false);
			}}
		>
			<View
				style={{
					width: '100%',
					height: '50%',
					backgroundColor: '#9C9BA0',
					borderRadius: 10,
					flexDirection: 'row',
					paddingTop: 35,
				}}
			>
				<View
					style={{
						flex: 1,
						height: '100%',
						paddingLeft: 20,
					}}
				>
					<Text style={{ fontFamily: fonts.acumin, fontSize: 15 }}>
						Llene todos sus datos en los campos vacíos.
					</Text>
					<View style={{ flexDirection: 'row', marginBottom: 20 }}>
						<Text style={{ fontFamily: fonts.acumin, fontSize: 15, color: 'red' }}>(*) </Text>
						<Text style={{ fontFamily: fonts.acumin, fontSize: 15 }}>Campos obligatorios</Text>
					</View>
					<View>
						<Input placeholder={'Nombres y Apellidos'} obligatorio={true} />
						<View style={{ flexDirection: 'row' }}>
							<Input obligatorio={true} placeholder={'DNI/Pasaporte'} />
							<Input obligatorio={true} placeholder={'Celular'} />
						</View>
						<Input obligatorio={true} placeholder={'Tipo de vehículo/Cantidad'} />
						<View style={{ flexDirection: 'row' }}>
							<Input obligatorio={true} placeholder={'Correo electrónico'} />
							<TouchableOpacity
								style={{
									backgroundColor: 'red',
									height: 40,
									width: 80,
									marginRight: 10,
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: 3,
								}}
							>
								<Text style={{ fontFamily: fonts.acumin, color: 'white', fontWeight: 'bold' }}>
									Enviar
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
						height: '100%',
						//padding: 10,
						paddingLeft: 20,
						paddingRight: 20,
						paddingBottom: 30,
					}}
				>
					<Text style={{ marginBottom: 10, fontFamily: fonts.acumin }}>Envíenos su pregunta.</Text>
					<TextInput
						multiline={true}
						style={{
							textAlign: 'start',
							justifyContent: 'flex-start',
							height: '80%',
							width: '100%',
							backgroundColor: 'white',
							marginRight: 10,
							padding: 10,
							borderRadius: 5,
							fontFamily: fonts.acumin,
							fontStyle: 'italic',
						}}
						placeholder={'Escriba aquí'}
					/>
					<Text style={{ alignSelf: 'flex-end', fontFamily: fonts.acumin }}>300 caracteres</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const Input = ({ placeholder, obligatorio }) => {
	return (
		<View
			style={{
				marginBottom: 20,
				flex: 1,
				alignItems: 'center',
				backgroundColor: 'white',
				height: 40,
				flexDirection: 'row',
				marginRight: 10,
				borderRadius: 3,
				paddingRight: 1,
			}}
		>
			{obligatorio && (
				<Text
					style={{
						fontFamily: fonts.acumin,
						fontStyle: 'italic',
						width: 20,
						marginHorizontal: 10,
						color: 'red',
						fontWeight: 'bold',
					}}
				>
					(*)
				</Text>
			)}
			<TextInput
				style={{
					fontStyle: 'italic',
					height: '100%',
					flex: 1,
					minWidth: 0,
				}}
				placeholder={placeholder}
			/>
		</View>
	);
};

export default Formulario;

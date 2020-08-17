import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import Link from 'next/link';
import { fonts } from '../constantes/Temas';
import Inicio from './Inicio';
import Plataforma from './Plataforma';
import Cobertura from './Cobertura';
import Videos from './Videos';
import Contacto from './Contacto';
import Comentarios from './Comentarios';
import Formulario from './modales/Formulario';

function LandingPage() {
	let { height, width } = useWindowSize(1);

	const [showForm, setshowForm] = useState(false);

	let inicio = useRef();
	let plataforma = useRef();
	let comentarios = useRef();
	let cobertura = useRef();
	let videos = useRef();
	let contacto = useRef();

	return (
		<>
			<View style={{ width: width }}>
				<View style={styles.cabecera}>
					<Image
						source={{
							uri:
								'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/logo.png?alt=media&token=e4e4b903-bd6e-4fdc-8a5f-4f3da51eaf91',
						}}
						style={{ width: '25%', height: '100%', resizeMode: 'contain' }}
					/>
					<View style={styles.menu}>
						<MenuElement titulo={'Inicio'} href={inicio} />
						<MenuElement titulo={'Plataforma'} href={plataforma} />
						<MenuElement titulo={'Cobertura'} href={cobertura} />
						<MenuElement titulo={'Videos'} href={videos} />
						<MenuElement titulo={'Contacto'} href={contacto} />
					</View>
				</View>
				<Inicio inicio={inicio} contacto={contacto} />
				<Plataforma plataforma={plataforma} />
				<Cobertura cobertura={cobertura} />
				<Videos videos={videos} />
				<Contacto contacto={contacto} setshowForm={setshowForm} />
				<Comentarios comentarios={comentarios} />
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
						height: 80,
						backgroundColor: 'black',
						alignItems: 'center',
						paddingHorizontal: '5%',
						justifyContent: 'space-between',
					}}
				>
					<Image style={{ backgroundColor: 'gray', width: 150, height: '90%' }} />
					<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image style={{ width: 25, height: 25, backgroundColor: 'white', marginRight: 5 }} />
						<Text style={{ color: 'white' }}>+51 961 995 146</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image style={{ width: 25, height: 25, backgroundColor: 'white', marginRight: 5 }} />
						<Text style={{ color: 'white' }}>hawkperu1@gmail.com</Text>
					</TouchableOpacity>
					<View style={{ flexDirection: 'row' }}>
						<Image style={{ width: 35, height: 35, backgroundColor: 'white' }} />
						<Image style={{ width: 35, height: 35, backgroundColor: 'white', marginLeft: 5 }} />
					</View>
				</View>
			</View>
			{
				//showForm &&
				<Formulario setshowForm={setshowForm} />
			}
		</>
	);
}

const MenuElement = ({ titulo, href }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				if (href.current) {
					window.scrollTo({
						behavior: 'smooth',
						top: href.current.offsetTop - 50,
					});
				}
			}}
		>
			<Text style={{ color: 'white', fontFamily: fonts.acumin }}>{titulo}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cabecera: {
		width: '100%',
		backgroundColor: 'black',
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: '2%',
		zIndex: 400,
		position: 'fixed',
	},
	menu: {
		paddingHorizontal: '10%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default LandingPage;

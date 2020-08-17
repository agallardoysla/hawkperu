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
	const [menu, setmenu] = useState('Inicio');

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
						style={{ width: '25%', height: '70%', resizeMode: 'contain' }}
					/>
					<View style={styles.menu}>
						<MenuElement menu={menu} setmenu={setmenu} titulo={'Inicio'} href={inicio} />
						<MenuElement menu={menu} setmenu={setmenu} titulo={'Plataforma'} href={plataforma} />
						<MenuElement menu={menu} setmenu={setmenu} titulo={'Cobertura'} href={cobertura} />
						<MenuElement menu={menu} setmenu={setmenu} titulo={'Videos'} href={videos} />
						<MenuElement menu={menu} setmenu={setmenu} titulo={'Contacto'} href={contacto} />
					</View>
				</View>
				<Inicio inicio={inicio} contacto={contacto} />
				<Plataforma plataforma={plataforma} />
				<Cobertura cobertura={cobertura} />
				<Videos videos={videos} />
				<Contacto contacto={contacto} setshowForm={setshowForm} />
				{/* <Comentarios comentarios={comentarios} /> */}
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
					<Image
						source={{
							uri:
								'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/logo.png?alt=media&token=e4e4b903-bd6e-4fdc-8a5f-4f3da51eaf91',
						}}
						style={{ width: '25%', height: '70%', resizeMode: 'contain' }}
					/>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{
								uri:
									'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/celular.png?alt=media&token=9072d654-60e4-41f1-93ad-3dfbbc1994c8',
							}}
							style={{ width: 25, height: 25, marginRight: 5 }}
						/>
						<Text style={{ color: 'white' }}>+51 961 995 146</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{
								uri:
									'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/email.png?alt=media&token=ada6e230-0668-4693-8363-c29778a87a70',
							}}
							style={{ width: 25, height: 25, marginRight: 5 }}
						/>
						<Text style={{ color: 'white' }}>hawkperu1@gmail.com</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity>
							<Image
								source={{
									uri:
										'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/facebook.png?alt=media&token=c01a96cf-e87a-4fbc-a2c5-575488330dc9',
								}}
								style={{ width: 35, height: 35 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image
								source={{
									uri:
										'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/instagram.png?alt=media&token=3c6cc922-2da3-45d6-971f-2238e00875f7',
								}}
								style={{ width: 35, height: 35, marginLeft: 5 }}
							/>
						</TouchableOpacity>
					</View>
				</View>
				{showForm && <Formulario setshowForm={setshowForm} />}
			</View>
		</>
	);
}

const MenuElement = ({ titulo, href, menu, setmenu }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				if (href.current) {
					window.scrollTo({
						behavior: 'smooth',
						top: href.current.offsetTop - 50,
					});
					setmenu(titulo);
				}
			}}
		>
			<Text style={{ color: 'white', fontFamily: fonts.acumin, marginVertical: 5, fontSize: 20 }}>{titulo}</Text>
			{menu == titulo && <View style={{ height: 4, width: '100%', backgroundColor: '#f5aa00' }} />}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cabecera: {
		width: '100%',
		backgroundColor: 'black',
		height: 60,
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

import React, { useRef, useState, useEffect } from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import Animate, {
	Wobble,
	FadeInRight,
	BounceInRight,
	BaseAnimation,
	Flash,
	Bounce,
	FadeOut,
	FadeIn,
} from 'animate-css-styled-components';

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native-web';
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
import Cabecera from './Cabecera';
import Footer from './Footer';

function LandingPage() {
	let { height, width, isMobile } = useWindowSize(1);

	const [showForm, setshowForm] = useState(false);
	const [showMenu, setshowMenu] = useState(false);
	const [menu, setmenu] = useState('Inicio');

	let inicio = useRef();
	let plataforma = useRef();
	let comentarios = useRef();
	let cobertura = useRef();
	let videos = useRef();
	let contacto = useRef();
	let scroll = useRef();

	useEffect(() => {
		//alert(isMobile);
	}, [isMobile]);

	return (
		<View style={{ width: '100%', flex: 1 }}>
			<Cabecera
				inicio={inicio}
				plataforma={plataforma}
				cobertura={cobertura}
				videos={videos}
				contacto={contacto}
				scroll={scroll}
				menu={menu}
				setmenu={setmenu}
				setshowMenu={setshowMenu}
			/>
			<ScrollView ref={scroll} style={{ width: '100%' }}>
				<Inicio inicio={inicio} contacto={contacto} />
				<Plataforma plataforma={plataforma} />
				<Cobertura cobertura={cobertura} />
				<Videos videos={videos} />
				<Contacto contacto={contacto} setshowForm={setshowForm} />
				{/* <Comentarios comentarios={comentarios} /> */}
				<Footer />
				{<Formulario showForm={showForm} setshowForm={setshowForm} />}
			</ScrollView>

			{isMobile && showMenu && (
				<Animate
					Animation={[BounceInRight]}
					duration={['1s']}
					delay={['0s']}
					style={{
						zIndex: 500,
						position: 'fixed',
						right: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(52,52,52,0.5)',
						alignItems: 'flex-end',
					}}
				>
					<TouchableOpacity
						onPress={() => {
							setshowMenu(false);
						}}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							backgroundColor: 'rgba(56,56,56,0)',
							paddingTop: 30,
						}}
					></TouchableOpacity>
					<View
						style={{
							position: 'absolute',
							right: 0,
							width: '90%',
							height: '100%',
							backgroundColor: 'rgba(56,56,56,1)',
							paddingTop: 30,
						}}
					>
						<Text
							style={{
								color: 'white',
								alignSelf: 'center',
								fontSize: '5vw',
								fontWeight: 'bold',
								marginBottom: 50,
							}}
						>
							Menu Principal
						</Text>

						<MenuLateralItem
							href={inicio}
							titulo={'Inicio'}
							setmenu={setmenu}
							menu={menu}
							setshowMenu={setshowMenu}
						/>
						<MenuLateralItem
							href={plataforma}
							titulo={'Plataforma'}
							setmenu={setmenu}
							menu={menu}
							setshowMenu={setshowMenu}
						/>
						<MenuLateralItem
							href={cobertura}
							titulo={'Cobertura'}
							setmenu={setmenu}
							menu={menu}
							setshowMenu={setshowMenu}
						/>
						<MenuLateralItem
							href={videos}
							titulo={'Videos'}
							setmenu={setmenu}
							menu={menu}
							setshowMenu={setshowMenu}
						/>
						<MenuLateralItem
							href={contacto}
							titulo={'Contacto'}
							setmenu={setmenu}
							menu={menu}
							setshowMenu={setshowMenu}
						/>
						<TouchableOpacity
							style={{
								alignSelf: 'center',
								width: 40,
								height: 40,
								borderRadius: 20,
								borderWidth: 1,
								borderColor: 'white',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onPress={() => {
								setshowMenu(false);
							}}
						>
							<Text style={{ color: 'white', fontSize: '5vw', fontWeight: 'bold' }}>X</Text>
						</TouchableOpacity>
						<Image
							style={{
								width: '100%',
								height: 80,
								resizeMode: 'contain',
								alignSelf: 'center',
								position: 'absolute',
								bottom: 70,
							}}
							source={{
								uri:
									'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/logo.png?alt=media&token=e4e4b903-bd6e-4fdc-8a5f-4f3da51eaf91',
							}}
						/>
					</View>
				</Animate>
			)}
		</View>
	);
}

const MenuLateralItem = ({ titulo, href, setmenu, setshowMenu }) => {
	return (
		<TouchableOpacity
			style={{
				width: '100%',
				height: 50,
				paddingLeft: 50,
				borderBottomWidth: 1,
				justifyContent: 'center',
				marginBottom: 10,
			}}
			onPress={() => {
				if (href.current) {
					window.scrollTo({
						behavior: 'smooth',
						top: href.current.offsetTop - 50,
					});
					setmenu(titulo);
					setshowMenu(false);
				}
			}}
		>
			<Text style={{ color: 'white', fontSize: '5vw', fontWeight: 'bold' }}>{titulo}</Text>
		</TouchableOpacity>
	);
};

export default LandingPage;

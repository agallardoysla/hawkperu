import React, { useRef, useState, useEffect } from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

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

	let inicio = useRef();
	let plataforma = useRef();
	let comentarios = useRef();
	let cobertura = useRef();
	let videos = useRef();
	let contacto = useRef();
	let scroll = useRef();

	useEffect(() => {
		alert(isMobile);
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
			/>
			<ScrollView ref={scroll} style={{ width: '100%' }}>
				{/* <> */}

				<Inicio inicio={inicio} contacto={contacto} />
				<Plataforma plataforma={plataforma} />
				<Cobertura cobertura={cobertura} />
				<Videos videos={videos} />
				<Contacto contacto={contacto} setshowForm={setshowForm} />
				{/* <Comentarios comentarios={comentarios} /> */}
				<Footer />
				{<Formulario showForm={showForm} setshowForm={setshowForm} />}
				{/* </> */}
			</ScrollView>
		</View>
	);
}

export default LandingPage;

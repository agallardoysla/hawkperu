// import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import React, { useRef, useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';
import { fonts } from '../constantes/Temas';

function Cabecera({ inicio, plataforma, cobertura, videos, contacto, scroll }) {
	let { height, width, isMobile } = useWindowSize(1);
	const [menu, setmenu] = useState('Inicio');

	return (
		<>
			{!isMobile && (
				<View style={[styles.cabecera, { width: width }]}>
					<Image
						source={{
							uri:
								'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/logo.png?alt=media&token=e4e4b903-bd6e-4fdc-8a5f-4f3da51eaf91',
						}}
						style={{ width: '25%', height: '70%', resizeMode: 'contain' }}
					/>
					<View style={styles.menu}>
						<MenuElement menu={menu} setmenu={setmenu} titulo={'Inicio'} href={inicio} scroll={scroll} />
						<MenuElement
							menu={menu}
							setmenu={setmenu}
							titulo={'Plataforma'}
							href={plataforma}
							scroll={scroll}
						/>
						<MenuElement
							menu={menu}
							setmenu={setmenu}
							titulo={'Cobertura'}
							href={cobertura}
							scroll={scroll}
						/>
						<MenuElement menu={menu} setmenu={setmenu} titulo={'Videos'} href={videos} scroll={scroll} />
						<MenuElement
							menu={menu}
							setmenu={setmenu}
							titulo={'Contacto'}
							href={contacto}
							scroll={scroll}
						/>
					</View>
				</View>
			)}
			{isMobile && (
				<View style={[styles.cabecera, { width: width }]}>
					<Image
						source={{
							uri:
								'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/logo.png?alt=media&token=e4e4b903-bd6e-4fdc-8a5f-4f3da51eaf91',
						}}
						style={{ width: '30%', height: '70%', resizeMode: 'contain', marginLeft: 20 }}
					/>
					<TouchableOpacity style={{ width: '8%', height: '35%', marginLeft: 20 }}>
						<Image
							source={{
								uri:
									'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/menumobil.png?alt=media&token=b2a6affa-dff1-4d0a-ae69-2850a824ad0b',
							}}
							style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
						/>
					</TouchableOpacity>
				</View>
			)}
		</>
	);
}

const MenuElement = ({ titulo, href, menu, setmenu, scroll }) => {
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
			<Text style={{ color: 'white', fontFamily: fonts.acumin, marginVertical: 5, fontSize: '2.5vw' }}>
				{titulo}
			</Text>
			{menu == titulo && <View style={{ height: 4, width: '100%', backgroundColor: '#f5aa00' }} />}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cabecera: {
		width: '100%',
		backgroundColor: 'black',
		height: 90,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: '2%',
		zIndex: 400,
		position: 'fixed',
		top: 0,
	},
	menu: {
		paddingHorizontal: '10%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default Cabecera;

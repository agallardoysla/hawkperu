import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native-web';
import { useWindowSize } from '../hooks/useWindowSize';

function Footer() {
	let { height, width, isMobile } = useWindowSize(1);

	return (
		<View
			style={{
				width: isMobile ? width : '100%',
				flexDirection: isMobile ? 'column' : 'row',
				height: isMobile ? 220 : 80,
				backgroundColor: 'black',
				alignItems: 'center',
				paddingHorizontal: isMobile ? 0 : '5%',
				justifyContent: isMobile ? 'center' : 'space-between',
			}}
		>
			<Image
				source={{
					uri:
						'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/logo.png?alt=media&token=e4e4b903-bd6e-4fdc-8a5f-4f3da51eaf91',
				}}
				style={{
					width: isMobile ? '100%' : '25%',
					marginBottom: 10,
					height: isMobile ? 80 : '70%',
					resizeMode: 'contain',
				}}
			/>
			<View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
				<Image
					source={{
						uri:
							'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/celular.png?alt=media&token=9072d654-60e4-41f1-93ad-3dfbbc1994c8',
					}}
					style={{ width: 25, height: 25, marginRight: 5 }}
				/>
				<Text style={{ color: 'white', marginRight: 20 }}>+51 961 995 146</Text>
				{isMobile && (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity>
							<Image
								source={{
									uri:
										'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/facebook.png?alt=media&token=c01a96cf-e87a-4fbc-a2c5-575488330dc9',
								}}
								style={{ width: 35, height: 35, marginRight: 5 }}
							/>
						</TouchableOpacity>
						<View style={{ height: 30, width: 2, backgroundColor: 'white' }} />
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
				)}
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image
					source={{
						uri:
							'https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/email.png?alt=media&token=ada6e230-0668-4693-8363-c29778a87a70',
					}}
					style={{ width: 25, height: 25, marginRight: 5 }}
				/>
				<Text style={{ color: 'white' }}>admin@hawkperu.com</Text>
			</View>
			{!isMobile && (
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
			)}
		</View>
	);
}

export default Footer;

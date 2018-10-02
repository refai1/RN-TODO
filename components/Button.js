import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function Button({ color, title, small, onPress }){
	return (
		<TouchableOpacity
			style={[styles.button, {borderColor: color}, {backgroundColor: color}]}
			onPress={onPress}
		>
			<Image source={title}/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 45,
		height: 45,
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	small: {
		fontSize: 14,
		padding: 5,
	},
	large: {
		fontSize: 16,
		padding: 10,
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
		justifyContent:'center',
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
	},
});


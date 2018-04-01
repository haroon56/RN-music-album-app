import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';


const Header = (props) => {
	const { textStyle, headerStyle } = styles;

return (
	<View style={headerStyle}>
		<Text style={textStyle}> {props.text} </Text>
	</View>
	);
};

export default Header;
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './CardSection';
import styles from './styles';
import Button from './Button';


const { 
	headerTextStyle,
	thumbnailContainerStyle,
	thumbnailStyle,
	imageStyle } = styles;


const AlbumDetail = ({ album }) => {
const { title, artist, thumbnail_image, image, url } = album;
	return (
			<Card>
			
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
						source={{ uri: thumbnail_image }} 
						style={thumbnailStyle}
					/>
				</View>
				<View>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			
			<CardSection>
				<Image
					source={{ uri: image }}
					style={imageStyle}
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
			</Card>
		);
};

export default AlbumDetail;

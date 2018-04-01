const styles = {
headerStyle: {
  backgroundColor: '#e3e2e2',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 15,
  shadowColor: '#f1f2f3',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  },
albumStyle: {
  backgroundColor: '#f3f6f9',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 15,
  shadowColor: '#a3b4a9',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  },
containerStyle: {
  borderBottomWidth: 1,
  padding: 5,
  backgroundColor: '#fff',
  // justifyContent: 'center',
  flexDirection: 'row',
  borderColor: '#ddd',
  position: 'relative',
  },
containerStyles: {
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  },
textStyle: {
  fontSize: 20
  },
headerTextStyle: {
  flexDirection: 'column',
  justifyContent: 'space-around',
  fontSize: 20
  },
thumbnailContainerStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 10,
  marginRight: 10
},
thumbnailStyle: {
  width: 50, height: 50 
},
imageStyle: {
  height: 400,
  flex: 1,
  width: null
},
buttonStyle: {
  flex: 1,
  alignSelf: 'stretch',
  borderWidth: 1,
  borderColor: '#007aff',
  marginLeft: 5,
  marginRight: 5,
  borderRadius: 5,
  backgroundColor: '#fff'
},
buttonTextStyle: {
  fontSize: 19,
  alignSelf: 'center',
  fontWeight: '600',
  color: '#007aff',
  paddingTop: 10,
  paddingBottom: 10,

}
};

export default styles;

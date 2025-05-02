
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default  StyleSheet.create({
    footer: {
        width: '100%',
        height: 100, 
        position: 'absolute',
        top:815,  
        paddingTop: 10,
        alignItems: 'center',
        borderTopWidth: 0.5,  
        borderTopColor: '#E6E6E6',  
      },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
  },
  selectedItem: {
    backgroundColor: 'white', // optional: change background color for selected item
  },
  selectedIcon: {
    tintColor: '#6395EE', // color for selected icon
  },
  selectedLabel: {
    color: '#6395EE', // color for selected label
      
  },
  bottomBorder: {
    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee',
    marginBottom: height * 0.025,
  },
});
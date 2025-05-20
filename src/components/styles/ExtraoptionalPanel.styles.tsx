import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const columns = 5;
const boxSpacing = 12; // horizontal spacing between items

// Subtract spacing between items from total width, then divide
const totalSpacing = boxSpacing * (columns - 1);
const boxSize = (width - totalSpacing) / columns;

export default StyleSheet.create({
  panelContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingVertical: Platform.OS === 'ios' ? 25 : 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 0,
  },
  optionBox: {
    width: boxSize,
    alignItems: 'center',
    marginRight: boxSpacing,
    marginBottom: 60,

  },
  // Remove right margin on every 4th item to prevent wrap issues
  noRightMargin: {
    marginRight: 0,
  },
  optionIcon: {
    width: 54,
    height: 54,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  optionLabel: {
    fontSize: 13,
    textAlign: 'center',
    color: '#444',
  },
});

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  heading: {
    fontSize: screenWidth * 0.045,
    fontWeight: '400',
    marginBottom: screenHeight * 0.01,
    marginLeft: screenWidth * 0.02,
    color: '#000',
  },

  headingList: {
    fontSize: screenWidth * 0.045,
    fontWeight: '400',
    marginBottom: screenHeight * 0.01,
    marginLeft: screenWidth * 0.06,
    color: '#000',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: screenWidth * 0.02,
    paddingHorizontal: screenWidth * 0.03,
    height: screenHeight * 0.06,
    backgroundColor: '#fff',
  },

  ListContainer: {
    width: screenWidth * 0.95,
    height: screenHeight * 0.31,
    backgroundColor: '#fff',
    borderRadius: screenWidth * 0.03,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: screenWidth * 0.02,
    padding: 6,
  },
  ListContainerTwo: {
    width: screenWidth * 0.9, // 90% of screen width
    backgroundColor: '#fff',
    borderRadius: screenWidth * 0.03,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: screenHeight * 0.02, // Margin top for spacing
    marginHorizontal: screenWidth * 0.05, // Horizontal margin for responsiveness
    padding: screenWidth * 0.03, // Padding inside the container
  }, 
  listItemtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: screenHeight * 0.012, // 1% of screen height for vertical margin
    paddingBottom: screenHeight * 0.012, // Padding at the bottom of each item
    borderBottomWidth: 1, // Separator line at the bottom
    borderBottomColor: '#ddd', // Separator color (light gray)
  },

  itemText: {
    flex: 1,
    fontSize: screenWidth * 0.04,
  },

  countText: {
    fontSize: screenWidth * 0.04,
    color: '#333',
    marginRight: screenWidth * 0.02, // Space before the arrow
  },

  arrowIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  searchInput: {
    fontSize: screenWidth * 0.04,
    color: '#000',
    flex: 1,
  },

  section: {
    backgroundColor: '#fff',
    borderRadius: screenWidth * 0.03,
    padding: screenWidth * 0.04,
    marginTop: screenHeight * 0.02,
  },

  orCircle: {
    alignSelf: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: screenHeight * 0.04,
  },

  orText: {
    color: '#555',
    fontWeight: 'bold',
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: screenHeight * 0.012, // 1% of screen height for vertical margin
    paddingBottom: screenHeight * 0.012, // 1% of screen height for padding-bottom
    borderBottomWidth: 1, // This adds the separator line
    borderBottomColor: '#ddd', // Light gray color for the separator line
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: screenWidth * 0.03, // 3% of screen width for margin-right
  },



  actionButton: {
    width: 24,
    height: 24,
    borderRadius: 14,
    borderColor: '#1E90FF',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1E90FF',
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
  },
});

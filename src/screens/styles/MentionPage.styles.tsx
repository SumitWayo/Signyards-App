import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    paddingVertical: screenHeight * 0.02, // ~5% vertical padding
  },
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.04, // ~4% horizontal padding
  },
   containerTwo: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.04, // ~4% horizontal padding
        paddingVertical: screenHeight * 0.07, // ~5% vertical padding

  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 12, // spacing between children (if supported)
  },
  messageBox: {
    width: screenWidth * 0.7, // 70% of screen width
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    padding: 12,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 16, // smaller margin for better responsiveness
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectTitle: {
    fontFamily: 'Noto Sans',
    fontSize: 12,
    flex: 1,
    color: '#000',
  },
  dateText: {
    fontFamily: 'Noto Sans',
    fontSize: 12, // changed from 2 to 12 for readability
    color: '#555',
  },
  messageBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  mentionText: {
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  timeText: {
    fontFamily: 'Noto Sans',
    fontSize: 12,
    color: '#555',
    marginLeft: 10,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dateTextInline: {
    fontFamily: 'Noto Sans',
    fontSize: 12,
    color: '#555',
    flex: 1,
    textAlign: 'right',
  },
  projectTitleBelow: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  girlImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  nameText: {
    fontFamily: 'Noto Sans',
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
  },
  dividerLine: {
    width: screenWidth * 0.9,  // 90% of screen width for responsiveness
    height: 1,
    backgroundColor: '#E6E6E6',
    alignSelf: 'center',
    marginTop: 16,
  },
  
});

export default styles;

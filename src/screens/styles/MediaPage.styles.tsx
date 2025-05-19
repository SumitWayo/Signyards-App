import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// ✅ Add types to percentage parameters
const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingTop: Platform.OS === 'android' ? hp(5) : hp(5),
    paddingBottom: hp(2.5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#fff",
    
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
  },
  iconWrapper: {
    padding: wp(1.5),
  },
  backIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  tabsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: wp(2),
  },
  tabButton: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(2),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  activeTabButton: {
    backgroundColor: '#6395EE',
  },
  tabText: {
    fontSize: wp(3.5),
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  closeText: {
    fontSize: wp(6),
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: wp(4),
    backgroundColor: '#EEEEEE',
  },
  contentText: {
    fontSize: wp(4),
    color: '#333',
  },
  mediaContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: hp(2),
    paddingHorizontal: wp(4),
    borderRadius: wp(2),
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: wp(2.5),
    rowGap: hp(2),
  },
  mediaItem: {
    width: wp(17),
    height: wp(19),
    borderRadius: wp(2),
  },
  monthGroup: {
    marginBottom: hp(2.5),
  },
  monthTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    marginBottom: hp(1.2),
    color: '#333',
  },
  linkList: {
    rowGap: hp(2),
  },
  linkItem: {
    flexDirection: 'row',
    columnGap: wp(3),
    marginBottom: hp(2),
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: hp(1),
  },
  linkContent: {
    flex: 1,
  },
  linkTitle: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#000',
  },
  linkDescription: {
    fontSize: wp(3.5),
    color: '#6395EE',
  },
  linkUrl: {
    fontSize: wp(3.5),
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  docItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: wp(3),
    borderRadius: wp(2),
    marginBottom: hp(2),
    borderBottomWidth: 1,
    borderColor: '#ccc',
    columnGap: wp(3),
  },
  docImage: {
    width: wp(13),
    height: wp(13),
    resizeMode: 'contain',
  },
  docContent: {
    flex: 1,
    justifyContent: 'center',
  },
  docTitle: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#000',
    marginBottom: hp(0.5),
  },
  docMeta: {
    fontSize: wp(3.2),
    color: 'blue',
  },
});

export default styles;

import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/ProjectInfoHeader.styles';
import useTypedNavigation from '../hooks/useTypedNavigation';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../src/types/navigation';

// ✅ Make sure this includes TeamMemberPage in your navigation types
type GroupPageNavigationProp = NavigationProp<RootStackParamList, 'GroupPage'>;

type ProjectInfoHeaderProps = {
  title?: string;
  showSearch?: boolean;
  rightIcon?: boolean;
};

const ProjectInfoHeader: React.FC<ProjectInfoHeaderProps> = ({
  title = 'HomePage',
  showSearch = true,
  rightIcon = false,
}) => {
  const navigation = useTypedNavigation<'Back'>();
  const navigationTwo = useNavigation<GroupPageNavigationProp>();

  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          { paddingBottom: showSearch ? styles.container.paddingBottom : 0 },
        ]}
      >
        {/* Top Row: Back Arrow + Title + Optional Right Icon */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.arrowWrapper}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <Text style={styles.title}>{title}</Text>

          {rightIcon ? (
            <TouchableOpacity onPress={() => navigationTwo.navigate('TeamMemberPage')}>
              <Image
                source={require('../../assets/icons/addperson.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: styles.arrowIcon.width }} />
          )}
        </View>

        {/* Search Input (conditionally rendered) */}
        {showSearch && (
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/Images/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#888"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProjectInfoHeader;

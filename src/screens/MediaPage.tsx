import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles/MediaPage.styles';

type MediaItem = {
  id: number;
  imageUrl: string;
  date: Date;
  title?: string;
  description?: string;
  url?: string;
  pages?: number;
  size?: string;
  format?: string;
};

const MediaPage = () => {
  const [selectedTab, setSelectedTab] = useState<'Media' | 'Links' | 'Docs'>(
    'Media'
  );

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1015/200/150',
      date: new Date(2025, 4, 10), // May
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1016/200/150',
      date: new Date(2025, 4, 15), // May
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/1020/200/150',
      date: new Date(2025, 3, 20), // April
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/id/1025/200/150',
      date: new Date(2025, 2, 5), // March
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/id/1027/200/150',
      date: new Date(2025, 2, 25), // March
    }, {
      id: 6,
      imageUrl: 'https://picsum.photos/id/1015/200/150',
      date: new Date(2025, 4, 10), // May
    },
    {
      id: 7,
      imageUrl: 'https://picsum.photos/id/1016/200/150',
      date: new Date(2025, 4, 15), // May
    },
    
  ];

  const linkItems: MediaItem[] = [
    {
      id: 101,
      imageUrl: 'https://picsum.photos/id/1035/200/150',
      date: new Date(2025, 4, 8),
      title: 'React Native Docs',
      description: 'Comprehensive guide for building apps using React Native.',
      url: 'https://reactnative.dev',
    },
    {
      id: 102,
      imageUrl: 'https://picsum.photos/id/1042/200/150',
      date: new Date(2025, 3, 22),
      title: 'Expo Documentation',
      description: 'Explore everything about Expo and how to use it with RN.',
      url: 'https://docs.expo.dev',
    },
  ];

  const docItems: MediaItem[] = [
    {
      id: 1,
      imageUrl: require('../../assets/Images/pdf.png'),
      date: new Date(2025, 4, 9),
      title: 'Company Profile',
      pages: 10,
      size: '1.5 MB',
      format: 'PDF',
    },
    {
      id: 2,
      imageUrl: require('../../assets/Images/pdf.png'),
      date: new Date(2025, 3, 18),
      title: 'Terms and Conditions',
      pages: 6,
      size: '900 KB',
      format: 'DOC',
    },
    {
      id: 3,
      imageUrl: require('../../assets/Images/pdf.png'),
      date: new Date(2025, 3, 2),
      title: 'Readme Instructions',
      pages: 2,
      size: '100 KB',
      format: 'TXT',
    },
  ];

  const groupByMonth = (items: MediaItem[]) => {
    const grouped: { [key: string]: MediaItem[] } = {};

    items.forEach((item) => {
      const date = new Date(item.date);
      const key = `${date.toLocaleString('default', {
        month: 'long',
      })} ${date.getFullYear()}`;

      if (!grouped[key]) {
        grouped[key] = [];
      }

      grouped[key].push(item);
    });

    return grouped;
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Media':
        const groupedMedia = groupByMonth(mediaItems);
        return (
          <View style={styles.mediaContainer}>
            {Object.entries(groupedMedia).map(([month, items]) => (
              <View key={month} style={styles.monthGroup}>
                <Text style={styles.monthTitle}>{month}</Text>
                <View style={styles.mediaGrid}>
                  {items.map((item) => (
                    <Image
                      key={item.id}
                      source={{ uri: item.imageUrl }}
                      style={styles.mediaItem}
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
        );

      case 'Links':
        const groupedLinkItems = groupByMonth(linkItems); // Renamed variable to avoid conflict
        return (
          <View style={styles.mediaContainer}>
            {Object.entries(groupedLinkItems).map(([month, items]) => (
              <View key={month} style={styles.monthGroup}>
                <Text style={styles.monthTitle}>{month}</Text>
                {items.map((item) => (
                  <View key={`${month}-${item.id}`} style={styles.linkItem}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.mediaItem}
                    />
                    <View style={styles.linkContent}>
                      <Text style={styles.linkTitle}>{item.title}</Text>
                      <Text numberOfLines={2} style={styles.linkDescription}>
                        {item.description}
                      </Text>
                      <Text style={styles.linkUrl}>{item.url}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
        );

      case 'Docs':
        const groupedDocItems = groupByMonth(docItems); // Renamed variable to avoid conflict
        return (
          <View style={styles.mediaContainer}>
            {Object.entries(groupedDocItems).map(([month, items]) => (
              <View key={month} style={styles.monthGroup}>
                <Text style={styles.monthTitle}>{month}</Text>
                {items.map((item) => (
                  <View key={item.id} style={styles.linkItem}>
                    <Image
            source={require('../../assets/Images/pdf.png')}
            style={styles.mediaItem}
                    />
                    <View style={styles.linkContent}>
                      <Text style={styles.linkTitle}>{item.title}</Text>
                      <Text style={styles.linkDescription}>
                        {item.pages} Pages | {item.size} MB | {item.format}
                      </Text>
                      <Text style={styles.linkUrl}>{item.url}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require('../../assets/Images/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <View style={styles.tabsWrapper}>
          {['Media', 'Links', 'Docs'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab as any)}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.activeTabButton,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MediaPage;

import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity , Image} from 'react-native';

import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import styles from './styles/ListPages.styles';
import { Button } from '../components/Button';

const data = [
  { id: '1', title: 'List One', color: '#FF6B6B',count:100 },
  { id: '2', title: 'List Two', color: '#4ECDC4', count:100},
  { id: '3', title: 'List Three', color: '#FFD93D',count:100 },
  { id: '4', title: 'List Four', color: '#A29BFE' ,count:100}, 
   { id: '5', title: 'List Four', color: '#A29',count:100 },

];

const ListPage = () => {
  // State to track the id of the clicked list item
  const [clickedId, setClickedId] = useState<string | null>(null);

  return (
    <View style={[styles.safeArea, { flex: 1 }]}>
      <ProjectInfoHeader title="Add to List" showSearch={false} />

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.section}>
            <Text style={styles.heading}>Enter Sub-Project Name</Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="E.g. Electrical Work, Site Team"
                placeholderTextColor="#888"
              />
            </View>
          </View> 

          <View style={styles.orCircle}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <Text style={styles.headingList}>Pick from existing</Text>
          <View style={styles.ListContainer}>
            {data.map((item) => (
              <View key={item.id} style={styles.listItem}>
                <View style={[styles.dot, { backgroundColor: item.color }]} />

                <Text style={styles.itemText}>{item.title}</Text>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => setClickedId(item.id)} 
                >
                  {clickedId === item.id && <View style={styles.innerCircle} />}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        <View>
          <Button title="Create List" />
        </View>
      </View>
       {/* <View style={styles.ListContainerTwo}>
      {data.map((item) => (
        <View key={item.id} style={styles.listItem}>
          <View style={[styles.dot, { backgroundColor: item.color }]} />
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.countText}>{item.count}</Text>
          <Image
            source={require('../../assets/Images/rightarrow.png')} // Update with the correct path to your arrow image
            style={styles.arrowIcon}
          />
        </View>
      ))}
    </View> */}
    </View>
  );
};

export default ListPage;

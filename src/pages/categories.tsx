import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  View,
  Text,
  FlatList,
} from 'react-native';
import {LeftArrow} from '../assets/icon/left_arrow';
import {SmallCategory} from '../components/common/small_category';

export const CategoriesPage = ({navigation}: any) => {
  const types = [
    {name: 'Internet Cafe', url: require('../assets/image/computer.png')},
    {name: 'Restaurant', url: require('../assets/image/ramenNoodles.png')},
    {name: 'National Park', url: require('../assets/image/forest.png')},
    {name: 'Movie Theater', url: require('../assets/image/cinema.png')},
    {name: 'Game Center', url: require('../assets/image/game.png')},
    {name: 'Gallery', url: require('../assets/image/gallery.png')},
    {name: 'Lounge', url: require('../assets/image/lounge.png')},
    {name: 'Club', url: require('../assets/image/club.png')},
    {name: 'Pub', url: require('../assets/image/pub.png')},
    {name: 'Play Station', url: require('../assets/image/play_station.png')},
    {name: 'Karaoke', url: require('../assets/image/karaoke.png')},
    {name: 'Billiard', url: require('../assets/image/billiard-ball.png')},
    {name: 'Bowling', url: require('../assets/image/bowling.png')},
    {name: 'Cafe', url: require('../assets/image/cafe.png')},
    {name: 'Arcade Game', url: require('../assets/image/arcade-machine.png')},
    {name: 'Сafeteria', url: require('../assets/image/soup.png')},
    {name: 'Bubble Tea', url: require('../assets/image/bubble-tea.png')},
    {name: 'Zoo Park', url: require('../assets/image/elephant.png')},
  ];
 

  return (
    <SafeAreaView style={styled.flat}>
      <View style={styled.header}>
        <Pressable
          style={styled.backButton}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <LeftArrow />
        </Pressable>
        <Text style={styled.headerText}>Categories</Text>
      </View>
      
      <FlatList
        data={types}
        renderItem={({item}) => <SmallCategory category_type={item} />}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const styled = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 12,
    borderColor: 'rgba(0, 0, 0, 0.04)',
    marginLeft: 10,
  },
  headerText: {
    color: '#242424',
    fontWeight: '500',
    letterSpacing: 0.02,
    fontSize: 26,
    marginLeft: 20,
  },
  flat: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
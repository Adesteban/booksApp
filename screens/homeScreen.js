import { useNavigation } from '@react-navigation/core'

import React, { useEffect, useState } from "react";
import { TouchableHighlight, Dimensions, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Animated, FlatList, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import books from '../consts/bookCard';

import { createNativeStackNavigator } from '@react-navigation/native-stack';




const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;
const cardWidth1 = width / 2 - 20;

function ExploreScreen({navigation}) {
  const categories = ['All', 'Popular', 'Top Rated', 'Latest'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const CategoryList = ({navigation}) => {
    return (
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? '#0782F9'
                      : 'grey',
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: '#0782F9',
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  

  const Card = ({books, index}) => {

  

    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('DetailsScreen', books)}>
        <Animated.View style={{...styles.card, transform: [{scale}]}}>
          <Animated.View style={{...styles.cardOverLay, opacity}} />
          <Image source={books.image} style={styles.cardImage} />
          <View style={styles.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {books.name}
                </Text>
                <Text style={{color: 'gray', fontSize: 12}}>
                  {books.author}
                </Text>
              </View>
              <TouchableOpacity>
              <Icon name="bookmark" size={26} color={'orange'}/>
              </TouchableOpacity>
              
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={'orange'} />
                <Icon name="star" size={15} color={'orange'} />
                <Icon name="star" size={15} color={'orange'} />
                <Icon name="star" size={15} color={'orange'} />
                <Icon name="star" size={15} color={'gray'} />
              </View>
              <Text style={{fontSize: 10, color: 'gray'}}>{books.reviews} reviews</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const TopHotelCard = ({books}) => {
    return (
      <View style={styles.topHotelCard}>
      <TouchableOpacity
          onPress={() => navigation.navigate('DetailsScreen', books)}>
          <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color={'orange'} />
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>
        <Image style={styles.topHotelCardImage} source={books.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{books.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color: 'gray'}}>
            {books.author}
          </Text>
        </View>
      </TouchableOpacity>
        
      </View>
    );
  };





  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
    <View style={styles.header}>
      <View style={{paddingBottom: 5}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#e8eddf'}}>
          Library
        </Text>
       

      </View>
      <Icon name="book" size={38} color='#e8eddf'/>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Search by Title, or Author"
            style={{fontSize: 15, paddingLeft: 10}}
            onChangeText={() => {books.name}}
          />
        </View>
        <CategoryList />
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={books}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card books={item} index={index} />}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>
            Top Books
          </Text>
          <Text style={{color: 'gray'}}>Show all</Text>
        </View>
        <FlatList
          data={books}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard books={item} />}
        />
      </ScrollView>

    </SafeAreaView>
  );
}

function FavoritesScreen({navigation}) {

  
  
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const Card1 = ({books}) => {
    return (
      <TouchableHighlight
        underlayColor={'white'}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', books)}>
        <View style={styles.card1}>
          <View style={{alignItems: 'center'}}>
            <Image source={books.image} style={{height: 120, width: 185, borderRadius: 10}} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
          <View>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>{books.name}</Text>
            <Text style={{fontSize: 12, color: 'gray', marginTop: 2}}>
              {books.author}
            </Text>
          </View>
            
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
    <View style={styles.header}>
      <View style={{paddingBottom: 5}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#e8eddf'}}>
          Favorites
        </Text>
       

      </View>
      <Icon name="bookmark" size={38} color='#e8eddf'/>
    </View>
    <ScrollView>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Search by Title, or Author"
            style={{fontSize: 15, paddingLeft: 10}}
          />
        </View>
        
        <View>
          <FlatList 
            showsVerticalScrollIndicator={false}
            numColumns={2} 
            data={books}
            renderItem={({item, index}) => <Card1 books={item} index={index} />}
            snapToInterval={cardWidth1}
          />
        </View>
        

      </ScrollView>

    </SafeAreaView>
    
  );
}

function SettingsScreen({navigation1}) {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
    <View style={styles.header}>
      <View style={{paddingBottom: 5}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#e8eddf'}}>
          Profile
        </Text>
          

      </View>
      <Icon name="account-circle" size={38} color='#e8eddf'/>
    </View>
    <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
      
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
        tabBarActiveTintColor: '#0782F9',
      }}>

      <Tab.Screen 
        name="Home" 
        component={ExploreScreen} 
        options={{
          headerShown: false,
          headerStyle: {
              backgroundColor: '#0782F9'
           },
           headerTitleStyle: {
             color: "#E5e5e5"
           },
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Favorites" 
        component={FavoritesScreen} 
        options={{
          headerShown: false,
          headerStyle: {
              backgroundColor: '#0782F9'
           },
           headerTitleStyle: {
             color: "#E5e5e5"
           },
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" 
        component={SettingsScreen} 
        options={{
          headerShown: false,
          headerStyle: {
              backgroundColor: '#0782F9'
           },
           headerTitleStyle: {
             color: "#E5e5e5"
           },
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}


export default function App() {
  return (
  
      <MyTabs />

  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#0782F9',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10,
    marginBottom: 10
  },
  searchInputContainer: {
    height: 35,
    width: 350,
    backgroundColor: '#e5e5e5',
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 320,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  card1: {
    height: 220,
    width: cardWidth1,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
  },
  cardImage: {
    height: 300,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardDetails: {
    height: 145,
    borderRadius: 15,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topHotelCard: {
    height: 160,
    width: 120,
    backgroundColor: 'white',
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 90,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  })
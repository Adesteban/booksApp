import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';






function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite!</Text>
    </View>
  );
}

function SettingsScreen() {
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
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  
 
}

// const HeaderButtonComponent = (props) => (
//   <HeaderButton
//     IconComponent={Ionicons}
//     iconSize={23}
//     color="#FFF"
//     {...props}
//   />
// );
  
// ExploreScreen.navigationOptions = (navData) => {
//   return {
//     headerTitle: "Home",
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
//         <Item
//           title="Setting"
//           iconName="ios-settings-outline"
//           onPress={() => navData.navigation.navigate("Setting")}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

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
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';





const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  const [pressed,usepressed]=useState(true)
  


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: 'white',
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
        <View style={style.header}>
        <TouchableOpacity>
          <Icon
              name="arrow-back-ios"
              size={28}
              color={'white'}
              onPress={navigation.goBack}
            />
        </TouchableOpacity>
          
          <TouchableOpacity 
          onPress={()=>{(pressed)?usepressed(false):usepressed(true)}}>
          {(pressed)?
            <Icon name="bookmark-border" size={28} color={'white'} /> :
            <Icon name="bookmark" size={28} color={'orange'} />
          }
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Icon name="place" color={'white'} size={28} />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: 'gray',
              marginTop: 5,
            }}>
            {item.author}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={20} color={'orange'} />
                <Icon name="star" size={20} color={'orange'} />
                <Icon name="star" size={20} color={'orange'} />
                <Icon name="star" size={20} color={'orange'} />
                <Icon name="star" size={20} color={'gray'} />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                4.0
              </Text>
            </View>
            <Text style={{fontSize: 13, color: 'gray'}}>365reviews</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: 'gray'}}>
              {item.details}
            </Text>
          </View>
        </View>
        
        
        <View style={style.btn} >
        <TouchableOpacity onPress={() => navigation.navigate('Pdf', item)}>
        
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Read PDF
          </Text>
        </TouchableOpacity>
    
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#0782F9',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  afterPress: {
    color: 'orange'
  },

  
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default DetailsScreen;
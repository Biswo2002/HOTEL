import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const HotelHome = () => {
  return (
    <SafeAreaView style={styles.Main}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <ImageBackground
          source={require('../assets/image/Bgmain.jpg')}
          style={styles.Background}
          imageStyle={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <View style={styles.HeadIcon}>
            <Entypo name="chevron-left" size={30} color={'#fff'} />
            <Foundation name="clipboard-notes" size={30} color={'#fff'} />
          </View>
        </ImageBackground>

        <TouchableOpacity style={styles.SecondIcon}>
          <SimpleLineIcons
            name="location-pin"
            size={30}
            color={'#ffff'}
            style={styles.LocationIcon}
          />
        </TouchableOpacity>
        <View style={styles.TextContainer}>
          <Text style={styles.MainText}>Silver Hotel & SPA</Text>
          <Text style={styles.SubText}>Green Street, Central district.</Text>
        </View>
        <View style={styles.ThirdContainer}>
          <View style={styles.RatingContainer}>
            <Entypo name="star" size={20} color={'#008000'} />
            <Entypo name="star" size={20} color={'#008000'} />
            <Entypo name="star" size={20} color={'#008000'} />
            <Entypo name="star" size={20} color={'#008000'} />
            <Entypo name="star-outlined" size={20} color={'#008000'} />
            <Text style={{marginLeft: 5, fontSize: 17}}>4.0</Text>
          </View>
          <Text style={{fontSize:16}}>500 views</Text>
        </View>
        <View style={styles.TextParagraph}>
          <Text style={styles.Paragraph}>
            Set 350 m from Maximus Plaza, Silver Hotel & SPA offers modern
            self-catering accommodation with free WiFi, parquet floors, and
            views of the historical centre. The Izz Museums are 10 minutes' walk
            away.
          </Text>
        </View>
        <View style={styles.Price}>
          <View>
            <Text style={styles.Price1}>Price per night</Text>
          </View>
          <TouchableOpacity style={styles.PriceText}>
            <Text style={styles.Breakfast1}>&#65284;120</Text>
            <Text style={styles.Breakfast}>+ breakfast</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Buttom}>
          <Text style={styles.Book}>Book Now </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelHome;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#f0fff0',
    flex: 1,
  },
  Background: {
    width: 415,
    height: 450,
  },
  HeadIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 30,
  },
  LocationIcon: {
    backgroundColor: '#6FD2C7',
    width: 80,
    height: 80,
    padding: 25,
    borderRadius: 50,
  },
  SecondIcon: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -40,
    
  },
  TextContainer: {
    marginHorizontal: 30,
  },
  MainText: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  SubText: {
    fontSize: 16,
  },
  ThirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    paddingTop: 5,
  },
  RatingContainer: {
    flexDirection: 'row',
  },
  TextParagraph: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  Paragraph: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'justify',
  },
  Price1: {
    fontSize: 23,
    color: '#000',
    fontWeight: 'bold',
  },
  Price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  PriceText: {
    flexDirection: 'row',
    // backgroundColor:'red',
    backgroundColor: '#E0F4F1',
    width: 200,
    height: 45,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  Breakfast: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    paddingRight: 15,
  },
  Breakfast1: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    paddingRight: 15,
  },
  Buttom: {
    backgroundColor: '#6FD2C7',
    marginHorizontal: 30,
    height: 60,
    marginVertical: 30,
    alignItems: 'center',
    borderRadius: 18,
  },
  Book: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    padding: 13,
  },
});

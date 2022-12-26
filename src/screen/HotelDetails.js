import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Details_Hotel = [
  {
    id: 'Hotel_1',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg10.jpg'),
  },
  {
    id: 'Hotel_2',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg1.jpg'),
  },
  {
    id: 'Hotel_3',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg6.jpg'),
  },
  {
    id: 'Hotel_4',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg5.jpg'),
  },
  {
    id: 'Hotel_5',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg7.jpg'),
  },
  {
    id: 'Hotel_6',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg4.jpg'),
  },
  {
    id: 'Hotel_7',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg9.jpg'),
  },
  {
    id: 'Hotel_8',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg8.jpg'),
  },
  {
    id: 'Hotel_9',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg11.jpg'),
  },
  {
    id: 'Hotel_10',
    title: 'Silver Hotel & SPA',
    price: '120',
    subtitle: 'Green street, Central district',
    View: '670 Views',
    image: require('../assets/image/Bg12.jpg'),
  },
];

const Sub_Hotel = [
  {
    id: 'Sub_Hotel_1',
    title:'Brig Hotel',
    subtitle:'Yuki Street',
    image: require('../assets/image/Bg13.jpg'),
  },
  {
    id: 'Sub_Hotel_2',
    title:'Brig Hotel',
    subtitle:'Yuki Street',
    image: require('../assets/image/Bg11.jpg'),
  },
  {
    id: 'Sub_Hotel_3',
    title:'Brig Hotel',
    subtitle:'Yuki Street',
    image: require('../assets/image/Bg12.jpg'),
  },
  {
    id: 'Sub_Hotel_4',
    title:'Brig Hotel',
    subtitle:'Yuki Street',
    image: require('../assets/image/Bg10.jpg'),
  },
  {
    id: 'Sub_Hotel_5',
    title:'Brig Hotel',
    subtitle:'Yuki Street',
    image: require('../assets/image/Bg16.jpg'),
  },
  {
    id: 'Sub_Hotel_6',
    title:'Brig Hotel',
    subtitle:'Yuki Street',
    image: require('../assets/image/Bg15.jpg'),
  },
];
const HotelDetails = () => {
  return (
    <SafeAreaView style={styles.Main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.HeaderContainer}>
          <View>
            <Text style={styles.FirstText}> Find your hotel</Text>
            <View style={styles.FirstLine}>
              <Text style={styles.FirstText1}>in</Text>
              <Text style={styles.FirstText2}>Paris</Text>
            </View>
          </View>
          <View style={styles.UserIcon}>
            <FontAwesome name="user-o" size={25} />
          </View>
        </View>
        <View style={styles.InputContainer}>
          <Fontisto name="search" size={20} style={{marginLeft: 30}} />
          <TextInput placeholder="Search" style={styles.Input} />
        </View>
        <View style={styles.ThirdContainer}>
          <View style={styles.Popular}>
            <TouchableOpacity>
              <Text style={styles.PopularText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 30}}>
              <Text style={styles.Rated}>Top rated</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.Show}>show all</Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#F5F5F9', flex: 1}}>
          <FlatList
            // {/* ///////////////////////////////////////////////////////////// */}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Details_Hotel}
            renderItem={({item}) => (
              <View style={{marginHorizontal:12}}>
                <TouchableOpacity style={styles.DetailsHotel}>
                  <ImageBackground
                    source={item?.image}
                    style={styles.HotelIMg}
                    imageStyle={{
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    }}>
                    <View style={{alignItems: 'flex-end'}}>
                      <View style={styles.HotelRate}>
                        <Text style={styles.Rate}>&#65284;{item?.price}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.HotelHome}>
                  <View style={styles.SilverHotel}>
                    <Text style={styles.Silver}>{item?.title}</Text>
                    <AntDesign name="book" size={25} color={'#52C0B4'} />
                  </View>
                  <Text style={styles.Green}>{item?.subtitle}</Text>
                  <View style={styles.RateSection}>
                    <View style={styles.Star}>
                      <Entypo name="star" color={'green'} size={20} />
                      <Entypo name="star" color={'green'} size={20} />
                      <Entypo name="star" color={'green'} size={20} />
                      <Entypo name="star" color={'green'} size={20} />
                      <Entypo name="star-outlined" color={'green'} size={20} />
                      <Text style={{paddingLeft: 5}}>5.0</Text>
                    </View>
                    <Text>{item?.View} </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />

          {/* --------------------------------------------------------- */}
          <View style={styles.ButtomList}>
            <Text style={styles.TopHotels}>Top hotels</Text>
            <TouchableOpacity>
              <Text style={styles.Showall}>Show all</Text>
            </TouchableOpacity>
          </View>

          <FlatList 
          data={Sub_Hotel}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{alignItems:'center',marginHorizontal:5}}>
          <TouchableOpacity style={styles.buttomContainer}>
            <ImageBackground
              source={item?.image}
              style={styles.buttomImg}
              imageStyle={{borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
              <View style={styles.ButtomRate}>
                <AntDesign name="star" size={20} color={'#F5A623'} />
                <Text style={{color: '#ffff', fontSize: 25}}>5.0</Text>
              </View>
            </ImageBackground>
            <View style={styles.ButtomIMgText}>
              <Text style={styles.BrigHotel}>{item?.title}</Text>
              <Text style={styles.YukiStreet}>{item?.subtitle}</Text>
            </View>
          </TouchableOpacity>
            </View>
          )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#FFFF',
    flex: 1,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    paddingVertical: 20,
  },
  FirstLine: {
    flexDirection: 'row',
  },
  FirstText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  FirstText1: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  FirstText2: {
    fontSize: 30,
    color: '#52C0B4',
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  UserIcon: {
    marginTop: 8,
  },
  InputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    marginLeft: 40,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    height: 55,
    marginVertical: 10,
    borderColor: '#F1F1F0',
    backgroundColor: '#F9F9F9',
  },
  Input: {
    paddingLeft: 15,
    fontSize: 20,
  },
  ThirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  Popular: {
    flexDirection: 'row',
  },
  PopularText: {
    fontSize: 20,
    color: '#52C0B4',
    fontWeight: 'bold',
  },
  Rated: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  Show: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  HotelIMg: {
    width: 310,
    height: 250,
  },
  DetailsHotel: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  HotelRate: {
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#52C0B4',
    width: 75,
    height: 50,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  HotelHome: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    height: 130,
    marginTop: -55,
    borderColor: '#fff',
    borderRadius: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Rate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  SilverHotel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingTop: 15,
  },
  Silver: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  RateSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  Green: {
    marginHorizontal: 15,
    paddingTop: 7,
    fontSize: 16,
  },
  Star: {
    flexDirection: 'row',
  },
  ButtomList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
    marginTop: 30,
  },
  TopHotels: {
    fontSize: 20,
    fontWeight: '600',
  },
  Showall: {
    fontSize: 20,
    fontWeight: '700',
  },
  buttomImg: {
    width: 180,
    height: 150,
  },
  ButtomRate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  buttomContainer: {
    marginLeft:10,
    paddingVertical: 20,
  },
  ButtomIMgText: {
    backgroundColor: '#ffff',
    width: 180,
    height: 75,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: -12,
  },
  BrigHotel: {
    fontSize: 22,
    paddingTop: 10,
    paddingHorizontal: 20,
    color: '#000',
    fontWeight: '600',
  },
  YukiStreet: {
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: '500',
    color: 'gray',
  },
});

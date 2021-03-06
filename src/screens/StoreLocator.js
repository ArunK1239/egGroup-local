
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,FlatList,Alert, Platform, Image,SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SearchBar, Icon } from 'react-native-elements';

import StoreList from './StoreList';
import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";

import styles from './../styles'

const { width, height } = Dimensions.get('window');

const aspectRatio = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio;

class StoreLocator extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  lat: 12.9317,
                  lng: 77.6914,
                  data: [],
                  stationdata: [
                        {
                              "name": "ESSO",
                              "address": "Marnixstraat 250, 1016 TL Amsterdam",
                              "Houres": "Today's Hours: 11 AM TO 4 PM",
                              "Distance": "0.16 km"
                        },
                        {
                              "name": "SHELL",
                              "address": "Ambachtsweg 50, Netherlands",
                              "Houres": "Today's Hours: 11 AM TO 4 PM",
                              "Distance": "2.00 km"
                        },
                        {
                              "name": "ESSO",
                              "address": "Marnixstraat 250, 1016 TL Amsterdam",
                              "Houres": "Today's Hours: 11 AM TO 4 PM",
                              "Distance": "0.16 km"
                        }
                  ],
                  iconName: 'search',
                  textInputValue: ''
            }
      }

      componentDidMount() {

            navigator.geolocation.getCurrentPosition((position) => {

                  this.setState({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                  });

            });
      }
      distanceButtonTapped = (item, index) => {
            var dataList = [...this.state.stationdata]
            Alert.alert('Distance Button Tapped');
            console.log('data after:: ', this.state.stationdata);
          }
      searchStore = (text) => {
            let searchedStore = text.toLowerCase();
            this.setState({ textInputValue: text });

            if (text.length > 0) {
                var sampleData = [{
                        name: "JP Morghan",
                        address: "multiplex marathahalli, marathahalli village, marathahalli, bengaluru, karnataka 560037, india",
                        stateName:"Karnataka",
                        city:"Bangalore",
                        zipCode:"683248",
                        coordinates: {
                              latitude: 12.9428,
                              longitude: 77.6966
                        },
                  },
                  {
                        name: "Innovative Multiplex",
                        address: "multiplex marathahalli, marathahalli village, marathahalli, bengaluru, karnataka 560037, india",
                        stateName:"Karnataka",
                        city:"Bangalore",
                        zipCode:"683249",
                        coordinates: {
                              latitude: 12.9516,
                              longitude: 77.6996
                        },

                  },
                  {
                        name:"More Megastore",
                        city :"Bangalore",
                        stateName:"Karnataka",
                        zipCode:"560037",
                       coordinates: {
                        longitude:	77.698657,
                        latitude:	12.948178
                       }
                      },
                      {
                        name:"Phoenix Marketcity",
                        city :"Bangalore",
                        stateName:"Karnataka",
                        zipCode:"560048",
                        coordinates: {
                        latitude:12.984710,
                        longitude:77.524460
                        }
                      },
                      {
                        name:"Garuda Mall",
                        city :"Bangalore",
                        stateName:"Karnataka",
                        zipCode:"560025",
                        coordinates: {
                        latitude:15.136950,
                        longitude:76.924454
                        }

                      }
                ];
                  var farray = sampleData.filter((item) => {
                        return item.zipCode.toLowerCase().startsWith(searchedStore) || item.city.toLowerCase().startsWith(searchedStore) || item.stateName.toLowerCase().startsWith(searchedStore);
                  })
                  this.setState({ data: farray });
            }
            else {
                  this.setState({ data: [] });
            }
      }
      selectedStore = (coordinates, name) => {
            this.setState({ lat: coordinates.latitude, lng: coordinates.longitude, data: [], textInputValue: name })
      }

      getTypedIcon = () => {
          return Platform.OS === "ios" ? "chevron-left" : "arrow-left";
      };

      getSizeIcon = () => {
          return Platform.OS === "ios" ? 38 : 24;
      };

      getColorIcon = () => {
          return Platform.OS === "ios" ? "rgb(15, 113, 184)" : "rgb(0, 0, 0)";
      };

      render() {
            return (
                  <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                  <View style={styles.mapContainer}>
                      <Toolbar style={styles.noBorderToolbar} openDrawer={this.openDrawer}>
                            <Icon
                                name={this.getTypedIcon()}
                                size={this.getSizeIcon()}
                                color={this.getColorIcon()}
                               type="material-community"
                               onPress={navigateBack}
                               iconStyle={styles.leftIconContainer}
                           />
                           <View style={styles.toolbarUtils}>
                               <Text style={styles.appTitle}>Settings</Text>
                           </View>
                       </Toolbar>
                        <View style={{ flex: 3 }}>

                              <MapView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2, left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
                                    provider={MapView.PROVIDER_GOOGLE}
                                    showsUserLocation={true}
                                    showsMyLocationButton={true}
                                    region={{
                                          latitude: this.state.lat,
                                          longitude: this.state.lng,
                                          latitudeDelta: 0.0900,
                                          longitudeDelta: 0.0500,
                                    }}>
                                    <MapView.Marker
                                          coordinate={{ latitude: this.state.lat, longitude: this.state.lng }} title={this.state.address}
                                          description={this.state.address}
                                    />
                              </MapView>

                              <View style={styles.inputView}>

                                    <SearchBar lightTheme placeholder='Search' inputStyle={{ backgroundColor: 'rgb(250,250,250)' }}
                                          containerStyle={{ backgroundColor: 'rgb(250,250,250)' }}
                                          icon={{ type: 'font-awesome', color: 'gray', name: this.state.iconName }}
                                          //as per vikranth request removed below event
                                          // onFocus={() => this.setState({ iconName: 'arrow-left' })}
                                          onBlur={() => this.setState({ iconName: 'search' })}
                                          value={this.state.textInputValue}
                                          clearIcon={{ color: 'gray' }} onChangeText={this.searchStore} />

                                    <StoreList data={this.state.data} selectedStore={this.selectedStore} />
                              </View>

                        </View>
                        <View style={{ flex: 2 }}>
                              <FlatList
                                    data={this.state.stationdata}
                                    keyExtractor={(item, index) => index.toString()}
                                    ref={(ref) => { this.flatListRef = ref; }}
                                    ItemSeparatorComponent={() => <View style={{ marginLeft: 0, marginRight: 0, height: 0.5, backgroundColor: 'gray' }} />}
                                    renderItem={({ item, index }) =>

                                          <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
                                                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 16, paddingRight: 16, backgroundColor: 'rgb(255, 255, 255)' }}>
                                                      <View style={{ flex: 2.8, justifyContent: 'center', backgroundColor: 'rgb(255, 255, 255)' }}>
                                                            <Text style={{ marginLeft: 5, marginBottom: 5, fontSize: 17 }}>{item.name}</Text>
                                                            <Text style={{ marginLeft: 5, marginBottom: 10, color: 'rgb(123, 122, 118)' }}>{item.address}</Text>
                                                            <Text style={{ marginLeft: 5, marginBottom: 10, color: 'rgb(15, 113, 184)', fontSize: 15 }}>Open</Text>
                                                            <Text style={{ marginLeft: 5, marginBottom: 10, fontSize: 17 }}>{item.Houres}</Text>

                                                            <View style={{ flexDirection: 'row', width: 180, height: 30, borderRadius: 5, justifyContent: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
                                                                  <View style={{ width: 60, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Image style={{width: 30, height: 20}} source={require('../assets/images/Logo_1.png')}/>
                                                                  </View>
                                                                  <View style={{ backgroundColor: 'gray', width: 1, height: 20, marginTop: 5 }} />
                                                                  <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Image style={{width: 30, height: 20}} source={require('../assets/images/Logo_2.png')} />
                                                                  </View>
                                                                  <View style={{ backgroundColor: 'gray', width: 1, height: 20, marginTop: 5 }} />
                                                                  <View style={{ width: 60, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Image style={{width: 30, height: 20}} source={require('../assets/images/Logo_3.png')} />
                                                                  </View>
                                                            </View>

                                                      </View>
                                                      <TouchableOpacity style={styles.loginbutton} onPress={() => navigateTo("storeDetails")}>

                                                      <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)', flexDirection: 'row', justifyContent: 'center' }}>
                                                      <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center' }}> {item.Distance} </Text>
                                                      <Image style={{width: 15, height: 15,alignSelf:'center'}} source={require('../assets/images/Arrow.png')} />
                                                      </View>
                                                      </TouchableOpacity>


                                                </View>
                                          </View>
                                    }
                              />
                        </View>

                  </View>
                  </SafeAreaView>
            );
      }
}

export default StoreLocator;

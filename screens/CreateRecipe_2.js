import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ModalDropdown from 'react-native-modal-dropdown';
import {AntDesign, MaterialIcons} from "@expo/vector-icons"

import colors from '../config/colors';

function CreateRecipe_2(props) {
    const [DishTypes, setDishTypes] = useState([{dishTypeName:"Roast",dishTypeID:1},{dishTypeName:"Vegetable sides",dishTypeID:2},{dishTypeName:"Antipasti",dishTypeID:2},{dishTypeName:"Pasta & risotto",dishTypeID:2}]);
    const [CusineTypes, setCurineType] = useState([{CusineTypeName:"Meat",CusineTypeID:1},{CusineTypeName:"Vegetarian",CusineTypeID:2}]);
    const [DishTypesID, setDishTypesId] = useState("");
    const [CusineTypeID, setCusineTypeID] = useState("");

    const {
        route: { params },
    } = props;
    // console.log(params,"PARAMS==>>")

    const nextBtn=()=>{
      props.navigation.navigate('CreateRecipe_3',{
          submitData1:params,DishTypesID:DishTypesID,CusineTypeID:CusineTypeID

      })
  }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/* header */}
                <View style={{ backgroundColor: colors.secondary, width: "100%" }}>
                    <Text style={{ padding: 10, left: "2%", color: "white", maxWidth: "90%", fontFamily: "ZermattFirst", fontSize: RFPercentage(3) }} >Let\s add some categories to make your recipe easy to find?</Text>
                </View>
        
                <View style={styles.recipeContainer}>


                    {/* feilds */}
                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Dish Type</Text>
                            {/* <TextInput style={{ marginTop: 5, fontSize: 20, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} /> */}
                            <View style={styles.dropDownMainView}>
                  <ModalDropdown
            
                    defaultValue={'Select Type'}
                    options={
                      DishTypes.map(
                        item => item.dishTypeName,
                      )
                    }
                    onSelect={index =>
                        setDishTypesId(DishTypes[index].dishTypeID)
                    }
                    textStyle={styles.modalDropDownTxt}
                    dropdownTextStyle={{
                   
                      color: "#000",

                    }}
                    dropdownStyle={styles.dropDownsty}
                  />
                  <View style={{ position: 'absolute', right: 15, zIndex: -10 }}>
                    <AntDesign
                      name="caretdown"
                      size={10}
                      color={"gray"}
                    />
                  </View>
                </View>
                        </View>
                    </View>

                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Cusine</Text>
                            {/* <TextInput style={{ marginTop: 5, fontSize: 20, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} /> */}
                            <View style={styles.dropDownMainView}>
                  <ModalDropdown
            
                    defaultValue={'Select Type'}
                    options={
                      CusineTypes.map(
                        item => item.CusineTypeName,
                      )
                    }
                    onSelect={index =>
                      setCusineTypeID(CusineTypes[index].CusineTypeID)
                    }
                    textStyle={styles.modalDropDownTxt}
                    dropdownTextStyle={{
                   
                      color: "#000",

                    }}
                    dropdownStyle={styles.dropDownsty}
                  />
                  <View style={{ position: 'absolute', right: 15, zIndex: -10 }}>
                    <AntDesign
                      name="caretdown"
                      size={10}
                      color={"gray"}
                    />
                  </View>
                </View>
                        </View>
                    </View>

  



                    {/* Next Button */}
                    <View style={{ width: '100%', height: '100%', left: "5%", marginTop: RFPercentage(24) }} >
                        <TouchableOpacity onPress={() => nextBtn()} style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: "13%" }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(2), color: 'white' }} >Next</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: '100%'
    },
    scrollView: {
        flex: 1,
        width: '100%',
        // justifyContent: 'center',

        // marginHorizontal: 20,
        // backgroundColor: 'pink',
    },
    recipeContainer: {
        // backgroundColor: 'pink',
        width: '90%',
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginBottom: 30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    modalDropDownTxt: {
      fontSize: 13, marginLeft: 8, height: 32, textAlignVertical: "center", marginTop: Platform.OS === 'ios' ? 10 : 0
      },
      dropDownsty: {
        height:130, width: "50%", marginTop: -20
      },
      dropDownMainView: {
        borderWidth: 0.8,
        borderColor: '#acb3bb',
        borderRadius: 8,
        height: 35,
        width: 180,
        alignSelf:"center",
        justifyContent: 'center',
        marginLeft: "25%",
      },

})

export default CreateRecipe_2;
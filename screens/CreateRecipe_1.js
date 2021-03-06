import React, { useState, useEffect, Component } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../config/colors';

class CreateRecipe_1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // isVisible: false,
        // isVisibleBottom: true,
        ingredientsArr: [{name:"",Qty:""}],
        servingFor:"",
        steps:""
      };
    }
    
     handleIngredients = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        // console.log(pickerResult);

    }

    handleSteps = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        // console.log(pickerResult);

    }
    AddInArrRequest = () => {
        this.state.ingredientsArr.push({
            name: "", Qty: ""
        })
        this.setState({})
    }



    nextBtn(){
        const {
            route: { params },
        } = this.props;
        this.props.navigation.navigate('CreateRecipe_2',{
            params,ingredientsArr:this.state.ingredientsArr,servingFor:this.state.servingFor,steps:this.state.steps

        })
    }



    render() {

        //   const { itemId, otherParam } = props.route.params;
        const {
            route: { params },
        } = this.props;
        // console.log(params, "PARAMS__+==>>")
        // console.log(props.route.params,"PARAMS=>>")
        // console.log(ingredientsArr,"ingredientsArr=>s")
        return (





            // const {
            //     route: { params },
            //   } = props;

            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" backgroundColor="white" />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                    {/* header */}
                    <View style={{ backgroundColor: colors.secondary, width: "100%" }}>
                        <Text style={{ padding: 10, left: "2%", color: "white", maxWidth: "90%", fontFamily: "ZermattFirst", fontSize: RFPercentage(3) }} >Something’s Cooking Lets add a few more details</Text>
                    </View>

                    <View style={styles.recipeContainer}>


                    {/* feild */}
                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Serving For</Text>
                            <TextInput 
                                value={this.state.servingFor}
                                onChangeText={(servingFor)=>this.setState({servingFor})}
                            style={{ marginTop: 5, fontSize: 20, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                        </View>

                        {/* Add ingredients */}
                        <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Ingredients</Text>
                            {/* <TouchableOpacity onPress={() => handleIngredients()} style={{ alignItems: 'center', borderColor: colors.tertiary, borderWidth: 2, borderStyle: 'dashed', borderRadius: 2, marginTop: 20, width: '100%', backgroundColor: 'rgba(249, 242, 222, 0.3)' }} >
                            <Text style={{ opacity: 1, padding: RFPercentage(2.1), fontFamily: 'ZermattFirst', fontSize: 23, color: colors.primary }}>Add Ingredients</Text>
                        </TouchableOpacity> */}
  {this.state.ingredientsArr.map((item, index) => {
                return (
               
                        <View style={{borderWidth:0,borderBottomWidth:0.8,marginTop:15,width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text>Name: </Text>
                            <TextInput 
                                     value={item.name}
                                     onChangeText={name => {
                                       let ingredientsArr = [...this.state.ingredientsArr];
                                       ingredientsArr[index] = { ...ingredientsArr[index], name: name };
                                       this.setState({ ingredientsArr });
                                     }}
                            placeholder={"Ingredint Name"}/>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text>Qty: </Text>
                            <TextInput
                            
                         
                            value={item.Qty}
                                     onChangeText={Qty => {
                                       let ingredientsArr = [...this.state.ingredientsArr];
                                       ingredientsArr[index] = { ...ingredientsArr[index], Qty: Qty };
                                       this.setState({ ingredientsArr });
                                     }} placeholder={"Ingredint Qty"}/>
                    
                            
                            </View>
                        </View>)})}
                    </View>
<TouchableOpacity onPress={()=>this.AddInArrRequest()} style={{width:"50%",alignSelf:"center",height:35,justifyContent:"center",alignItems:"center",backgroundColor: colors.primary,marginTop:10}}><Text style={{fontSize:25, color:"#fff", fontWeight:"bold"}}>Add    +</Text></TouchableOpacity>
                    {/* Steps */}
                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Steps</Text>
                    
                                <View style={{borderWidth:0.8,borderRadius:8,borderColor:"#b4b4b4",height:120,marginTop:15,width:"100%"}}>
                         
                            <TextInput        
                            value={this.state.steps}
                            onChangeText={(steps) => this.setState({steps})}
                            multiline={true} placeholder={"Ingredint Qty"}/>
                        </View>


                        {/* Next Button */}
                        <View style={{ width: '100%', height: '100%', left: "5%", marginTop: RFPercentage(8.5) }} >
                            <TouchableOpacity onPress={() => this.nextBtn()} style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: "13%" }} >
                                <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(2), color: 'white' }} >Next</Text>
                            </TouchableOpacity>
                        </View></View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
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
})

export default CreateRecipe_1;
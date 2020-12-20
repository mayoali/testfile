import React, { useState,useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';

import uploadCloudIcon from "../assets/images/cloudUpload.png"
import colors from '../config/colors';
import Toast from 'react-native-simple-toast';

const screenWidth = Dimensions.get('window').width;

function CreateRecipe(props) {

    const [easyFront, setEasyFront] = useState('black')
    const [easyBack, setEasyBack] = useState('white')

    const [mediumFront, setMediumFront] = useState('white')
    const [mediumBack, setMediumBack] = useState(colors.secondary)

    const [hardFront, setHardFront] = useState('white')
    const [hardBack, setHardBack] = useState(colors.secondary)

    const [RecipeName, setRecipeName] = useState("");
    const [PrepTime, setPrepTime] = useState("");
    const [BakingTime, setBakingTime] = useState("");
    const [RestingTime, setRestingTime] = useState("");
    const [Difficulty, setDifficulty] = useState("Easy");
    const [Base64, setBase64] = useState("");

    const handleEasy = () => {
        setEasyFront('black')
        setEasyBack('white')
        setDifficulty("Easy")
        setMediumFront('white')
        setMediumBack(colors.secondary)

        setHardFront('white')
        setHardBack(colors.secondary)
    }

    const handleMedium = () => {
        setEasyFront('white')
        setEasyBack(colors.secondary)
        setDifficulty("Medium")

        setMediumFront('black')
        setMediumBack('white')

        setHardFront('white')
        setHardBack(colors.secondary)
    }

    const handleHard = () => {
        setEasyFront('white')
        setEasyBack(colors.secondary)
        setDifficulty("Hard")

        setMediumFront('white')
        setMediumBack(colors.secondary)

        setHardFront('black')
        setHardBack('white')
    }

    useEffect(() => {
      getValue
     
    }, [])

    async function getValue(){
        const UserData = await AsyncStorage.getItem('signInData');
        const UserDataAdmin =JSON.parse(UserData);
        // console.log(UserData,"USER DATA+==> ha?")
      }



    const handleImage = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            quality: 0.8,
            base64: true      
        });
        setBase64(pickerResult.base64)
        // console.log(pickerResult.base64);

    }

 
const nextBtn=()=>{

    if(!Base64){
        Toast.show('Please Select Photo', Toast.LONG);
    }else if(!RecipeName){
        Toast.show('Please Enter RecipeName', Toast.LONG);
    }
    else if(!PrepTime){
        Toast.show('Please Enter Prep Time', Toast.LONG);
    }
    else if(!BakingTime){
        Toast.show('Please Enter Baking Time', Toast.LONG);
    }
    else if(!RestingTime){
        Toast.show('Please Enter Resting Time', Toast.LONG);
    }
    else{



    props.navigation.navigate('CreateRecipe_1',{
        RecipeName:RecipeName,PrepTime:PrepTime,BakingTime:BakingTime,RestingTime:RestingTime,Base64:Base64,Difficulty:Difficulty
        }
        )}
}
    // console.log(RFPercentage(3.3), screenWidth/15)
    // console.log(RecipeName,"RecipeName=>")
    return (
        <SafeAreaView style={styles.container}>
   
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/* header */}
                <View style={{ backgroundColor: colors.secondary, width: "100%" }}>
                    <Text style={{ padding: 10, left: "2%", color: "white", maxWidth: "90%", fontFamily: "ZermattFirst", fontSize: RFPercentage(3) }} >We are exited to see your recipe! Lets start with basics ...</Text>
                </View>

                <View style={styles.recipeContainer}>

                    {/* Upload */}
                    <View style={{ left: '5%', flexDirection: 'column', width: "100%", backgroundColor: colors.feedBar, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ padding: '5%', alignItems: 'center' }} >
                            <Image source={uploadCloudIcon} maxWidth={RFPercentage(12)} maxHeight={RFPercentage(12)} />
                            <TouchableOpacity onPress={() => handleImage()}>
                                <Text style={{ fontSize: RFPercentage(3), fontFamily: 'AvianoFlareRegular' }} >Upload Photo</Text>
                            </TouchableOpacity>
                            <Text style={{ opacity: 0.7, color: 'grey', fontSize: RFPercentage(2), fontFamily: 'sofiaprolight' }} >Click here for upload cover photo.</Text>
                        </View>
                    </View>

                    {/* feild */}
                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Name your recipe</Text>
                            <TextInput
                           
                           value={RecipeName}
                            onChangeText={setRecipeName}
                            style={{ marginTop: 5, fontSize: 20, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                    </View>

                    {/* Buttons */}
                    <View style={{ left: '5%', marginTop: "10%", width: "97%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Difficulty</Text>

                            <View style={{ flexDirection: 'row', marginTop: "5%" }} >
                                <TouchableOpacity onPress={() => handleEasy()} style={{ alignItems: 'center', width: "28%", backgroundColor: easyBack, borderWidth: 4, borderColor: colors.secondary }} >
                                    <Text style={{ color: easyFront, fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.2), padding: 5 }}>Easy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleMedium()} style={{ marginLeft: "8.8%", alignItems: 'center', width: "28%", backgroundColor: mediumBack, borderWidth: 4, borderColor: colors.secondary }} >
                                    <Text style={{ color: mediumFront, fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.2), padding: 5 }}>Medium</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleHard()} style={{ marginLeft: "8.8%", alignItems: 'center', width: "28%", backgroundColor: hardBack, borderWidth: 4, borderColor: colors.secondary }} >
                                    <Text style={{ color: hardFront, fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.2), padding: 5 }}>Hard</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* details */}
                    <View style={{ left: '5%', marginTop: "10%", width: "97%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View style={{ flexDirection: 'row', marginTop: "5%" }} >
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: RFPercentage(2.5), fontFamily: 'AvianoFlareRegular' }} >Prep Time</Text>
                                <Text style={{ fontSize: RFPercentage(1.7), maxWidth: "70%", minWidth: "70%", color: colors.primary, fontFamily: 'sofiaprolight' }} >How much time do you actively spend making the dish?</Text>
                            </View>
                            <View style={{ top: -10, width: "33%", borderBottomColor: "black", borderBottomWidth: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                                <TextInput
                                  value={PrepTime}
                                  onChangeText={setPrepTime}
                            
                                placeholderTextColor={colors.primary} placeholder="0 min" style={{ fontSize: RFPercentage(2.1), width: "50%" }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: "5%" }} >
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: RFPercentage(2.5), fontFamily: 'AvianoFlareRegular' }} >Baking Time</Text>
                                <Text style={{ fontSize: RFPercentage(1.7), maxWidth: "70%", minWidth: "70%", color: colors.primary, fontFamily: 'sofiaprolight' }} >How much time does the dish need to bake for?</Text>
                            </View>
                            <View style={{ top: -10, width: "33%", borderBottomColor: "black", borderBottomWidth: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                                <TextInput
                                  value={BakingTime}
                               onChangeText={setBakingTime}
                                placeholderTextColor={colors.primary} placeholder="0 min" style={{ fontSize: RFPercentage(2.1), width: "50%" }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: "5%" }} >
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: RFPercentage(2.5), fontFamily: 'AvianoFlareRegular' }} >Resting Time</Text>
                                <Text style={{ fontSize: RFPercentage(1.7), maxWidth: "70%", minWidth: "70%", color: colors.primary, fontFamily: 'sofiaprolight' }} >Does the dish need to rest any point? e.g maintaining, chilling  , rising time</Text>
                            </View>
                            <View style={{ top: -10, width: "33%", borderBottomColor: "black", borderBottomWidth: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                                <TextInput
                                  value={RestingTime}
                               onChangeText={setRestingTime}
                                placeholderTextColor={colors.primary} placeholder="0 min" style={{ fontSize: RFPercentage(2.1), width: "50%" }} />
                            </View>
                        </View>
                    </View>
                    {/* Next Button */}
                    <View style={{ width: '100%', left: "5%", marginBottom: RFPercentage(1.6) }} >
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + RFPercentage(3),
        // marginTop: Platform.OS === 'ios' ? RFPercentage(8) : null,
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

export default CreateRecipe;
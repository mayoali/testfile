import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Axios from "axios"
import colors from '../config/colors';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CreateRecipe_3(props) {
    const [loading, setLoading] = useState(false);
    const [chefNote, setChefNote] = useState("");
    const {route: { params }} = props;
 

            const Submit = async () => {
                    setLoading(true)
                    try {
                      
                        const UserData = await AsyncStorage.getItem('signInData');
                        const userLoginData =JSON.parse(UserData);
                
                        const response = await Axios.post(`http://192.168.0.110:5000/api/recipe/insertrecipe`,
                            {
                                "userId":userLoginData._id,
                                "name" :params.submitData1.params.RecipeName,
                                "ingredients":params.submitData1.ingredientsArr,
                                "steps":[{description:params.submitData1.steps}
                                // {"description":chefNote}
                            ],
                                "prepareTime":parseInt(params.submitData1.params.PrepTime),
                                "bakingTime":parseInt(params.submitData1.params.BakingTime),
                                "restingTime":parseInt(params.submitData1.params.RestingTime),
                                "fkDistypeId":"5fd5f8d979fa06222098cdb9",
                                // "fkDistypeId":params.DishTypesID,
                                "fkCusineTypeId":"5fd5f8d979fa06222098cdb9",
                                // "fkCusineTypeId":params.CusineTypeID,
                                "difficulty":params.submitData1.params.Difficulty,
                                // "dishImage":"baseparams64"
                                "dishImage":params.submitData1.params.Base64
                            },
                            {
                                headers: {
                                    "content-type": "application/json",
                                    Authorization: userLoginData.token
                                },
                            },
                        );
                        Toast.show('Recipe Add Successfully', Toast.LONG)
                       props.navigation.navigate("AddStep",{
                        // props.navigation.navigate("AddIngrdient",{
                           ResData:response.data
                       })
                        // console.log(response.data, "response=>>")
                        setLoading(false)
                    } catch (err) {
                        console.log(err,"ERR)R=>")
                        setLoading(false)

                }
                
        
            }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/* header */}
                <View style={{ backgroundColor: colors.secondary, width: "100%" }}>
                    <Text style={{ padding: 10, left: "2%", color: "white", maxWidth: "90%", fontFamily: "ZermattFirst", fontSize: RFPercentage(3) }} >Almost done. Chef! Tell us story behind your dish </Text>
                </View>

                <View style={styles.recipeContainer}>


                    {/* feilds */}
                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Chef’s Note</Text>
                            <TextInput 
                            value={chefNote}
                            onChangeText={setChefNote}
                            style={{ marginTop: 5, fontSize: 20, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                    </View>

                    {/* Next Button */}
                    <View style={{ width: '100%', height: '100%', left: "5%", marginTop: RFPercentage(50) }} >
                        <TouchableOpacity 
                        onPress={() => Submit()}
                        
                        style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: "13%" }} >
                           {loading?<View style={{padding:11}}><ActivityIndicator color={"#fff"}/></View>:
                            <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(2), color: 'white' }} >Post your recipe</Text>}
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
})

export default CreateRecipe_3;
import React, { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import RNFetchBlob from 'rn-fetch-blob'
import uploadCloudIcon from "../assets/images/cloudUpload.png"
import colors from '../config/colors';
import Axios from 'axios';
import Toast from 'react-native-simple-toast';

const screenWidth = Dimensions.get('window').width;

function AddStep(props) {

    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");

 
    const {
        route: { params },
    } = props;
    // console.log(params,"Params=>")

    const handleImage = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        // console.log('result', result);

        if (!result.cancelled) {
        Toast.show('Photo or Video Selected', Toast.LONG);
        setResult(result)    

        }

    }
    const ingredients = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        console.log('result', result);
        if (!result.cancelled) {
            this.setState({
                image: result,
            });
        }

    }
    const untensil = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        console.log('result', result);
        if (!result.cancelled) {
            this.setState({
                image: result,
            });
        }

    }
    const saveBtn = () => {
        setLoading(true)
           

        const apiUrl = `http://192.168.0.110:5000/api/video/uploadvideo`;
        const { name, uri } = result;
        const uriParts = name.split('.');
        const fileType = uriParts[uriParts.length - 1];
        const formData = new FormData();
           formData.append('document', {
             uri,
             name,
             type: `application/${fileType}`,
             fkRecipeId:params.recipeId
           });

           const options = {
             method: 'POST',
             body: formData,
             headers: {
               Accept: 'application/json',
               'Content-Type': 'multipart/form-data',
            //    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRmMGQ4NzQwNjk2YzM0M2YzMDQyOTAiLCJ1c2VybmFtZSI6InNhbXBsZWFzZGYiLCJpc1N1YmNyaWJlIjpmYWxzZSwiZW1haWwiOiJmYWl6YW5AZ21haWwuY29tIiwiaWF0IjoxNjA4NDc1MjM2LCJleHAiOjE2MDg0Nzg4MzZ9.ZD3E4ca35PKK670j_kef-K5MBcOqZldIzacC4CLMAxw"

             },
           };

           return fetch(apiUrl, options).then(resp => resp.json()).then(data=> {
            //    console.log(data,"DATA") 
           Toast.show(data, Toast.LONG);
           props.navigation.navigate('Payment')
           setLoading(false)
        })
       

    }


    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/* header */}
                <View style={{ backgroundColor: colors.secondary, width: "100%" }}>
                    <Text style={{ padding: 10, left: "2%", color: "white", maxWidth: "90%", fontFamily: "ZermattFirst", fontSize: RFPercentage(3) }} >Add step to help us out in your recipe</Text>
                </View>

                <View style={styles.recipeContainer}>

                    {/* Upload */}
                    <View style={{ left: '5%', flexDirection: 'column', width: "100%", backgroundColor: colors.feedBar, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ padding: '5%', alignItems: 'center' }} >
                            <Image source={uploadCloudIcon} maxWidth={100} maxHeight={100} />
                            <TouchableOpacity onPress={() => handleImage()}>
                                <Text style={{ fontSize: RFPercentage(2.3), fontFamily: 'AvianoFlareRegular' }} >Upload Photo or VIdeo</Text>
                            </TouchableOpacity>
                            <Text style={{ opacity: 0.7, color: 'grey', fontSize: RFPercentage(2), fontFamily: 'sofiaprolight' }} >Upload Photo or video of step</Text>
                        </View>
                    </View>

                    {/* feild */}
                    <View style={{ left: '5%', marginTop: "10%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Step Description</Text>
                            <TextInput 
                                value={description}
                                onChangeText={text => setDescription(text)}
                            style={{ marginTop: 25, fontSize: 20, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                    </View>


                    {/* Add ingredients */}
                    <View style={{ left: '5%', marginTop: "5%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Ingrdients Used</Text>
                        <TouchableOpacity onPress={() => ingredients()} style={{ alignItems: 'center', borderColor: colors.tertiary, borderWidth: 2, borderStyle: 'dashed', borderRadius: 2, marginTop: 25, width: '100%', backgroundColor: 'rgba(249, 242, 222, 0.3)' }} >
                            <Text style={{ opacity: 1, padding: 20, fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.5), color: colors.primary }}>Add Ingredients</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Steps */}
                    <View style={{ left: '5%', marginTop: "5%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(2.5) }} >Utensils Used</Text>
                        <TouchableOpacity onPress={() => untensil()} style={{ alignItems: 'center', borderColor: colors.tertiary, borderWidth: 2, borderStyle: 'dashed', borderRadius: 2, marginTop: 25, width: '100%', backgroundColor: 'rgba(249, 242, 222, 0.3)' }} >
                            <Text style={{ opacity: 1, padding: 20, fontFamily: 'ZermattFirst', fontSize: RFPercentage(2.5), color: colors.primary }}>Add a Untensil</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Next Button */}
                    <View style={{ width: '100%', left: "5%", marginBottom: 20 }} >
                        <TouchableOpacity onPress={() =>saveBtn()} style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: "13%" }} >
                            {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(2), color: 'white' }} >Save</Text>}
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
// setTimeout(function(){ Toast.show('', Toast.LONG); ate("")}, 5000);
export default AddStep;
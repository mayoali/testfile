import React,{useState} from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform,ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as Google from 'expo-google-app-auth';
import logo from "../assets/images/loginLogo.png";
import colors from '../config/colors';
import Toast from 'react-native-simple-toast';


function SignUp({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
        
    // 885371830120-9d3pag394m35qspb5md9brn7k1vpp72c.apps.googleusercontent.com

    async function signInWithGoogleAsync() {
        try {
          const result = await Google.logInAsync({
            behavior: 'web',
            // iosClientId: IOS_CLIENT_ID,
            androidClientId: "885371830120-9d3pag394m35qspb5md9brn7k1vpp72c.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
          });
    
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }
      const signInWithGoogle = () => {
        signInWithGoogleAsync()
        }


    const Login=()=>{
    console.log("Chalia kia?")
        if(!email){
            Toast.show('Please Enter Name', Toast.LONG);
        }else if(!password){
            Toast.show('Please Enter Email', Toast.LONG);
        }
        else if(!password){
            Toast.show('Please Enter Password', Toast.LONG);
        }
        else if(!password){
            Toast.show('Please Enter Phone Number', Toast.LONG);
        }
        else{
            setLoading(true)
            setTimeout(function(){ Toast.show('Register Successfully', Toast.LONG); navigation.navigate("HomeTabs")}, 2000);
        
          
        } 
        
        }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="#E8D5D4" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.shopingContainer}>
                    {/* logo */}
                    <View style={{ flex: 1, top: "30%", flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <Image source={logo} />
                    </View>

                    {/* welcome */}
                    <View style={{ marginTop: "45%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
    <Text style={{ fontSize: RFPercentage(4.2), color: colors.primary, fontFamily: 'ZermattFirst' }} >Welcome Sarah</Text>
                        <Text style={{ maxWidth: 330, fontSize: RFPercentage(2.1), marginTop: 6, fontFamily: 'sofiaprolight' }} >Try out different dishes, create your own recipe and share them with others</Text>
                    </View>

                    {/* input feilds */}
                    <View style={{ marginTop: "13%", width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View>
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.8) }} >Name</Text>
                            <TextInput
                               value={name}
                            onChange={(name)=>setName(name)}
                            style={{ fontSize: 17, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                        <View style={{ marginTop: "7%" }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.8) }} >Email</Text>
                            <TextInput
                               value={email}
                            onChange={(email)=>setEmail(email)}
                            style={{ fontSize: 17, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                        <View style={{ marginTop: "7%" }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.8) }} >Password</Text>
                            <TextInput
                             onChangeText={setPassword}
                             value={password}
                         
                            style={{ fontSize: 17, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                        <View style={{ marginTop: "7%" }} >
                            <Text style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.8) }} >Phone Number</Text>
                            <TextInput
                               value={phoneNumber}
                            onChange={setPhoneNumber}
                            style={{ fontSize: 17, minWidth: "100%", borderBottomColor: "black", borderBottomWidth: 1 }} />
                        </View>
                        <View style={{ marginTop: "2%", flexDirection: 'row' }} >
                            <Text numberOfLines={1} style={{ marginLeft: RFPercentage(22), color: 'grey', fontFamily: 'sofiaprolight', fontSize: RFPercentage(1.7) }} >Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                                <Text style={{ fontWeight: 'bold', marginLeft: RFPercentage(0.5), color: colors.primary, fontFamily: 'sofiaprolight', fontSize: RFPercentage(1.8) }} >Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() =>Login()} style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: RFPercentage(5), marginBottom: RFPercentage(4) }} >
                           {loading?
                           <View style={{padding:11}}>
                               <ActivityIndicator color={"#fff"}/>
                           </View>:
                            <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(2.1), color: 'white' }} >Sign Up</Text>}
                        </TouchableOpacity>
                    </View>

                    {/* Sign Uo */}
                    <View style={{ marginTop: RFPercentage(1), marginBottom: RFPercentage(5), width: "100%", flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <View>
                            <Text style={{ fontSize: RFPercentage(2.5), color: colors.primary, fontFamily: 'ZermattFirst' }} >Sign Up With {Platform.OS === 'android' ? 'Google' : 'Apple'}/Facebook?</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <TouchableOpacity onPress={() => console.log('facebook')} style={{ marginLeft: RFPercentage(1.5), width: '45%', backgroundColor: '#3b5999', alignItems: 'center', marginTop: RFPercentage(2), marginBottom: RFPercentage(3) }} >
                                <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(1.7), color: 'white' }} >Facebook</Text>
                            </TouchableOpacity>
                            {Platform.OS === 'android' ?
                                <TouchableOpacity onPress={() => signInWithGoogle()} style={{ marginLeft: RFPercentage(1.5), width: '45%', backgroundColor: '#4081ec', alignItems: 'center', marginTop: RFPercentage(2), marginBottom: RFPercentage(3) }} >
                                    <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, fontSize: RFPercentage(1.7), color: 'white' }} >Google</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => console.log('google')} style={{ justifyContent: 'center', flexDirection: 'row', borderColor: 'black', borderWidth: 1, marginLeft: RFPercentage(1.5), width: '45%', backgroundColor: 'white', alignItems: 'center', marginTop: RFPercentage(2), marginBottom: RFPercentage(3) }} >
                                    <MaterialCommunityIcons style={{ paddingLeft: 10 }} name='apple' color="black" size={RFPercentage(2.5)} />
                                    <Text style={{ fontFamily: 'AvianoFlareRegular', padding: 11, paddingLeft: 1, fontSize: RFPercentage(1.7), color: 'black' }} >Apple</Text>
                                </TouchableOpacity>
                            }
                        </View>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8D5D4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        width: '100%'
    },
    scrollView: {
        // backgroundColor: 'red',
        flex: 1,

        width: '90%',
    },

    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginBottom: 30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})

export default SignUp;
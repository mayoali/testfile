import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import colors from '../config/colors';
import img from '../assets/images/Rectangle2991.png'
import img2 from '../assets/images/Rectangle99.png'
import feedImg1 from "../assets/images/Rectangle8.png"
import feedImg2 from "../assets/images/Rectangle9.png"
import feedImg3 from "../assets/images/Rectangle18.png"
import feedImg4 from "../assets/images/Rectangle19.png"

import FeedCard from '../components/FeedCard';
import ListCard from '../components/ListCard';
import FavCard from '../components/FavCard';

const screenWidth = Dimensions.get('window').width;
const { width } = Dimensions.get('window');
const height = width * 0.45
const SCREEN_WIDTH = Dimensions.get('window').width;
const CAROUSEL_VERTICAL_OUTPUT = 30;
const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;


const feeds = [
    {
        id: 1,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
    {
        id: 2,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
    {
        id: 3,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
    {
        id: 4,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
    {
        id: 5,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
    {
        id: 6,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
    {
        id: 7,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
    {
        id: 8,
        picture: img,
        likes: '100k',
        hashTags: '#salad, #starwberry',
        heading: 'Fruit Saladd!!!',
        subHeading: 'yummmm'

    },
]
const toturailsData = [
    {
        id: 1,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
    {
        id: 2,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
    {
        id: 3,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
    {
        id: 4,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
    {
        id: 5,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
    {
        id: 6,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
    {
        id: 7,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
    {
        id: 8,
        picture: img2,
        time: '10 mins',
        serve: '1 serve',
        hashTags: '#fries, #eggs',
        heading: 'Make yummilicious breakfast for yourself',
    },
]

const favRecipeData = [
    {
        id: 1,
        picture: feedImg3,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
    {
        id: 2,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
    {
        id: 3,
        picture: feedImg1,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
    {
        id: 4,
        picture: feedImg3,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
    {
        id: 5,
        picture: feedImg2,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
    {
        id: 6,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
    {
        id: 7,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
    {
        id: 8,
        picture: feedImg4,
        likes: '100k',
        time: '40mins',
        description: 'Tasty Strawberry icecream',
        author: 'Christy Obioha'

    },
]


function Feed({ navigation }) {

    const [currentCompoent, setCurrentCompoent] = useState('feedC')

    const [feedBarBack, setFeedBarBack] = useState(colors.primary);
    const [feedBarFont, setFeedBarFont] = useState(colors.feedBar);

    const [tutoBarBack, setTutoBarBack] = useState(colors.feedBar);
    const [tutoBarFont, setTutoBarFont] = useState(colors.primary);

    const [favBarBack, setFavBarBack] = useState(colors.feedBar);
    const [favBarFont, setFavBarFont] = useState(colors.primary);

    const handleFeed = () => {
        setFeedBarBack(colors.primary)
        setFeedBarFont(colors.feedBar)

        setTutoBarBack(colors.feedBar)
        setTutoBarFont(colors.primary)

        setFavBarBack(colors.feedBar)
        setFavBarFont(colors.primary)

        setCurrentCompoent('feedC')
    }

    const handleTutorial = () => {
        setFeedBarBack(colors.feedBar)
        setFeedBarFont(colors.primary)

        setTutoBarBack(colors.primary)
        setTutoBarFont(colors.feedBar)

        setFavBarBack(colors.feedBar)
        setFavBarFont(colors.primary)

        setCurrentCompoent('tutFeed')
    }

    const handleFav = () => {
        setFeedBarBack(colors.feedBar)
        setFeedBarFont(colors.primary)

        setTutoBarBack(colors.feedBar)
        setTutoBarFont(colors.primary)

        setFavBarBack(colors.primary)
        setFavBarFont(colors.feedBar)

        setCurrentCompoent('favFeed')
    }

    let dummy = [1]
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>


                <View style={styles.feedContainer}>

                    {/* MIMI */}
                    <View style={styles.feedCards3} >
                        <View >
                            <Text style={[styles.feedM, { fontFamily: 'ZermattFirst' }]} >M</Text>
                        </View>
                        <View style={{ flexDirection: 'column', left: 25, marginTop: Platform.OS === 'ios' ? RFPercentage(2) : null }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: colors.primary, fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(3.3) }} >mimi</Text>
                                <MaterialCommunityIcons style={{ marginLeft: RFPercentage(14) }} size={35} color={colors.primary} name="dots-horizontal" />
                            </View>
                            <View>
                                <Text style={{ color: colors.tertiary, fontFamily: 'sofiaprolight', fontSize: RFPercentage(2.5) }} >Communtiy</Text>
                            </View>

                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ maxWidth: 120, marginTop: 10, borderWidth: 1, borderColor: colors.primary, alignItems: 'center' }}>
                                    <Text style={{ color: colors.primary, padding: 10, fontSize: RFPercentage(1.5) }}>Settings</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Nav Bar */}

                <View style={{ width: "100%", height: 65, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: "33.33%", backgroundColor: feedBarBack, padding: RFPercentage(2.8), paddingLeft: RFPercentage(2), flexDirection: 'row' }} >
                        <MaterialCommunityIcons onPress={() => handleFeed()} color={feedBarFont} name="menu" size={17} />
                        <Text onPress={() => handleFeed()} style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.4), color: feedBarFont, paddingLeft: RFPercentage(0.3), marginTop: Platform.OS === 'ios' ? RFPercentage(0.8) : null }}>Feed</Text>
                    </View>

                    <View style={{ width: "33.33%", backgroundColor: tutoBarBack, padding: RFPercentage(2.8), paddingLeft: RFPercentage(2), flexDirection: 'row' }} >
                        <MaterialCommunityIcons onPress={() => handleTutorial()} color={tutoBarFont} name="layers-triple-outline" size={17} />
                        <Text onPress={() => handleTutorial()} style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.4), color: tutoBarFont, paddingLeft: RFPercentage(0.3), marginTop: Platform.OS === 'ios' ? RFPercentage(0.8) : null }}>Tutorials</Text>
                    </View>

                    <View style={{ width: "33.33%", backgroundColor: favBarBack, padding: RFPercentage(2.8), paddingLeft: RFPercentage(2), flexDirection: 'row' }} >
                        <MaterialCommunityIcons onPress={() => handleFav()} color={favBarFont} name="heart-outline" size={17} />
                        <Text onPress={() => handleFav()} style={{ fontFamily: 'AvianoFlareRegular', fontSize: RFPercentage(1.4), color: favBarFont, paddingLeft: RFPercentage(0.3), marginTop: Platform.OS === 'ios' ? RFPercentage(0.8) : null }}>Favorites</Text>
                    </View>
                </View>

                {/* feed Component */}
                {currentCompoent === 'feedC' ? <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: 'row', marginLeft: -5, marginTop: RFPercentage(3) }} >
                    <View style={{ borderRadius: 2, borderStyle: 'dashed', marginBottom: -RFPercentage(26.8), left: 5, alignItems: 'center', justifyContent: 'center', maxWidth: RFPercentage(24), maxHeight: RFPercentage(24), minHeight: RFPercentage(24), borderWidth: 2, borderColor: colors.primary }} >
                        <MaterialCommunityIcons color={colors.primary} size={RFPercentage(10)} name="plus" />
                        <Text style={{ color: colors.primary }}>Add Photos</Text>
                    </View>

                    <FlatList
                        data={feeds}
                        keyExtractor={item => item.id.toString()}     //has to be unique   
                        renderItem={({ item, index }) => <FeedCard lastChild={feeds.length} id={item.id} subHeading={item.subHeading} heading={item.heading} hashTags={item.hashTags} likes={item.likes} picture={item.picture} />} //method to render the data in the way you want using styling u need
                        horizontal={false}
                        numColumns={2}
                    />
                </ScrollView> : null}

                {/* Tutorials */}
                {currentCompoent === 'tutFeed' ? <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: 'row', marginLeft: -5, marginTop: RFPercentage(3) }} >

                    <FlatList
                        data={toturailsData}
                        keyExtractor={item => item.id.toString()}     //has to be unique   
                        renderItem={({ item, index }) => <ListCard screenWidth={screenWidth} picture={item.picture} heading={item.heading} hashTags={item.hashTags} time={item.time} serve={item.serve} />} //method to render the data in the way you want using styling u need
                        horizontal={false}
                        numColumns={1}
                    />
                </ScrollView> : null}

                {/* Favourites */}
                {currentCompoent === 'favFeed' ? <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: 'row', marginLeft: -5, marginBottom: 30, marginTop: RFPercentage(3) }} >

                    <FlatList
                        data={favRecipeData}
                        keyExtractor={item => item.id.toString()}     //has to be unique   
                        renderItem={({ item, index }) => <FavCard author={item.author} description={item.description} time={item.time} likes={item.likes} picture={item.picture} />} //method to render the data in the way you want using styling u need
                        horizontal={false}
                        numColumns={2}
                    />
                </ScrollView> : null}

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
        // justifyContent: 'center',
        width: '95%',

        // backgroundColor: 'pink',
        // marginHorizontal: 20,
    },
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 30,
        // left: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    feedCards3: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: RFPercentage(3)

    },
    feedM: {
        fontSize: RFPercentage(10),
        color: 'white',
        padding: RFPercentage(3), paddingLeft: RFPercentage(4), paddingRight: RFPercentage(4),
        backgroundColor: colors.secondary,
        maxWidth: (screenWidth / 2) - 65, maxHeight: 140
    }
})

export default Feed;
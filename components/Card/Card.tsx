import React,{useEffect} from 'react'
import { View } from '../Themed'
import { StyleSheet } from 'react-native'
import {  useColorScheme } from 'react-native';
import { Platform } from 'react-native';


export default  function Card() {
    
   
   
    const colorScheme = useColorScheme();
    const themeSize = Platform.OS === 'web' ? styles.WebCardSize : styles.MobileCardSize
    const themeRadius = Platform.OS === "ios" ? styles.iosRadius: styles.normalRadius
    const themeCardStyle = colorScheme === 'light' ? styles.LightCard : styles.DarktCard;
    return (
       <View style={[themeCardStyle, themeSize, themeRadius]}/>
        
       
    )
}


const styles = StyleSheet.create({
    iosRadius: {
        borderRadius: 45,
    },

    normalRadius:{
        borderRadius:25
    },
    WebCardSize:{
        width: "20%",
        height: "50%",
    },
    MobileCardSize:{
        width: "50%",
        height: "30%"
    },
    LightCard : {

        
        backgroundColor: "white",
        padding: 25,
       
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 0, width: 0 },

    },

    DarktCard : {

        width: "50%",
        height: "30%",
        backgroundColor: "#45178F",
        padding: 25,
    
        shadowOpacity: 0.75,
        shadowRadius: 10,
        shadowColor: "#682EC7",
        shadowOffset: { height: 10, width: 2 },

    }
})
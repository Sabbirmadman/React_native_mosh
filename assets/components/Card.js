import React from "react";
import { View,StyleSheet, Image } from "react-native";

import Colors from "../Config/Colors";
import AppText from "./AppText";

function Card({title,subTitle,image}) {
    return(
        <View style = {styles.Card}>
            <Image style = {styles.Image} source = {image}/>
            <View style = {styles.detailsContainer}>
             <AppText style ={styles.title}>{title}</AppText>
             <AppText>{subTitle}</AppText>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Card:{
         borderRadius:15,
         backgroundColor:Colors.white,
         marginBottom:20,
         overflow:"hidden"
    },Image:{
        width:'100%',
        height:200,
    },detailsContainer:{
        padding:20,
    },title:{
        marginBottom:7,
    }
})
export default Card;
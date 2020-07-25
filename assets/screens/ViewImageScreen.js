import React from "react";
import {ImageBackground,StyleSheet, View,Text,Image,Button} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from '../Config/Colors';

 function ViewImageScreen(props) {
    return(<View style ={styles.container}>
        <View style ={styles.closeIcon}>
            <MaterialCommunityIcons name = "close" color = "white" size = {35}/>
        </View>
        <View style ={styles.deleteIcon}>
        <MaterialCommunityIcons name = "trash-can-outline" color = "white" size = {35}/>
        </View>
        <Image 
        resizeMode="contain"
        style = {styles.image}
        source = {require("../../assets/Images/NMSM.png")}>

        </Image>
        </View>
     
    );
     
 }
const styles = StyleSheet.create({
    closeIcon:{
        position:'absolute',
        top:20,
        left:20,
    },
    container:{
      backgroundColor:colors.black,
      flex : 1,  
    },
    deleteIcon:{
        position:'absolute',
        top:20,
        right:20,
    },
    image:{
       height : '100%',
       width: '100%'
    },
})
 export default ViewImageScreen;
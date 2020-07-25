import React from "react";
import { View,StyleSheet, TextInput, Platform } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import defaultStyles from "../Config/styles";
import Colors from "../Config/Colors";

function AppTextInput({icon , ...otherProps }) {
    return(<View style = {styles.container}>
        {icon && < MaterialCommunityIcons 
        name = {icon} size={25} 
        color = {defaultStyles.Colors.medium} 
        style={styles.icon}/>}

        <TextInput style ={defaultStyles.text}{...otherProps}/>

    </View>

    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.Colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
    },icon:{
        marginRight:10,
    },
     
   
})
export default AppTextInput;
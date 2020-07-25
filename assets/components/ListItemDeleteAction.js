import React from "react";
import { View ,StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import Colors from "../Config/Colors"
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//works for deleting messages after swaping

function ListItemDeleteAction({onPress}) {
  
    return(
        <TouchableWithoutFeedback onPress = {onPress} >
        <View style ={styles.container}>
            <MaterialCommunityIcons name ="trash-can" size={35} color= "white"/>
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
       
        backgroundColor:Colors.danger,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center"
        
    },
});

export default ListItemDeleteAction;
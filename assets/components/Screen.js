import React from "react";
import {StyleSheet, SafeAreaView, View} from "react-native";
import Constants from 'expo-constants';

//used for safe area view of all platforms 

function Screen({children,style}) {
    return(
        <SafeAreaView style = {[styles.screen,style]}>
           {children} 
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
    },
})
export default Screen;
import React from "react";
import {ImageBackground,StyleSheet, View,Text,Image,Button} from "react-native";
import AppButton from "../components/AppButton";

 function WelcomeScreen(props) {
    return(

       
           <ImageBackground
           blurRadius ={10}
           style = {styles.background}
           source ={require("../../assets/Images/Bcg1.jpg")}
           >
               <View style = {styles.logoContainer}>
               <Image source = {require('../../assets/Images/DEV_ATMO_FINAL.png')}
                    style = {styles.logo}
               />
               <Text style = {styles.tageLine}>Useless app</Text>
               </View >
               <View style ={styles.buttonContainer}>
                <AppButton title ="Login"/>
                <AppButton title ="Register" color = "secondary"/>
                
               </View>

           </ImageBackground>

      
    );
     
 }
 const styles= StyleSheet.create
 ({
     background : {
         flex:1,
         justifyContent: "flex-end",
         alignItems:"center",
     },
     buttonContainer:{
        padding:20,
        width:"100%",
       
     },
     logo :{
         height :70,
         width:300,
     },
     logoContainer:{
        position:"absolute",
        top:70,
        alignItems:'center'
     },
     tageLine:{
         fontSize:25,
         fontWeight:"600",
         paddingVertical:10,

     },

 });

 export default WelcomeScreen;
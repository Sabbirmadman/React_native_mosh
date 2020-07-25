import React from 'react';
import { View,Image,StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import Colors from '../Config/Colors';
import ListItem from '../components/ListItem';

//used for listing product/picture whatever

function ListingDetail(props){
    return(
        <View>
            <Image source ={require("../../assets/Images/KittyGandolf.png")}
           
            style ={styles.image}
            
            />
            <View style ={styles.detailsContainer}>
             <AppText style = {styles.title}>Kitty Gandolf</AppText>
             <AppText style = {styles.price}>$500</AppText>
              <View style = {styles.userContainer}>
                  
            <ListItem
            image = {require("./../Images/Sabbir.png")}
            title = "Sabbir Ahmed"
            subTitle = "10 Listing"
            />
              </View>
            </View>

        </View>
    
    );
}
const styles = StyleSheet.create({
    image:{

        width:"100%",
        height:300,
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:"500"
    },
    price:{

        color:Colors.secondary,
        fontWeight:"bold",
        fontSize:24,
        marginVertical:10,
    },
    userContainer:{
        marginVertical:20,
    }
})

export default ListingDetail;
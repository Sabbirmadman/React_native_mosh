import React from "react";
import { View,StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen"
import Card from "../components/Card";
import Colors from "../Config/Colors";


const listings = [
{
    id : 1,
    title: 'gandolf for sale',
    price : "$"+100,
    image : require('../Images/KittyGandolf.png')
},{
    id : 2,
    title: 'kitty for sale',
    price : "$"+1000,
    image : require('../Images/KittyGandolf.png')
},{
    id : 3,
    title: 'kitty for sale',
    price : "$"+1000,
    image : require('../Images/KittyGandolf.png')
}

]

function ListingScreen(props) {
    return(<Screen style = {styles.Screen}>
        <FlatList
        data = {listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem = {({item})=>
        <Card 
        title={item.title}
        subTitle = {item.price}
        image = {item.image}
        />
    }
        
        />
    </Screen>
    );
}
const styles = StyleSheet.create({
    Screen:{
        padding:10,
        backgroundColor:Colors.light,
    }
    
})
export default ListingScreen;
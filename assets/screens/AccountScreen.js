import React from "react";
import { View ,StyleSheet,FlatList} from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Color from "../Config/Colors"
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";


const menuItems = [
    {
        title:"My Listings",
        icon:{
            name :"format-list-bulleted",
            backgroundColor:Color.primary
        }
    },{
        title:"My Messages",
        icon:{
            name :"email",
            backgroundColor:Color.secondary
        }
    }
]



function AccountScreen(props) {
    return(
    <Screen style = {styles.Screen}>
        <View style = {styles.container} >
        <ListItem
        title ="Sabbir Ahmed"
        subTitle = "Asabbir311@gmail.com"
        image = {require('../Images/Sabbir.png')}
        />
        </View>
        <View style = {styles.container} >

            <FlatList
            data = {menuItems}
            keyExtractor = {menuItem =>menuItems.title}

            ItemSeparatorComponent={ListItemSeparator}
            renderItem = {({item}) =>
            <ListItem
            title={item.title}
            IconComponent = {
                <Icon
            name = {item.icon.name}
            backgroundColor = {item.icon.backgroundColor}
            />
            
            }/>
        }
            />
        </View>
        <ListItem
        title = "Log Out"
        IconComponent ={
            <Icon name = "logout"
            backgroundColor="#ffe66d"/>
        }
        />
    </Screen>

    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },Screen:{
        backgroundColor:Color.light
    }
})
export default AccountScreen;
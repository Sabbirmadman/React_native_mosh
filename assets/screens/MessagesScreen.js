import React,{ useState } from "react";
import {FlatList ,StyleSheet, View} from "react-native";

import Screen from '../components/Screen';
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
    {
        id:1,
        title:"T1",
        description:"D1",
        image: require('../Images/Sabbir.png'),
    },
    {
        id:2,
        title:"T2",
        description:"D2",
        image: require('../Images/Sabbir.png'),
    }
]

function MessagesScreen(props) {
    const [messages ,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);

    const handelDelete = message =>{
        //delete message
       setMessages( messages.filter((m) => m.id!==message.id));
        
    }

    return(
        <Screen>
            <FlatList
           data = {messages}
           keyExtractor ={messages => messages.id.toString()}
           renderItem = {({item}) => 
           <ListItem
           title = {item.title}
           subTitle={item.subTitle}
           image={item.image}
           onPress ={()=>console.log("Mesage selected")}

           renderRightActions ={()=>(<ListItemDeleteAction onPress = {()=>handelDelete(item)}/>)}
           
           />} 
           ItemSeparatorComponent ={ListItemSeparator}
           refreshing = {refreshing}
           onRefresh ={()=>{
               setMessages([
                   {
                    id:3,
                    title:"T3",
                    description:"D3",
                    image: require('../Images/Sabbir.png'),
                   },
               ])
           }}
           
           />

        </Screen>
    );

}
const styles = StyleSheet.create({
    screen:{
        
    },
})
export default MessagesScreen;
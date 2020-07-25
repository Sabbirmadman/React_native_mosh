import React from 'react'
import { View,StyleSheet,Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import Colors from '../Config/Colors';

import Swipeable from 'react-native-gesture-handler/Swipeable';

//is used for message box 

function ListItem({title,subTitle,image, IconComponent,onPress,renderRightActions}) {
    return(
        <Swipeable
        renderRightActions = {renderRightActions} >
        <TouchableHighlight
        underlayColor ={Colors.light}
         onPress ={onPress}>
        <View style ={styles.container}>
            {IconComponent}
           { image && <Image source ={image}
            style ={styles.image}/>}
            
            <View style={styles.DetailContainer}>
                <AppText  style ={styles.title}>{title}</AppText>
                {subTitle&&<AppText style ={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>

    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        backgroundColor:Colors.white,
        
    },DetailContainer:{
        marginLeft:10,
        justifyContent:"center"
    },
    image:{
        height:70,
        width:70,
        borderRadius:35,
    },
    title :{
        fontWeight:"500",
    },
    subTitle:{
        color:Colors.medium,
    }
})
export default ListItem;
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,Switch  } from 'react-native';

import WelcomeScreen from './assets/screens/WelcomeScreen';
import ViewImageScreen from './assets/screens/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './assets/components/AppText';
import AppButton from './assets/components/AppButton';
import ListingDetail from './assets/screens/ListingDetail';
import MessagesScreen from './assets/screens/MessagesScreen';
import Screen from "../DoneWithIt/assets/components/Screen"
import Icon from "../DoneWithIt/assets/components/Icon"
import ListItem from "../DoneWithIt/assets/components/ListItem"
import AccountScreen from './assets/screens/AccountScreen';
import ListingScreen from './assets/screens/ListingScreen';
import AppTextInput from './assets/components/AppTextInput';


export default function App() {
  const [isNew, setIsNew] =useState(false);


  return (
    <Screen>
      <Switch value = {isNew}
       onValueChange ={(newValue)=> setIsNew(newValue)}/>

    </Screen>
 
  );
}
import React from 'react';
import TextInputBox from '../components/TextInputBox';
import {
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
    StatusBar,
  } from "react-native";

export default class AddList extends React.Component {
    render(){
        return(
            <View>
                <TextInputBox />
            </View>
        );
    }
}
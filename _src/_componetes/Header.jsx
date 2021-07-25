import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {styles} from "../Styles/Style";

export default function Header(){
    return (
        <View style={styles.viewHeader}>
            <Text style={styles.textHeader}>MyCalc</Text>
        </View>
    )
}


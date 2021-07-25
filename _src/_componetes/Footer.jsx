import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {styles} from '../Styles/Style'

export default function Footer(){
    return (
        <View style={styles.viewfooter}>
           <View style={styles.viewfooter1}><Text style={styles.textfooter}>Copy@ - Rodnei Dias</Text></View>        
        </View>
    )
}
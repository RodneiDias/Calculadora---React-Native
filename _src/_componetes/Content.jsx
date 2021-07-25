import React from "react";
import { View, Text} from "react-native";
import { styles } from "../Styles/Style";
import Calculadora from "./Calculadora";

export default function Content(){
    return (
        <View style={styles.content}>
            <Calculadora />
        </View>
    )
}
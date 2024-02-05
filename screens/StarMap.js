import React, {Component} from "react";
import {Text, View} from "react-native";

export default class StarMap extends Componet{
    render() {
        return(
            <View
                style = {{
                    flex:1,
                    justifyContent: "center",
                    alingnItems: "center",
                }}>
                <Text> Tela da nave espacial! </Text>
            </View>
        )
    }
}
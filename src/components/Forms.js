import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

export default function Form(props){

    const {setNum1, setNum2} = props;

    console.log(props);

    return(
        
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
            <Text style={styles.input}>Respuesta:{}</Text>
            </View>
        </View>

    )

}

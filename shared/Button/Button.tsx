import { StyleSheet, View, Text, Pressable } from "react-native"
import { Colors, Radius } from "../tokens";
import { useState } from "react";

interface BtnProps {
    text: string
}

export function Button(props: BtnProps) {
    const [buttonPressed, setButtonPressed] = useState('');

    return (
        <Pressable onPress={() => {
            setButtonPressed('Кнопка нажата');
        }}>
            <View style={buttonPressed === '' ? styles.buttonBody : styles.buttonBodyActive}>
                <Text style={styles.buttonText}>{buttonPressed === '' ? props.text : buttonPressed}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonBody: {
        width: '100%',
        height: 58,
        borderRadius: Radius.r10,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBodyActive: {
        width: '100%',
        height: 58,
        borderRadius: Radius.r10,
        backgroundColor: Colors.primaryHover,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: Colors.textWhite,
        fontWeight: '400',
        fontSize: 18
    }
});
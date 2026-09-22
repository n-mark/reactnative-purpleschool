import { StyleSheet, View, Text, Pressable, PressableProps, Animated } from "react-native"
import { Colors, Fonts, Radius } from "../tokens";
import { useEffect } from "react";

export function Button({ text, ...props }: PressableProps & { text: string }) {
    const animatedValue = new Animated.Value(100);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary]
    });

    Animated.timing(animatedValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true
    }).start();

    return (
        <Pressable {...props}>
            <Animated.View style={{
                ...styles.button, backgroundColor: color
            }}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 58,
        borderRadius: Radius.r10,
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
    text: {
        color: Colors.textWhite,
        fontWeight: '400',
        fontSize: Fonts.f18
    }
});
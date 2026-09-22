import { StyleSheet, View, Text, Pressable, PressableProps, Animated } from "react-native"
import { Colors, Fonts, Radius } from "../tokens";
import { useEffect } from "react";

export function Button({ text, ...props }: PressableProps & { text: string }) {
    const animatedValue = new Animated.ValueXY({
        x: 0,
        y: 0
    });

    Animated.timing(animatedValue, {
        toValue: {
            x: 100, y: 100
        },
        duration: 2000,
        useNativeDriver: true
    }).start();

    // так делать не надо
    // демонстрация отличия нативной анимации от ненативной
    // useEffect(() => {
    //     for (let index = 0; index < 10000; index++) {
    //         console.log(index);
    //     }
    // }, [animatedValue])

    return (
        <Pressable {...props}>
            <Animated.View style={{
                ...styles.button, transform: [
                    { translateX: animatedValue.x }, { translateY: animatedValue.y }
                ]
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
    text: {
        color: Colors.textWhite,
        fontWeight: '400',
        fontSize: Fonts.f18
    }
});
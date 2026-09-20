import { StyleSheet, View, Text, Pressable, PressableProps } from "react-native"
import { Colors, Fonts, Radius } from "../tokens";

export function Button({ text, ...props }: PressableProps & { text: string }) {
    return (
        <Pressable {...props}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
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
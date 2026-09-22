import { View, Text, ViewProps, StyleSheet } from "react-native";

export function Alert(props: ViewProps) {
    return (
        <View {...props} style={styles.alert}>
            <Text>'Неверный пароль'</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    alert: {
        alignSelf: 'stretch',
        backgroundColor: "#CC384E",
        width: 390,
        height: 50
    }
});
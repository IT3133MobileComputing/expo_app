import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function ContactUs() {
    return (
        <PaperProvider>
            <View style={styles.header}>
                <Text variant="headlineLarge">Headline Large</Text>
                <Divider />
            </View>

            <View style={styles.body}>

            </View>

            <View style={styles.footer}>
                <Text>App Copyright 2024</Text>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        width: "100%",
        alignItems: "center"
    },
    body: {
        flex: 5,
        width: "100%",
        alignItems: "center",
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: "center",
    }
});
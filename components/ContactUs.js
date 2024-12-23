import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider, TextInput } from 'react-native-paper';

export default function ContactUs() {
    return (
        <PaperProvider>
            <View style={styles.header}>
                <Text variant="headlineLarge">Headline Large</Text>
                <Divider />
            </View>

            <View style={styles.body}>
                <View style={styles.input}>
                    <TextInput label="Name" mode="outlined" />
                    <TextInput label="Email" mode="outlined" />
                    <TextInput label="Phone Number" mode="outlined" />
                    <TextInput label="Message" mode="outlined" multiline />
                </View>
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
        alignItems: "center",
        padding: 10,
        marginBottom: 10
    },
    body: {
        flex: 5,
        width: "100%",
        alignItems: "justify",
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: "center",
    },
    input: {
        padding: 8,
        marginBottom:7
    }
});
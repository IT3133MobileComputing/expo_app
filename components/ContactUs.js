import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider, TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function ContactUs() {

    const [name,setName] = useState();
    return (
        <PaperProvider>
            <View style={styles.header}>
                <Text variant="headlineLarge">Headline Large</Text>
                <Divider />
            </View>

            <View style={styles.body}>

                <View style={styles.input}>
                    <TextInput label="Name" mode="outlined" value={name} onChangeText={setName}/>
                </View>

                <View style={styles.input}>
                    <TextInput label="Email" mode="outlined" keyboardType='email-address'/>
                </View>

                <View style={styles.input}>
                    <TextInput label="Phone Number" mode="outlined" keyboardType='number-pad' />
                </View>

                <View style={styles.input}>
                    <TextInput label="Message" mode="outlined" multiline numberOfLines={5} />
                </View>
                {/* <Text>{name}</Text> By using this we can check the text values */}
            </View>

            <Button mode="outlined" onPress={() => alert('ContactUs')}>
                ContactUs
            </Button>

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
        marginBottom: 7
    }
});
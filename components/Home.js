import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function Home() {
    return (
        <PaperProvider>
            <View>
                <Text variant="headlineLarge">Headline Large</Text>
                <Divider />
                <Text variant="bodyMedium" style={styles.body}>Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right.
                </Text>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: 5,
        textAlign: 'justify',
    }
});
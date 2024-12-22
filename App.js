import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge">Headline Large</Text>
        <Divider />
        <Text variant="bodyMedium" style={styles.body}>Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right.
        </Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    padding: 5,
    textAlign: 'justify',
  }
});

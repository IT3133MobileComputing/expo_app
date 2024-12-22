import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home() {
    return (
        <PaperProvider>
            <View>
                <Text variant="headlineLarge">Headline Large</Text>
                <Divider />
                <Text variant="bodyMedium" style={styles.body}>Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself,
                    according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms.
                    When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface.
                    It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting.
                    This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself,
                    according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right.The oldest classical British and Latin writings had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized. Word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[1] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences.In word processing and desktop publishing, a hard return or paragraph break indicates a new paragraph, to be distinguished from the soft return at the end of a line internal to a paragraph. This distinction allows word wrap to automatically re-flow text as it is edited, without losing paragraph breaks. The software may apply vertical white space or indenting at paragraph breaks, depending on the selected style.

                    How such documents are actually stored depends on the file format. For example, HTML uses the  tag as a paragraph container. In plaintext files, there are two common formats. The pre-formatted text will have a newline at the end of every physical line, and two newlines at the end of a paragraph, creating a blank line. An alternative is to only put newlines at the end of each paragraph, and leave word wrapping up to the application that displays or processes the text.

                    A line break that is inserted manually, and preserved when re-flowing, may still be distinct from a paragraph break, although this is typically not done in prose. HTML's tag produces a line break without ending the paragraph; the W3C recommends using it only to separate lines of verse (where each "paragraph" is a stanza), or in a street address.
                    Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself,
                    according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms.
                    When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right. Its interface.
                    It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself, according to the guidelines of the platform you are targeting.
                    This can be overwhelming and non-trivial to do right. Its interface. It is responsive, fast and works reliably on both platforms. When building a React component, you have to style each of them yourself,
                    according to the guidelines of the platform you are targeting. This can be overwhelming and non-trivial to do right.The oldest classical British and Latin writings had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized. Word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[1] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences.In word processing and desktop publishing, a hard return or paragraph break indicates a new paragraph, to be distinguished from the soft return at the end of a line internal to a paragraph. This distinction allows word wrap to automatically re-flow text as it is edited, without losing paragraph breaks. The software may apply vertical white space or indenting at paragraph breaks, depending on the selected style.

                    How such documents are actually stored depends on the file format. For example, HTML uses the  tag as a paragraph container. In plaintext files, there are two common formats. The pre-formatted text will have a newline at the end of every physical line, and two newlines at the end of a paragraph, creating a blank line. An alternative is to only put newlines at the end of each paragraph, and leave word wrapping up to the application that displays or processes the text.

                    A line break that is inserted manually, and preserved when re-flowing, may still be distinct from a paragraph break, although this is typically not done in prose. HTML's tag produces a line break without ending the paragraph; the W3C recommends using it only to separate lines of verse (where each "paragraph" is a stanza), or in a street address.
                </Text>
            </View>
            <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: 5,
        textAlign: 'justify',
    }
});
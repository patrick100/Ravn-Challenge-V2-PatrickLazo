import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
    },
    separator: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderStyle: 'solid'
    },
    error: {
        padding: 10,
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.0125,
        color: '#EC5757'
    }
});

export default styles;


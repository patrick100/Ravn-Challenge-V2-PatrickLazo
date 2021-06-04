import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        marginLeft: 16,
    },
    content_name_value:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:12,
        paddingTop:12,
        paddingBottom:12,
    },
    content_name:{
        paddingRight:12,
        paddingTop:12,
        paddingBottom:12,
    },
    header: {
        marginTop: 25,
        fontFamily: "SF Pro Display",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 17,
        lineHeight: 20,
        display: "flex",
        alignItems: "center",
        letterSpacing: 0.0125,
        color: "#333333"
    },     
    name: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: 0.0125,
        color: '#828282'
    },
    value: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: 0.0125,
        color: "#333333"
    },
    separator: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderStyle: 'solid'
    }

});

export default styles;
import { StyleSheet } from 'react-native'

const SpinColor = '#DADADA'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: "row",
    padding: 10,
  },
  loadingText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.0125,
    color: '#828282',
    marginLeft: 10
  }
});

export {SpinColor,styles}
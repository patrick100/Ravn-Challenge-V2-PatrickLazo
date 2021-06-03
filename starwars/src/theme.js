import { StyleSheet } from 'react-native';

const colors = {
  RavnBlack: '#121212',
  /* Base / White */
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  /* Text input Bold 17 pt */
  headerText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.0125
  }
});

export {colors,styles}
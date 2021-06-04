import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 10, 
    paddingBottom: 10    
  },
  info_content: {
    flex: 1,
    flexDirection: 'column',
  },
  description: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.0125,
    color: "#828282"
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
    color: "#333333"
  },
  icon: {
    fontSize: 12,
    marginTop: 12,
    marginRight: 15,
  }
})

export default styles;
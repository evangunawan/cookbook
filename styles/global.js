import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  fullButton: {
    alignSelf: 'stretch',
    marginVertical: 8,
  }

})

export { global };
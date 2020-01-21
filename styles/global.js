import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  containerCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullButton: {
    alignSelf: 'stretch',
    marginVertical: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  horizontalLine: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginVertical: 16,
    width: '80%',
    alignSelf: 'center',
  },
});

export { global };

import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Spinner, Text } from '@ui-kitten/components';

const LoadingOverlay = (props)=>{
  return(
    <Layout style={classes.wrapper}>
      <Layout style={classes.rootLayout}>
        <Spinner />
        <Text style={{marginLeft: 16}}>Loading...</Text>
      </Layout>    
    </Layout>
  )

}

const classes = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '130%',
    position:'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 99,
  },  
  rootLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal:32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 4,
    position: 'absolute',
    top: '50%',
    zIndex: 100,
  }
});

export default LoadingOverlay;
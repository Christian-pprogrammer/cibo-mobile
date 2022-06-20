import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Faster = () => {
  return (
    <View style={styles.faster}>
      <Text style={styles.text}>More than faster</Text>
    </View>
  )
}

export default Faster

const styles = StyleSheet.create({
  faster: {
    backgroundColor: '#fdd5d5',
    width: '100%',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: '#f54748', 
    // position: 'absolute',
    zIndex: -2,
    marginTop: 30
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})
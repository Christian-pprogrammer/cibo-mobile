import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from '../shared/CustomButton/CustomButton'

const Overview = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContent}>
        <Text style={styles.heading}>Let us prepare your meal before time</Text>  
      </View>  
      <View>
        <Text style={styles.ourJob}>
          Our job is to prepare your meal before your reach the restourant
          and save your waiting time
        </Text>
      </View>
      <View style={styles.customButtons}>
        <CustomButton>Get started</CustomButton>
        <Text style={styles.watchVideo}>Watch a video</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.personImage} source={require('../../../assets/person.png')} />
      </View>
    </View>
  )
}

export default Overview

const styles = StyleSheet.create({
  mainContainer: {
    zIndex: -1
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 50,
    marginTop: 30
  },
  ourJob: {
    fontSize: 23,
    lineHeight: 25,
    paddingTop: 10,
  },
  customButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  watchVideo: {
    marginLeft: 15,
    // textDecorationColor: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid'
    
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  personImage: {
    width: 400,
    height: 450
  }
})
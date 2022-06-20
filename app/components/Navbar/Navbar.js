import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav)
  }
  return (
    <View style={styles.outerView}>
      <View style={styles.navbar}>
        <Text style={styles.logo}>CIBO</Text>
        <TouchableWithoutFeedback onPress={toggleNav}>
          <View style={styles.navTogglerContainer}>
            <View style={styles.navToggler}></View>
            <View style={styles.navToggler}></View>
            <View style={styles.navToggler}></View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={[styles.navList, {left: showNav ? 0 : -220}]}>
        <Text style={styles.logo}>CIBO</Text>
        <TouchableWithoutFeedback style={styles.link}>
          <View style={styles.link}>
            <Text>Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.link}>
            <Text>How it works</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.link}>
            <Text>Restourants</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.link}>
            <Text>Pricing</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.link}>
            <Text>Meal</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.link}>
            <Text>Login</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.link}>
          <View style={styles.link}>
            <Text>Signup</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({

  outerView: {
    position: 'relative'
  },

  navbar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // position: 'fixed',
    // top: 0
  },
  logo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'cursive'
  },
  navTogglerContainer: {
    width: 30,
    height: 30,
    display: 'flex',
    // alignItems: 'space-between',
    justifyContent: 'space-around',
  },
  navToggler: {
    backgroundColor: '#f54748',
    width: '100%',
    height: 4
  },
  navList: {
    position: 'absolute',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    width: 200,
    height: 400,
    backgroundColor: '#fdecec',
    borderColor: '#f54748'
  },
  link: {
    paddingVertical: 10,
    textDecorationColor: 'black',
    textDecorationLine: 2,
  }
})
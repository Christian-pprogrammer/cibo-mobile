import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Faster from '../../components/Faster/Faster'
import Overview from '../../components/Overview/Overview'
import HowItWorks from '../../components/HowItWorks/HowItWorks'

const HomeScreen = () => {
  return (
    <View>
      <Navbar />
      <Faster />
      <Overview />
      <HowItWorks />
    </View>
  )
}

export default HomeScreen
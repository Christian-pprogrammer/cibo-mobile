import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Variables } from './../../../config/Variables';

const CustomButton = ({secondary, children}) => {

  return (
    <TouchableWithoutFeedback>
      <View style={
        [styles.customButtonStyled, 
          {
            backgroundColor: secondary ? Variables.appSemi2Red:Variables.appRed
          }
        ]}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  customButtonStyled: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: 'none'
  }
})
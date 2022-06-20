import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Variables } from './../../config/Variables';
import CustomButton from '../shared/CustomButton/CustomButton';

const HowItWorks = () => {
  const mealSteps = [
    {
      title: "Create cibo account",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tenetur "
    },
    {
      title: "Search restourant",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tenetur "
    },
    {
      title: "Order your meal",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tenetur "
    }
  ];
  const restourantSteps = [
    {
      title: "Create restourant account",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tenetur "
    },
    {
      title: "Enter your dashboard",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tenetur "
    },
    {
      title: "Start preparing foods",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tenetur "
    }
  ];
  return (
    <View style={styles.customDiv}>
      <Text style={styles.sectionHeader}>HowItWorks</Text>
      <View style={styles.customDivButtons}>
        <CustomButton secondary={false}>
          <Text style={{color: 'white'}}>Meal owner</Text>
        </CustomButton>
        <CustomButton secondary={true}>
          <Text>Restourant owner</Text>
        </CustomButton>
      </View>
    </View>
  )
}

export default HowItWorks

const styles = StyleSheet.create({
  customDiv: {
    position: 'relative'
  },
  sectionHeader: {
    fontSize: 25,
    paddingTop: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  customDivButtons: {
    // position: 'relative',
    backgroundColor: Variables.appSemi2Red,
    borderRadius: 50,
    marginVertical: 50,
    marginHorizontal: 0,
    flexDirection: 'row',
    width: 'fit-content',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 'auto'
  }
})
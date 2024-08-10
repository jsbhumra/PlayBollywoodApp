import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Letter = ({ char, special=false, guessed=false }) => {
  const vowels = ['A','E','I','O','U']
  const nums = ['1','2','3','4','5','6','7','8','9','0']
  return (
    <View style={[styles.container,{borderColor: special ? 'transparent' : '#d3d6db', borderWidth: 2}]}>
      <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ textAlign: 'center', color: guessed || special ? "#000" : vowels.includes(char) || nums.includes(char) ? '#d3d6db' : "transparent", fontWeight: '700', fontSize: 25 }} >{char==" " ? "/" : !guessed && vowels.includes(char) ? '_' : !guessed && nums.includes(char) ? '#' : char}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        margin: '0.5%',
        aspectRatio: 1,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Letter
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const NumKey = ({ char, setGuess, guessed=false, special }) => {
  return (
    <Pressable style={[styles.container,{backgroundColor: guessed ? special ? '#6ba963' : '#787c7e' : '#d3d6da'}]} disabled={guessed} onPress={()=>setGuess((prev)=>[char,...prev])}>
      <View style={{ height: '75%', width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ textAlign: 'center', color: guessed ? "#fff" : "#000", fontWeight: '700', fontSize: 28 }} >{char}</Text></View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '9%',
        margin: '0.5%',
        aspectRatio: 1,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default NumKey
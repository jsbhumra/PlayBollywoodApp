import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Letter from './letter'

const MovieName = ({ name, guess }) => {
    const nameArr = name.toUpperCase().split("")
  return (
    <View style={styles.container}>
        {/* <Letter char={'A'} /> */}
      {nameArr.map((char,ind)=>{
        return <Letter char={char} key={`letter-${char}=${ind}`} special={!char.match(/[a-zA-Z1-9]/)} guessed={guess.includes(char)} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default MovieName
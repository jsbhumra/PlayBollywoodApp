import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Key from './key'
import NumKey from './numKey'

const rowNum = ['1','2','3','4','5','6','7','8','9','0']
const row1 = ['Q','W','E','R','T','Y','U','I','O','P']
const row2 = ['A','S','D','F','G','H','J','K','L']
const row3 = ['Z','X','C','V','B','N','M']

const CustomKeyboard = ({ guess, setGuess, movie }) => {
    const movieArr = movie.toUpperCase().split("")
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
        {rowNum.map((char,ind)=>{
            return <NumKey char={char} key={`key-${char}=${ind}`} special={movieArr.includes(char)} setGuess={setGuess} guessed={guess.includes(char)} />
        })}
        </View>
        <View style={styles.subContainer}>
        {row1.map((char,ind)=>{
            return <Key char={char} key={`key-${char}=${ind}`} special={movieArr.includes(char)} setGuess={setGuess} guessed={guess.includes(char)} />
        })}
        </View>
        <View style={styles.subContainer}>
        {row2.map((char,ind)=>{
            return <Key char={char} key={`key-${char}=${ind}`} special={movieArr.includes(char)} setGuess={setGuess} guessed={guess.includes(char)} />
        })}
        </View>
        <View style={styles.subContainer}>
        {row3.map((char,ind)=>{
            return <Key char={char} key={`key-${char}=${ind}`} special={movieArr.includes(char)} setGuess={setGuess} guessed={guess.includes(char)} />
        })}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 3,
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    subContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default CustomKeyboard
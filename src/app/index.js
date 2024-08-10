import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Index = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={()=>{router.push('/home')}} style={{ borderWidth: 2, borderColor: '#131417', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}><Text>Play!</Text></Pressable>
    </View>
  )
}

export default Index
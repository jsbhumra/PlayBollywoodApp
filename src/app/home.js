import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import CustomKeyboard from '../components/keyboard';
import Letter from '../components/letter';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieName from '../components/movieName';
import { useDebugValue, useEffect, useState } from 'react';
import { router } from 'expo-router';
import Dialog from "react-native-dialog";

export default function Home() {

  const[game,setGame] = useState(true)
  const[loading,setLoading] = useState(true)
  const[boll,setBoll] = useState('BOLLYWOOD')
  const[bollView,setBollView] = useState('BOLLYWOOD')
  const [guess,setGuess] = useState([])
  const [movie,setMovie] = useState('')
  const [movieDeets,setMovieDeets] = useState({})
  const [movieArr,setMovieArr] = useState([])
  const insets = useSafeAreaInsets();
  
  async function fetchMovie(){
    const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/movies/v1/random`,{
      method: 'GET'
    });
    console.log(response)
    const resp = await response.json();
    console.log(resp)
    setMovie(resp.original_title);
    setMovieDeets(resp);
  }
  
  useEffect(()=>{
    fetchMovie()
  },[])
  
  useEffect(()=>{
    var mov = movie.replace(/[^a-zA-Z0-9]/g, '')
    setMovieArr(mov.toUpperCase().split(""))
  },[movie])
  
  useEffect(()=>{
    if(movieArr.length>0)setLoading(false)
    },[movieArr])
  
  useEffect(()=>{
    if(guess.length>0){
      if(!(movieArr.includes(guess[0]))){
        const temp = boll.substring(1)
        setBoll(temp)
        setBollView(temp.padStart(9,' '))
      } else {
        var mov = new Set(movieArr)
        var g = new Set(guess)
        var temp = 0
        for (let el of mov) if(g.has(el)) temp+=1;
        if(temp==mov.size) setGame(false)
        }
    }
  },[guess])
  
  useEffect(()=>{
    if(boll=="") setGame(false)
    },[boll])
  
  if(loading) return(<ActivityIndicator size="large" color="#131417" />)
  
  return (
    <View style={[styles.container,{ marginTop: insets.top }]}>
      <Text style={{ fontFamily: 'monospace', fontSize: 30, fontWeight: '800', paddingVertical: 5, color: '#6ba963' }}>{bollView}</Text>
      <View style={styles.mainContainer}>
        {/* <Letter char={'A'} /> */}
        <MovieName name={movie} guess={guess} />
      </View>
      <CustomKeyboard guess={guess} setGuess={setGuess} movie={movie} />
      <StatusBar style="auto" />
      <Dialog.Container visible={!game}>
        <Dialog.Title>GAME OVER!</Dialog.Title>
        <Dialog.Description>
          <ScrollView style={{ width: '50%', height: 'auto' }}>
            {/* <Image source={{ uri: movieDeets.poster_path }} style={{ width: '100%' }} resizeMode='cover' /> */}
            <Text>The movie was {movie}</Text>
            <Text>Release Date: {movieDeets.release_date.length>0 ? movieDeets.release_date : movieDeets.year_of_release}</Text>
            <Text>IMDb Rating: {movieDeets.imdb_rating}</Text>
            {/* <Text>Movie Summary: {movieDeets.summary}</Text> */}
          </ScrollView>
        </Dialog.Description>
        <Dialog.Button label="Main Menu" onPress={()=>router.replace('/')} />
        <Dialog.Button label="New Game" onPress={()=>router.replace('/home')} />
    </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: "none"
  }
});

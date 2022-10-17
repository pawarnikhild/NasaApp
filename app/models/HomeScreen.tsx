import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { perticularAsteroid } from '../services/perticularAsteroid';
import { randomAsteroid } from '../services/randomAsteroid';

import HomeScreenView from '../views/HomeScreenView';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [searchPhrase, setSearchPhrase] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    handleButtonStatus();
  }, [searchPhrase.length]);

  const handleButtonStatus = () => {
    if(searchPhrase.length <= 0) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }

  const handleSubmitPress = async (id: string) => {
    console.log("button pressed")
    const localArray = await perticularAsteroid(id);
    // console.log('localArray', localArray)
    if(localArray != null) {
      navigation.navigate('Asteroid', {data: localArray});
    } else {
      alert('Invalid Input!');
      console.log('Invalid Input!');
    }
  }

  const handleRandomAsteroidPress = async () => {
    console.log('Random Asteroid Pressed');
    const randomId = await randomAsteroid();
    if( randomId !=null) {
      console.log('RandomId found');
      handleSubmitPress(randomId);
    } else {
      console.log('RandomId not found');
    }
  }
  
  console.log('searchPhrase', searchPhrase);

  return (
    <HomeScreenView
      searchPhrase={searchPhrase}
      buttonDisabled={buttonDisabled}
      setSearchPhrase={setSearchPhrase}
      handleButtonStatus={handleButtonStatus}
      handleSubmitPress={handleSubmitPress}
      handleRandomAsteroidPress={handleRandomAsteroidPress}
    />
  )
}

export default HomeScreen
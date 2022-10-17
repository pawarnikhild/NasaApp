import React from 'react';
import { StatusBar, ImageBackground, View, Text, SafeAreaView } from 'react-native';
import CustomButton from '../components/CustomButton';

import CustomTextInput from '../components/CustomTextInput';

import GlobalStyles from '../utils/GlobalStyles';
import { AppColor } from '../utils/StyleConstants';
import HomeScreenStyle from '../styles/HomeScreenStyle'

type HomeScreenViewProps = {
  searchPhrase: string
  buttonDisabled: boolean
  setSearchPhrase: (active: string) => void
  handleButtonStatus: () => void
  handleSubmitPress: (active: string) => void
  handleRandomAsteroidPress: () => void
}

const HomeScreenView = (props: HomeScreenViewProps) => {
  const { searchPhrase, buttonDisabled, setSearchPhrase, handleButtonStatus, handleSubmitPress, handleRandomAsteroidPress } = props;
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar/>
      <ImageBackground style={GlobalStyles.imageBackground} source={require('../assets/Asteroid.jpg')}>
        <Text style={GlobalStyles.heading}>Asteroid App</Text>
        <Text style={HomeScreenStyle.normalText}>Sample Ids -</Text>
        <Text style={HomeScreenStyle.normalText}>3542519</Text>
        <Text style={HomeScreenStyle.normalText}>2000433</Text>
        <CustomTextInput
          style={HomeScreenStyle.customTextInput}
          placeholder='Enter Asteroid ID'
          placeholderColor={AppColor.grey}
          value={searchPhrase}
          onChangeText={(text) => {
            setSearchPhrase(text);
            handleButtonStatus();
          }}        
        />
        <CustomButton
          title='Submit'
          style={HomeScreenStyle.customButton}
          buttonDisabled={buttonDisabled}
          onPress={() => {handleSubmitPress(searchPhrase)}}
        />
        <CustomButton
          title='Random Asteroid'
          style={HomeScreenStyle.customButton}
          onPress={handleRandomAsteroidPress}
        />
      </ImageBackground>
    </SafeAreaView>
    
  )
}

export default HomeScreenView
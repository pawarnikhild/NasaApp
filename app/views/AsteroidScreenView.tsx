import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'

import GlobalStyles from '../utils/GlobalStyles';
import AsteroidScreenStyle from '../styles/AsteroidScreenStyle';

type AsteroidScreenViewProps = {
  data: any
}

const AsteroidScreenView = (props: AsteroidScreenViewProps) => {
  const { data } = props;

  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar/>
      <View style={AsteroidScreenStyle.horizontalCenterContainer}>
        
        <View style={AsteroidScreenStyle.row}>
          <Text style={AsteroidScreenStyle.field}>Asteroid ID: </Text>
          <Text style={AsteroidScreenStyle.data}>{data.id}</Text>
        </View>
        {/* <View style={AsteroidScreenStyle.row}> */}
          <Text style={AsteroidScreenStyle.field}>NASA JPL URL: </Text>
          <Text style={AsteroidScreenStyle.data}>{data.nasa_jpl_url}</Text>
        {/* </View> */}
        <View style={AsteroidScreenStyle.row}>
          <Text style={AsteroidScreenStyle.field}>Is Potentially Hazardous: </Text>
          <Text style={AsteroidScreenStyle.data}>{data.is_potentially_hazardous_asteroid.toString()}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AsteroidScreenView
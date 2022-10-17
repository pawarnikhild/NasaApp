import React from 'react'
import { useRoute } from '@react-navigation/native'

import AsteroidScreenView from '../views/AsteroidScreenView'

const AstroidScreen = () => {
  const route = useRoute();
  const { data } = route.params;
  console.log('data.is_potentially_hazardous_asteroid', data.is_potentially_hazardous_asteroid)

  return (
    <AsteroidScreenView data={data}/>
  )
}

export default AstroidScreen
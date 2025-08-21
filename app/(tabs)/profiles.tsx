import { globalStyles } from '@/constants/Colors'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const profiles = () => {
  return (
    <SafeAreaView 
    style={{
      backgroundColor: globalStyles.forBackground,
      height: '100%',
    }
    }>
    <View>
      <Text>profiles</Text>
    </View>
    </SafeAreaView>
  )
}

export default profiles
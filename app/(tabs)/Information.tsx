import { globalStyles } from '@/constants/Colors'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Information = () => {
  return (
    <SafeAreaView
    style={{
      backgroundColor: globalStyles.forBackground,
      height: '100%',
    }}>
    <View>
      <Text>Information</Text>
    </View>
    </SafeAreaView>
  )
}

export default Information
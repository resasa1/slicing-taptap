import { globalStyles } from '@/constants/Colors'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Community = () => {
  return (
    <SafeAreaView
    style={{
      backgroundColor: globalStyles.forBackground,
      height: '100%',
    }}>
    <View>
      <Text>discover</Text>
    </View>
    </SafeAreaView>
  )
}

export default Community
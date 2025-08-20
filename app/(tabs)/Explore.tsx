import { globalStyles } from '@/constants/Colors';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { supabase } from '../../lib/supabase.js';

const dummyData = ['rekomendasi', 'populer hari ini', 'berdasar genre', 'konsol', 'mobile']

const Explore = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScrollView = (index: any) => {
    setActiveIndex(index);
  }

  const renderContent = () => {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headTabs}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewOnly}>
            {dummyData.map((data, index) => (
              <TouchableOpacity 
              key={index}
              onPress={()=> handleScrollView(index)}
              >
                <View key={index} style={styles.scrollViewContent}>
                <Text style={styles.texts}>{data}</Text>
              </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
        <TouchableOpacity>
            <Image 
            style={styles.forIcon}
            source={require('../../assets/icons/searchW.png')}/>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image 
            style={styles.forIcon}
            source={require('../../assets/images/icon.png')}/>
          </TouchableOpacity>
        </View>
        <ScrollView>

        </ScrollView>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.forBackground,
    height: '100%',
  },
  texts: {
    color: globalStyles.forText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  scrollViewOnly: {
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 40,
    gap: 10,
  },
  forIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
    paddingVertical: 10,
  },
})
export default Explore
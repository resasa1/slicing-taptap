import { globalStyles } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContentCard from '../../components/ContentCard';
import { supabase } from '../../lib/supabase.js';

const dummyData = ['rekomendasi', 'populer hari ini', 'berdasar genre', 'konsol', 'mobile']

const Explore = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [loading, setLoading] = useState(true); 
  const [profiles, setProfiles] = useState([]);
  const  [games, setGames]:any = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Jalankan kedua fetch secara bersamaan
      const [profileResponse, gamesResponse] = await Promise.all([
        supabase.from('profiledummy').select('avatar_url').limit(1).single(),
        supabase.from('game_list').select('*').order('created_at', { ascending: false })
      ]);

      // Proses hasil fetch profile
      if (profileResponse.error) {
        console.error('ERROR FETCHING PROFILE:', profileResponse.error);
      } else if (profileResponse.data) {
        setProfiles(profileResponse.data.avatar_url);
      }

      // Proses hasil fetch game list
      if (gamesResponse.error) {
        console.error('ERROR FETCHING GAMES:', gamesResponse.error);
      } else {
        setGames(gamesResponse.data);
      }

      // Matikan loading HANYA setelah semua proses selesai
      setLoading(false);
    };

    fetchData();
  }, []);

  const imageSource = loading || !profiles
    ? require('../../assets/images/icon.png')
    : { uri: profiles };
    
  // SCROLL VIEW CONTENT AND RENDERING 
  const handleScrollView = (index: any) => {
    setActiveIndex(index);
  }
  
  const renderContent = () => {
    
  }
 
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER OF PAGES */}
      <View style={styles.headTabs}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewOnly}>
            {dummyData.map((data, index) => (
              <TouchableOpacity 
              key={index}
              onPress={()=> handleScrollView(index)}
              >
                <View style={styles.scrollViewContent}>
                <Text style={[styles.texts, activeIndex === index && styles.contentActive]} >{data}</Text>
                <View style={[styles.indicator, activeIndex === index && styles.indicatorActive]}></View>
              </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
        <TouchableOpacity>
            <Image 
            style={styles.forIcon}
            source={require('../../assets/icons/searchW.png')}/>
        </TouchableOpacity>
        <View 
        style={{
          borderRadius: 50,
        }}>
          <TouchableOpacity>
            <Image 
            style={styles.forProfiles}
            source={imageSource}/>
          </TouchableOpacity>
        </View>
      </View>
      {/* END HERE */}

      <FlatList
      data={games}
      renderItem={({item}:any)=> <ContentCard game={item}/>}
      keyExtractor={(item: any) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
      />

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
  },
  indicator: {
    // karena kadang lupa buat pemelajaran ini lebarnya 60% dari lebar teks, ingat lebar teks
    height: 3,
    width: '70%',
    marginTop: 6,
    backgroundColor: 'transparent',
    borderRadius: 2,
  },
  indicatorActive: {
    backgroundColor: '#28A745',
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
    paddingVertical: 10,
  },
  forProfiles: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 50,
    paddingVertical: 10,
  },
  contentActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
export default Explore;
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { globalStyles } from '../../constants/Colors.js';

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{
            tabBarLabelStyle: {
                fontFamily: 'Poppins',
                color: globalStyles.forText,
            },
            tabBarStyle: {
                backgroundColor: globalStyles.tabBackground,
                borderTopColor: globalStyles.forBackground,
                height: 80,
            },
            tabBarInactiveTintColor: '#000',
            tabBarActiveTintColor: '#000',
        }}>

        {/* Rubah jadi jelajahi permainan */}
            <Tabs.Screen
            name= "Explore"
            options= {{
                title: 'Jelajahi Permainan',
                tabBarIcon: () => (
                    <Image 
                    source={require('../../assets/images/icon.png')}
                    style={{
                        width: 24,
                        height: 24,
                    }}
                    />
                ),
               headerShown: false, 
            }} />

        {/* Rubah jadi daftar peringkat */}
            <Tabs.Screen 
            name= "Ranklist"
            options= {{
                title: 'Daftar Peringkat',
                tabBarIcon: () => (
                    <Image
                    source={require('../../assets/icons/ranklistW.png')}
                    style={{
                        width: 24,
                        height: 24,
                        
                    }}
                    />
                ),
                headerShown: false,
            }}/>

        {/* Rubah jadi Komunitas */}
            <Tabs.Screen 
            name= "Community"
            options= {{
                title: 'Komunitas',
                tabBarIcon: () => (
                    <Image
                    source={require('../../assets/images/icon.png')}
                    style={{
                        width: 24,
                        height: 24,
                        
                    }}
                    />
                ),
                headerShown: false,
            }}/>

        {/* Rubah jadi Informasi */}
            <Tabs.Screen 
            name= "Information"
            options= {{
                title: 'Informasi',
                tabBarIcon: () => (
                    <Image
                    source={require('../../assets/icons/infoW.png')}
                    style={{
                        width: 24,
                        height: 24,
                        
                    }}
                    />
                ),
                headerShown: false,
            }}/>

        {/* Profiles Pengguna */}
            <Tabs.Screen 
            name= "Profiles"
            options= {{
                title: 'Profiles',
                tabBarIcon: () => (
                    <Image
                    source={require('../../assets/images/icon.png')}
                    style={{
                        width: 24,
                        height: 24,
                        
                    }}
                    />
                ),
                headerShown: false,
            }}/>

        </Tabs>
    )
}
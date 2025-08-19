import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{
            tabBarLabelStyle: {
                fontFamily: 'Poppins'
            },
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopColor: '#ccc',
                height: 60,
            },
            tabBarInactiveTintColor: '#000',
            tabBarActiveTintColor: '#000',
        }}>

        {/* Rubah jadi jelajahi permainan */}
            <Tabs.Screen
            name= "Home"
            options= {{
                title: 'Home',
                tabBarIcon: ({color, size}) => (
                    <Image 
                    source={require('../../assets/images/icon.png')}
                    style={{
                        width: size,
                        height: size,
                        tintColor: color
                    }}
                    />
                ),
               headerShown: false, 
            }} />

        {/* Rubah jadi daftar peringkat */}
            <Tabs.Screen 
            name= "popularity"
            options= {{
                title: 'Popularity',
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

        {/* Rubah jadi Komunitas */}
            <Tabs.Screen 
            name= "Discover"
            options= {{
                title: 'Discover',
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
            name= "Messages"
            options= {{
                title: 'Messages',
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
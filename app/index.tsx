import { useRouter } from 'expo-router';
import { Button, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Index() {
  
  const router = useRouter();

  return (
    <SafeAreaView>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
      <Button title="move" onPress={()=> router.navigate('./(tabs)/home')}/>      
    </View>
    </SafeAreaView>
  );
}



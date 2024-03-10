import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBox from './components/SearchBox';

export default function App() {
  const search = (searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter something")
    }
    fetch(`https:api.github.com/users/${searchTerm}`).then(res => res.json()).then(data=>{
      console.log(data)
    })
  }
  return (
    <View className="bg-black flex-1">
      <ScrollView keyboardShouldPersistTaps="handled" className="h-screen">
        <SearchBox onSearch={search} />
      </ScrollView>
    </View>
  );
}



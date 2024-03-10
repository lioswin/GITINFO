import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBox from './components/SearchBox';
import User from './components/User';
import { useCallback, useState } from 'react';

type Data = {
  avatar_url: string,
  followers: string | number,
  following: string | number,
  login: string,
  public_repos: string | number
}

export default function App() {
  const [data, setData] = useState<Data>();
  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter something")
    }
    fetch(`https:api.github.com/users/${searchTerm}`).then(res => res.json()).then(data => {
      setData(data)
    })
  }, [])
  return (
    <View className="bg-black flex-1">
      <ScrollView keyboardShouldPersistTaps="handled" className="h-screen p-4 mx-auto">
        <SearchBox onSearch={search} />
        {
          data && <User src={data.avatar_url} username={data.login} />
        }
      </ScrollView>
    </View>
  );
}



import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/detail/${item.id}`)}>
            <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1 }}>
              <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
              <Text style={{ marginLeft: 10, fontSize: 18 }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

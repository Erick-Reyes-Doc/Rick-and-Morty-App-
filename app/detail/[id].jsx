import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

export default function DetailScreen() {
    const { id } = useLocalSearchParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <ActivityIndicator size="large" color="#00ff00" />;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
            <Image source={{ uri: character.image }} style={{ width: 200, height: 200, borderRadius: 100 }} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{character.name}</Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>Status: {character.status}</Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>Species: {character.species}</Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>Origin: {character.origin.name}</Text>
        </View>
    );
}

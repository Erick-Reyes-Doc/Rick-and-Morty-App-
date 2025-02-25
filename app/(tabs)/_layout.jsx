import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // 🔹 Importar iconos de Expo

export default function Layout() {
  return (
    <Tabs screenOptions={{ 
      headerTitle: "Personajes de Rick & Morty", // 🔹 Título del header
      headerStyle: { backgroundColor: '#333' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold', fontSize: 18 }
    }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Inicio", 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="explore" 
        options={{ 
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          )
        }} 
      />
    </Tabs>
  );
}

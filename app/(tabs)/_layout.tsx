
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: "coral" }}>
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={24} color={color} />
        )
       }}  />
      <Tabs.Screen name="login" options={{title: "Login"}} />
    </Tabs>
  );
}

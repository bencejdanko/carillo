import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#191A22",
      flex: 1,
      width: "100%",
      height: "100%",
    }}>
      <Text style={{
        fontSize: '30',
        paddingTop: 50,
        paddingLeft: 10,
      }
      }>
        <Text style={{ color: "white" }}>Welcome{"\n"}back to{"\n"}</Text>
        <Text style={{ color: "red" }}>Car-Rillo.</Text>
      </Text>

      <Text style={
        {
          paddingTop: 5,
          color: "#636464",
          fontSize: 15,
          paddingLeft: 10
        }}>{"\n"}Your own digital pitstop.</Text>

      <View style={{
        padding: 20,
        paddingLeft: 15,
      }}>

        <Text>Email</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            color: "white",
            borderRadius: 5,
            paddingLeft: 10,
          }}

          placeholder="Enter your email here"
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
});

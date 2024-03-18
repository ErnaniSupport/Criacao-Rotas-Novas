import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Image source={require('../assets/Marca.png')} style={styles.image} />

      <TouchableOpacity style={styles.entrarButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrarButton: {
    backgroundColor: 'red',
    padding: 5,
    marginTop: 100,
    width: 150,
    alignItems: 'center',
    color: 'white',
    borderRadius: 15
  },
  buttonText: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    width: 250, height: 250
  }
});

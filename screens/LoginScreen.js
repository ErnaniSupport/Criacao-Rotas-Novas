import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <Image source={require('../assets/MarcaSaco.png')} style={styles.image} />
            <br></br>

            <View style={{ flex: 1 }} />
            <Text style={styles.frase}>Mate sua fome com um clique.</Text>
            <br></br>

            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input} />

            <Text style={styles.title}>Senha</Text>
            <TextInput style={styles.input} secureTextEntry />

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Lista de Contato')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cadastrarButton} onPress={() => navigation.navigate('Cadastro de Usuario')}>
                <Text style={styles.buttonText}>Cadastra-se</Text>
            </TouchableOpacity>

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        marginBottom: 80
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20,
    },

    loginButton: {
        backgroundColor: 'red',
        padding: 5,
        width: 150,
        alignItems: 'center',
        color: 'white',
        borderRadius: 15,
        marginBottom: 40
    },

    cadastrarButton: {
        backgroundColor: 'blue',
        padding: 5,
        marginBottom: 70,
        width: 150,
        alignItems: 'center',
        color: 'white',
        borderRadius: 15,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    input: {
        width: '95%',
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        padding: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 1,
        right: 120,
    },
    frase: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
export default LoginScreen;
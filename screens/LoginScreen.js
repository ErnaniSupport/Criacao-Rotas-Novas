import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <Image source={require('../assets/MarcaSaco.png')} style={styles.image} />
            
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
        paddingBottom: 50,
        paddingTop: 40
    },
    image: {
        width: 230,
        height: 230,
        borderRadius: 20,
    },

    loginButton: {
        backgroundColor: 'red',
        padding: 5,
        width: 150,
        alignItems: 'center',
        color: 'white',
        borderRadius: 15,
        marginBottom: 50
    },

    cadastrarButton: {
        backgroundColor: 'blue',
        padding: 5,
        width: 150,
        alignItems: 'center',
        color: 'white',
        borderRadius: 15,
        marginBottom: 10
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    input: {
        width: '90%',
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
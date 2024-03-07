import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>

            <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30, paddingBottom: 30 }}>Cadastro de Contato</Text>

            <Text style={styles.title}>Nome</Text>
            <TextInput style={styles.input} />

            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input} />

            <Text style={styles.title}>Telefone</Text>
            <TextInput style={styles.input} />

            <TouchableOpacity style={styles.salvarButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60
    },

    salvarButton: {
        backgroundColor: 'blue',
        padding: 5,
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
        width: '80%',
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 40,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 1,
        right: 120,
    },

});
export default LoginScreen;
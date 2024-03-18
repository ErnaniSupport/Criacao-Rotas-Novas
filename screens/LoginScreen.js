import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { app } from "../src/Firebase/FireBase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function authRotaLogin() {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Lista de Contato')
                {
                    alert("Você está logado com sucesso!!!")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <Image source={require('../assets/MarcaSaco.png')} style={styles.image} />

            <View style={{ flex: 1 }} />
            <Text style={styles.frase}>Mate sua fome com um clique.</Text>
            <br></br>

            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input}
                value={email}
                onChangeText={value => setEmail(value)}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true}
                maxLength={6}
                value={senha}
                onChangeText={value => setSenha(value)}
            />

            <TouchableOpacity style={styles.loginButton} >
                <Text style={styles.buttonText} onPress={() => authRotaLogin()} >Login</Text>
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
        fontWeight: 'bold',
        fontSize: 20,
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
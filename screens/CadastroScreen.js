import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../src/Firebase/FireBase";
import React, { useState } from 'react';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function authRotaCadastro() {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                {
                    alert("Cadastro Criado com Sucesso!!!")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage + " Email inválido!");
            });
    };

    return (
        <View style={styles.container}>

            <Header
                containerStyle={{ width: '100%', backgroundColor: '#1874CD' }}
                leftComponent={<Icon
                    name='arrow-circle-left'
                    type='font-awesome6'
                    color='#fff'
                    iconStyle={{ fontSize: 40 }}
                    onPress={() => navigation.navigate("Login")}
                />
                }
                centerComponent={{
                    text: 'Usuários', style: {
                        color: '#fff', fontSize: 25, fontWeight: 'bold',
                        justifyContent: 'row'
                    }
                }}
            />

            <View style={{ alignItems: "center", marginTop: 80 }}></View>

            {/*
            <Text style={styles.title}>Nome</Text>
            <TextInput style={styles.input} />

            <Text style={styles.title}>CPF</Text>
            <TextInput style={styles.input} secureTextEntry />
            */}

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

            <View>
                <TouchableOpacity style={styles.salvarButton} >
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Login', authRotaCadastro())} >Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingBottom: 20
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
        width: '90%',
        height: 50,
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        borderWidth: 2,
        marginBottom: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 1,
        right: 120,
    },
});
export default LoginScreen;
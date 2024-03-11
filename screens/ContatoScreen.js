import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


export default function CadastroContato(route) {

    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params
            const { email } = route.params
            const { telefone } = route.params
            const { id } = route.params
            setNome(nome)
            setEmail(email)
            setTelefone(telefone)
            setId(id)
        }
    }, [])

    async function inserirDados() {

        axios.post('http://localhost:3000/user', {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        })
            .then(function (response) {
                setNome('');
                setEmail('');
                setTelefone('');
                showMessage({
                    message: "Registro Cadastrado com sucesso",
                    type: "success",
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const navegacao = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30, }}>Cadastro de Contato</Text>

            <View style={{ marginTop: 50 }}>

                <Input
                    label='Nome'
                    labelStyle={{ fontSize: 25, padding: 10, color: 'black' }}
                    inputStyle={{
                        width: '100%', height: 50, fontSize: 20,
                        borderColor: 'black', borderWidth: 2, fontWeight: 'bold'
                    }}
                    onChangeText={text => setNome(text)}
                    value={getNome} />

                <Input
                    label='E-mail'
                    labelStyle={{ fontSize: 25, padding: 10, color: 'black' }}
                    inputStyle={{
                        width: '100%', height: 50, fontSize: 20,
                        borderColor: 'black', borderWidth: 2, fontWeight: 'bold'
                    }}
                    onChangeText={text => setEmail(text)}
                    value={getEmail} />

                <Input
                    label='Telefone'
                    labelStyle={{ fontSize: 25, padding: 10, color: 'black' }}
                    inputStyle={{
                        width: '100%', height: 50, fontSize: 20,
                        borderColor: 'black', borderWidth: 2, fontWeight: 'bold'
                    }}
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone} />

            </View>
            <View>
                <TouchableOpacity style={styles.salvarButton} onPress={() => inserirDados() }>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingBottom: 80
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20
    },

    salvarButton: {
        backgroundColor: 'blue',
        padding: 5,
        marginTop: 80,
        height: 50,
        margin: 'auto',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }

});

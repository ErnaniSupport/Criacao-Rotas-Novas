import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';


export default function AlterarExcluir() {

    const navegacao = useNavigation();

    const rotas = useRoute();
    const { data } = rotas.params;
    const [getNome, setNome] = useState(data.nome);
    const [getEmail, setEmail] = useState(data.email);
    const [getTelefone, setTelefone] = useState(data.telefone);


    async function inserirDados() {

        axios.put('http://localhost:3000/user/' + data.id, {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        })
            .then(function (response) {
                setNome('');
                setEmail('');
                setTelefone('');
                showMessage({
                    message: "Registro Alterado com sucesso",
                    type: "success",
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    async function inserirDados() {

        axios.put('http://localhost:3000/user/' + data.id, {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        })
            .then(function (response) {
                setNome('');
                setEmail('');
                setTelefone('');
                showMessage({
                    message: "Registro Alterado com sucesso",
                    type: "success",
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    async function deletarDados() {

        axios.delete('http://localhost:3000/user/' + data.id, {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        })
            .then(function (response) {
                setNome('');
                setEmail('');
                setTelefone('');
                showMessage({
                    message: "Registro Alterado com sucesso",
                    type: "success",
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30, }}>Contato</Text>

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
                <TouchableOpacity style={styles.alterarButton} onPress={() => inserirDados()}>
                    <Text style={styles.buttonText}>Alterar</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.excluirButton} onPress={() => deletarDados()} >
                    <Text style={styles.buttonText}>Excluir</Text>
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

    alterarButton: {
        backgroundColor: 'blue',
        padding: 5,
        marginTop: 80,
        height: 50,
        margin: 'auto',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

    excluirButton: {
        backgroundColor: 'red',
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

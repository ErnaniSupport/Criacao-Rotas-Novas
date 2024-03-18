import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Input, Button, Text, Header, Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


export default function CadastroContato(route) {

    const navigation = useNavigation();

    const [getId, setId] = useState();
    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();


    useEffect(() => {
        if (route.params) {
            const { id } = route.params
            const { nome } = route.params
            const { email } = route.params
            const { telefone } = route.params

            setId(id)
            setNome(nome)
            setEmail(email)
            setTelefone(telefone)

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
                {
                    alert("Contato Salvo com sucesso!")
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>

            <Header
                containerStyle={{ width: '100%', backgroundColor: '#1874CD' }}
                leftComponent={<Icon
                    name='arrow-circle-left'
                    type='font-awesome6'
                    color='#fff'
                    iconStyle={{ fontSize: 40 }}
                    onPress={() => navigation.navigate("Lista de Contato")}
                />
                }
                centerComponent={{
                    text: 'Contato', style: {
                        color: '#fff', fontSize: 25, fontWeight: 'bold',
                        justifyContent: 'row'
                    }
                }}
            />

            <View style={{ marginTop: 50, }}>

                <Input
                    label='Nome'
                    labelStyle={{ fontSize: 25, padding: 10, color: 'black' }}
                    inputStyle={{
                        width: '90%', height: 50, fontSize: 20,
                        borderColor: 'black', borderWidth: 2, fontWeight: 'bold'
                    }}
                    onChangeText={text => setNome(text)}
                    value={getNome} />

                <Input
                    label='E-mail'
                    labelStyle={{ fontSize: 25, padding: 10, color: 'black' }}
                    inputStyle={{
                        width: '90%', height: 50, fontSize: 20,
                        borderColor: 'black', borderWidth: 2, fontWeight: 'bold'
                    }}
                    onChangeText={text => setEmail(text)}
                    value={getEmail} />

                <Input
                    label='Telefone'
                    labelStyle={{ fontSize: 25, padding: 10, color: 'black' }}
                    inputStyle={{
                        width: '90%', height: 50, fontSize: 20,
                        borderColor: 'black', borderWidth: 2, fontWeight: 'bold'
                    }}
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone} />

            </View>

            <View>
                <TouchableOpacity style={styles.salvarButton} onPress={() => inserirDados()}>
                    <Text style={styles.buttonText} >Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 80
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
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }
});

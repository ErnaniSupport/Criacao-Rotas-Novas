import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button, ListItem, Avatar, Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { app } from "../src/Firebase/FireBase";
import { getAuth, signOut } from "firebase/auth";

export default function ListaContato() {

    const edicao = (data) => {
        navigation.navigate("AlterarExcluir", { data })
        console.log(data)
    };

    const [data, setData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        function resgatar() {

            axios.get('http://localhost:3000/user')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Erro ao obter dados:', error);
                });
        }
        resgatar();
    },);

    function deslogar() {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.replace('Login')
            alert('deslogado')
        }).catch((error) => {
            error.message;
        });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header
                    containerStyle={{ width: '100%', backgroundColor: '#1874CD' }}
                    leftComponent={<Icon
                        name='arrow-circle-left'
                        type='font-awesome6'
                        color='#fff'
                        iconStyle={{ fontSize: 40 }}
                        onPress={() => deslogar()}
                    />
                    }
                    centerComponent={{
                        text: 'Lista de Contatos', style: {
                            color: '#fff', fontSize: 25, fontWeight: 'bold',
                            justifyContent: 'row'
                        }
                    }}
                    rightComponent={<Icon
                        name='add'
                        type='font-awesome6'
                        color='#fff'
                        iconStyle={{ fontSize: 40 }}
                        onPress={() => navigation.navigate('Cadastro de Contato')}
                    />
                    }
                />
                <View>
                    {
                        data.map((l, i) => (
                            <ListItem key={i} bottomDivider
                                onPress={() => edicao({
                                    id: l.id,
                                    nome: l.nome,
                                    email: l.email,
                                    telefone: l.telefone
                                })}>
                                <Avatar size="medium" source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png' }} />
                                <ListItem.Content>
                                    <ListItem.Title style={styles.titulo}>{l.nome}</ListItem.Title>
                                    <ListItem.Subtitle style={styles.titulo}>{l.email}</ListItem.Subtitle>
                                    <ListItem.Subtitle style={styles.titulo}>{l.telefone}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    titulo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    }
});

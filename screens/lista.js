import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button, ListItem, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

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
    }, []);

    return (
        <ScrollView>
        <View style={styles.container}>

            <View>
                
                <Button title="Lista de Contatos   + " onPress={() => navigation.navigate('Cadastro de Contato')}
                    titleStyle={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}
                    buttonStyle={{ backgroundColor: 'blue' }} />
            </View>
            
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
                            <Avatar size="medium" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pwsN7oN02FOgJSVg2fe-R1dMMFRZi9J7Lw&usqp=CAU' }} />
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

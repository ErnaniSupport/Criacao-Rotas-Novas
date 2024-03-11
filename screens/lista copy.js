import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList } from 'react-native';
import { Button, ListItem, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const edicao = () => {

}

const ListaPessoas = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        // Substitua a URL abaixo pela sua API
        // const apiUrl = 'http://localhost:3000/user';

        axios.get('http://localhost:3000/user')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter dados:', error);
            });
    }, []);

    const renderItem = ({ item }) => (
        <View>
            <ListItem bottomDivider>
                <Avatar size="medium" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pwsN7oN02FOgJSVg2fe-R1dMMFRZi9J7Lw&usqp=CAU' }} />
                <ListItem.Content>
                    <ListItem.Title style={styles.titulo}>{item.nome}</ListItem.Title>
                    <ListItem.Title style={styles.titulo}>{item.email}</ListItem.Title>
                    <ListItem.Title style={styles.titulo}>{item.telefone}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>

                <Text style={{ color: "blue", textAlign: 'center', fontWeight: 'bold', fontSize: 20, }}></Text>

                <Button title="Lista de Contatos   + " onPress={() => navigation.navigate('Cadastro de Contato')}
                    titleStyle={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}
                    buttonStyle={{ backgroundColor: 'red', justifyContent: 'center' }} />

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};

export default ListaPessoas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        color: 'black',
        fontWeight: 'bold'
    }
});

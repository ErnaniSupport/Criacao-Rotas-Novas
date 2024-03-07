import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function lista() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>

            <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30, }}>Lista de Contatos</Text>
            <br></br>
            <Button title="Adicionar" onPress={() => navigation.navigate('Cadastro de Contato')}
                titleStyle={{ fontSize: 15, fontWeight: 'bold' }}
                buttonStyle={{ backgroundColor: 'red', justifyContent: 'center' }} />
            <FlatList
                data={[
                    {
                        nome: "Marcos Andrade",
                        email: "marcosAndre@gmail.com",
                        numero: 81988553424
                    },

                    {
                        nome: "Patrícia Tavares",
                        email: "patriciaTavares@hotmail.com",
                        numero: 81998765332
                    },

                    {
                        nome: "Rodrigo Antunes",
                        email: "patriciaTavares@bol.com",
                        numero: 81987765525
                    },
                ]}
                renderItem={({ item }) => <Text onPress={() => navigation.navigate('Contato Alterar/Excluir')}
                    style={styles.item}><br></br>{item.nome}<br></br>{item.email}<br></br>{item.numero}</Text>}
            />

        </View>
    );
};
export default lista;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        padding: 50,
        fontSize: 18,
        height: 5,
        fontWeight: 'bold'
    },

    bordacabecalho: {
        backgroundColor: 'blue',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        top: 0,
        display: 'flex',
        position: 'absolute'
    },
});
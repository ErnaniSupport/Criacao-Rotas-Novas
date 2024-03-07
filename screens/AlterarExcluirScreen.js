import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function AlterarExcluirScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={{ color: "blue", textAlign: 'center', 
            fontWeight: 'bold', fontSize: 25 }}>Alterar ou Excluir Contato</Text>

            <FlatList
                data={[
                    {
                        nome: "Marcos Andrade",
                        email: "marcosAndre@gmail.com",
                        numero: 81988553424
                    },

                ]}
                renderItem={({ item }) => <Text onPress={() => navigation.navigate('Cadastro de Contato')}
                    style={styles.item}><br></br>{item.nome}<br></br>{item.email}<br></br>{item.numero}</Text>}
            />

            <View style={{ flex: 2 }}>
                <Button title="Alterar" onPress={() => navigation.navigate('Cadastro de Contato')}
                    buttonStyle={{ backgroundColor: 'blue', width: 150, padding: 10, justifyContent: 'center',
                     marginTop: 50}} />

                <Button title="Excluir" onPress={() => navigation.navigate('Login')}
                    buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, justifyContent: 'center', marginTop: 50 }} />
            </View>
        </View>
    );
};
export default AlterarExcluirScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 50,
        fontSize: 18,
        height: 5,
        fontWeight: 'bold'
    },
});
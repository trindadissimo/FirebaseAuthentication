import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'

const Dashboard = () => {
    const [name, setName] = useState([])

    useEffect(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setName(snapshot.data())
            }
            else {
                console.log('User does not exist')
            }
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>
                Olá! {name.fistName}
            </Text>
            
            <TouchableOpacity
                onPress={() => {firebase.auth().signOut()}}
                style={styles.button}
            >
            <Text style={styles.buttonText}>
                Sign Out
            </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop:100,
    },
    
    button: {
        width: 150, // Largura desejada
        height: 60, // Altura desejada
        backgroundColor: '#026efd',
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
        borderRadius: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fff',
    },
})
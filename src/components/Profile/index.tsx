import React from 'react';
import Avatar from '../Avatar';
import {View, Text} from 'react-native';
import { styles } from './styles';


export default function Profile(){
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/lucasrleite.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Lucas
                    </Text>
                </View>
                <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>
        </View>
    )
}
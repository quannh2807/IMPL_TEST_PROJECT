import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StargazerItem = ({ login, avatar_url }) => {
    return (
        <View style={styles.stargazerItem}>
            <Image style={styles.avatar} source={{ uri: avatar_url }} />
            <Text style={styles.login}>{login}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    stargazerItem: {
        paddingVertical: 5,
        paddingHorizontal: 15,

        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        height: 40,
        width: 40,

        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    login: {
        marginLeft: 10,
        fontSize: 18,
    },
});
export default StargazerItem;

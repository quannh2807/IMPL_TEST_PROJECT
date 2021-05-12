import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const RepoItem = ({ name, star }) => {
    return (
        <View style={styles.listRepoItem}>
            <Text>{name}</Text>
            <Text>{`Star: ${star}`}</Text>
            <Button title="Load stargazers" />
        </View>
    );
};

export default RepoItem;

const styles = StyleSheet.create({
    listRepoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginTop: 15,
        paddingHorizontal: 15,
        paddingTop: 15,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
});

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,
    FlatList,
    Button,
} from 'react-native';
import RepoItem from './components/RepoItem';
import { useSelector } from 'react-redux';

const ListRepoScreen = () => {
    const { repoItems } = useSelector(state => state.repos);

    const [text, onChangeText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={te => onChangeText(te)}
                    value={text}
                    autoCapitalize="none"
                    placeholder="user github"
                />
            </View>

            <View style={styles.listRepo}>
                <FlatList
                    data={repoItems}
                    renderItem={({ item }) => (
                        <RepoItem
                            name={item.name}
                            star={item.stargazers_count}
                        />
                    )}
                    keyExtractor={item => `${item.id}`}
                    ListFooterComponent={
                        <View style={styles.footer}>
                            <Button title="Load more" />
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default ListRepoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchSection: {
        marginHorizontal: 15,
        marginTop: 15,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
    },

    listRepo: {},

    footer: {
        alignItems: 'center',
        marginTop: 15,
    },
});

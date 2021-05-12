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

const DATA = [
    { id: 1, name: 'AP-POLYTECHNIC', stargazers_count: 1 },
    { id: 2, name: 'AP-POLYTECHNIC', stargazers_count: 1 },
    { id: 4, name: 'AP-POLYTECHNIC', stargazers_count: 1 },
    { id: 3, name: 'AP-POLYTECHNIC', stargazers_count: 1 },
    { id: 5, name: 'AP-POLYTECHNIC', stargazers_count: 1 },
];
const App = () => {
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
                    data={DATA}
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

export default App;

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

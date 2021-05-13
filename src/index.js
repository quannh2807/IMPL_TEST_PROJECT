import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,
    FlatList,
    Button,
    Text,
    Alert,
} from 'react-native';
import RepoItem from './components/RepoItem';
import { useSelector, useDispatch } from 'react-redux';

import { fetchListRepo } from './reducers/repoReducer';
import { getUser } from './reducers/userReducer';

const ListRepoScreen = () => {
    const { repoItems, isLoadMore, isLoading } = useSelector(
        state => state.repos,
    );
    const { user, messages } = useSelector(state => state.user);

    const [text, onChangeText] = useState(user.login ? user.login : '');
    const dispatch = useDispatch();

    const handleValidateInput = checkingText => {
        const regexp = /^(?!\s*$).+/;
        const checkingResult = regexp.exec(checkingText);

        if (checkingResult === null) {
            Alert.alert('Lỗi', 'Không được bỏ trống username');

            return false;
        }
        return true;
    };

    const handleSearchUserRepos = () => {
        const valid = handleValidateInput(text);
        if (!valid) return;

        dispatch(getUser(text));
        dispatch(fetchListRepo(text));
    };
    const handleChangeTextInput = value => onChangeText(value);
    const renderListRepo = ({ item }) => <RepoItem {...item} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.listRepo}
                data={repoItems}
                renderItem={renderListRepo}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={
                    <>
                        <View style={styles.searchSection}>
                            <View style={styles.textInput}>
                                <TextInput
                                    onChangeText={handleChangeTextInput}
                                    value={text}
                                    autoCapitalize="none"
                                    placeholder="github user"
                                />
                            </View>
                            <View style={styles.searchBtn}>
                                <Button
                                    title="Search"
                                    onPress={handleSearchUserRepos}
                                    disabled={isLoading}
                                />
                            </View>
                        </View>
                        {user.public_repos ? (
                            <View style={{ marginHorizontal: 15 }}>
                                <Text>
                                    {`Found ${repoItems.length}/${user.public_repos} Repositories`}
                                </Text>
                            </View>
                        ) : null}
                        {messages !== null ? (
                            <View style={{ marginHorizontal: 15 }}>
                                <Text>{messages}</Text>
                            </View>
                        ) : null}
                    </>
                }
                ListFooterComponent={
                    isLoadMore ? (
                        <View style={styles.footer}>
                            <Button title="Load more" />
                        </View>
                    ) : null
                }
            />
        </SafeAreaView>
    );
};

export default ListRepoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    listRepo: {
        marginBottom: 15,
    },

    searchSection: {
        marginHorizontal: 15,
        marginTop: 15,

        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 3,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    searchBtn: {
        flex: 1,
        marginLeft: 10,
    },

    footer: {
        alignItems: 'center',
        marginVertical: 15,
    },
});

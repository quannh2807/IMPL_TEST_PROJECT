import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import StargazerItem from '../StargazerItem';
import stargazerApi from '../../apis/stargazerApi';

const RepoItem = props => {
    const [stargazers, setStargazers] = useState([]);

    const { name, stargazers_count } = props;
    const { user } = useSelector(state => state.user);
    const [isLoadStargazers, setIsLoadStargazers] = useState(false);

    const handleLoadStargazers = async () => {
        try {
            const data = { login: user.login, repo: name };
            const params = { page: 1, per_page: 30 };
            const res = await stargazerApi.getStargazers(data, params);
            setStargazers(res.data);
        } catch (error) {}
        setIsLoadStargazers(!isLoadStargazers);
    };
    const render = ({ item }) => <StargazerItem {...item} />;

    return (
        <>
            <View style={styles.listRepoItem}>
                <View>
                    <Text>{name}</Text>
                    <Text>{`Star: ${stargazers_count}`}</Text>
                </View>
                <Button
                    title={isLoadStargazers ? 'Close' : 'Load stargazers'}
                    onPress={handleLoadStargazers}
                />
            </View>
            {isLoadStargazers && (
                <FlatList
                    data={stargazers}
                    renderItem={render}
                    style={styles.stargazerSection}
                />
            )}
        </>
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

    stargazerSection: {
        paddingTop: 15,
    },
});

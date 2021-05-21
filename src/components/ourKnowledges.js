import React from 'react';
import { Image, SafeAreaView, Text, View, FlatList } from 'react-native';
import data from '../../assets/json/knowledges.json';

const ourKnowledges = () => {
    const renderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={{ uri: item.img }} style={{ width: 205, height: 220, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, padding: 20, flex: 'center' }}>
                <Text style={{ fontSize: 30, color: '#E8DAD2' }}>{item.title}</Text>
                <Text style={{ fontSize: 15, color: '#E8DAD2'}}>{item.desc}</Text>
            </View>
        </View>
    );
    return (
    <SafeAreaView>
        <Text style={{ textAlign: 'center', fontSize: 35, color: '#E8DAD2' }}>Nos savoir-faire</Text>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    </SafeAreaView>
    )
}

export default ourKnowledges
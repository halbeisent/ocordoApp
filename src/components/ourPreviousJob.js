import React from 'react';
import { Text, Image, Dimension, SafeAreaView, Stylesheet, View } from 'react-native';
import data from '../../assets/json/ourPreviousJobs.json';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ourPreviousJobs = () => {
    const renderItem = ({item}) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20 }}>

        </View>
    ); 
    
    return(
        <SafeAreaView>
            <Text style={{ textAlign: 'center', fontSize: 35, color: '#E8DAD2' }}>Nos réalisations</Text>
        </SafeAreaView>
    )
}
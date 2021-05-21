import React, {useState} from 'react';
import { TextInput, SafeAreaView, Text, Button, View, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ContactForm = () => {
    const [selectedBudget, setSelectedBudget] = useState();
    const [selectedSource, setSelectedSource] = useState();
    
    return (
    <SafeAreaView styles={styles.container}>
        <Text style={{fontSize: 35, textAlign: 'center', marginBottom: 10, color: '#E8DAD2'}}> Nous contacter</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput placeholder="Nom" style={{flex: 1, justifyContent: 'flex-start'}, styles.input}></TextInput>
                <TextInput placeholder="Adresse mail" style={{ flex: 1, justifyContent: 'flex-end' }, styles.input}></TextInput>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TextInput placeholder="Téléphone" style={{ flex: 1, justifyContent: 'flex-start' }, styles.input}></TextInput>
                <TextInput placeholder="Ville" style={{ flex: 1, justifyContent: 'flex-start' }, styles.input}></TextInput>
            </View>
            <View>
                <TextInput placeholder="Dites nous tout sur votre projet" style={styles.longInput}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Picker  style={styles.selectorStyle} selectedValue={selectedBudget} onValueChange={(itemValue, itemIndex) => setSelectedBudget(itemValue)}>
                    <Picker.Item label="Inférieur à 10000€" value="lesthan10000" />
                    <Picker.Item label="Entre 10000€ et 25000€" value="between10000and25000" />
                    <Picker.Item label="Entre 25000€ et 50000€" value="between25000and50000" />
                    <Picker.Item label="Entre 50000€ et 100000€" value="between50000and100000" />
                    <Picker.Item label="Plus de 100000€" value="morethan100000" />
                </Picker>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                {/* <View style={styles.selectorStyle}>
                    <Button title="Votre budget" />
                </View> */}
                <Picker style={styles.selectorStyle} selectedValue={selectedSource} onValueChange={(itemValue, itemIndex) => setSelectedSource(itemValue)}>
                    <Picker.Item label="Amis" value="fromfriends" />
                    <Picker.Item label="Agence immobilière" value="fromrealestate" />
                    <Picker.Item label="Google" value="fromgoogle" />
                    <Picker.Item label="Facebook" value="fromfacebook" />
                    <Picker.Item label="Panneaux / Publicités" value="fromadvertising" />
                    <Picker.Item label="Pages jaunes" value="fromphonebook" />
                    <Picker.Item label="Autres" value="fromothersource" />
                </Picker>
            </View>
                <View style={{ flexDirection: 'row' }, styles.submitButtonStyle}>
                    <Button title="Envoyer" />
                </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#534F50'
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4AF53',
        borderRadius: 7,
        borderColor: '#F16226',
        color: 'red'
    },

    submitButtonStyle: {
    backgroundColor: '#F16226',
    borderRadius: 10,
    borderColor: '#F4AF53',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    width: windowWidth/3,
    justifyContent: 'center',
    alignSelf: 'center'
    
    },

    input: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 20,
        fontSize: 20,
        backgroundColor: '#D7D6D6',
        width: windowWidth/2.2,
        marginLeft: 10
    },

   longInput: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#D7D6D6',
        height: windowHeight/6
    },

    selectorStyle: {
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        width: windowWidth/1.5,
        height: windowHeight/5,
        backgroundColor: '#F4AF53',
        borderRadius: 10,
        borderColor: '#F16226',
        marginBottom: 20,
        justifyContent: 'center',
        margin: 10,
    }
})

export default ContactForm
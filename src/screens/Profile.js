import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

const Profile = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.haloText}>Halo {props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '20%',
        height: '50%',
        backgroundColor: '#cecece',
        elevation: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    haloText: {
        fontSize: 20,
    }
})
export default Profile
import {View,StyleSheet, TouchableOpacity,Text}  from 'react-native';

const Orders = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Order</Text>
        </View>
    );
}


//edito el contenedor
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }


});

export default Orders;
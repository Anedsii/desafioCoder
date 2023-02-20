import {View,StyleSheet, TouchableOpacity,Text}  from 'react-native';

const Cart = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    );
}


//edito el contenedor
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }


});

export default Cart;
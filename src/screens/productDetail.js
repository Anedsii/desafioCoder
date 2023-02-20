import { StyleSheet, Text, View } from 'react-native'

import React from "react";
import { PRODUCTS } from '../constants/data';

const ProductsDetail = ({navigation,route}) =>{
    const {productId, title}= route.params;
    const product = PRODUCTS.find((product)=>product.id ==productId);
    return(
    <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title}>{product.description}</Text>
        <Text style={styles.title}>{product.weight}</Text>
        <Text style={styles.title}>{product.price}</Text>
 

    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    title:{
        fontSize:22,
        padding:10,
        fontWeight:'bold'
    }
   
})


export default ProductsDetail;
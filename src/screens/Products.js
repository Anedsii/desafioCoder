import { Button, StyleSheet, FlatList,SafeAreaView } from 'react-native'

import React from "react";
import ProductItem from '../components/product-item/productItem'

import {PRODUCTS} from '../constants/data/index'
const Products = ({navigation,route}) =>{
    const {categoryId, title}=route.params; //recibo los parametros al hacer click
  //  console.warn(title,categoryId)
    const onSelected = (item) =>{
        navigation.navigate('productDetail',{
            productId:item.id,
            title:item.title
        })
    }
    const filterProducts = PRODUCTS.filter ((product)=>product.categoryId == categoryId);

    const rederItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>
    const keyExtractor = (item) =>item.id.toString()
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filterProducts}
                renderItem={rederItem}
                keyExtractor={keyExtractor}
                style={styles.contentList}
            />
        </SafeAreaView>
    
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    title: {
        fontSize: 18,
        padding: 10,
    },
    contentList: {
    flex: 1,
},
})


export default Products;
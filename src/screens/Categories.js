import { FlatList,SafeAreaView, StyleSheet,StatusBar} from 'react-native'
import CategoryItem from '../components/category-item/categoryItem' //componente
import React from "react";
import { CATEGORIES } from '../constants/data'; //data exportada
const Categories = ({navigation}) =>{
    const onSelected= (item)=> {
        navigation.navigate('Products',{
            categoryId: item.id,
            title:item.title,
        });
    };
    const renderItem = ({item}) => <CategoryItem item={item} onselected={onSelected}/>;
    const keyExtractor=(item)=>item.id.toString();
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.containerList}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
       
        marginTop:StatusBar.currentHeight,
        marginBottom:0

        
    },
    containerList:{
        flex:1
    },
    title:{
        fontSize:18,
        padding:10,
        color:'white'
    }
   
})


export default Categories;
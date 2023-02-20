import {View,TouchableOpacity,Text,StyleSheet}  from 'react-native';

const CategoryItem = ({item,onselected})=>{

    return(
        <View style={styles.container}>
            <TouchableOpacity style={{ ...styles.contentContainer,backgroundColor: item.color}}
                onPress={()=> onselected (item)}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        </View>

)};
//edito el contenedor
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:150,
        marginHorizontal:20,
        marginVertical:10,
    },
    contentContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 5,
        padding:10
    },
    title:{
        fontSize:18,
        color:'white'
    }
});
export default CategoryItem;
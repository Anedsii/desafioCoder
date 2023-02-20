import {View,StyleSheet, TouchableOpacity,Text}  from 'react-native';

const ProductItem = ({item,onSelected})=>{

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.contentContainer}
                onPress={()=> onSelected(item)}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.price}>${item.price}</Text>
                        <Text style={styles.weight}>x{item.weight}</Text>
                    </View>
            </TouchableOpacity>
        </View>

)};
//edito el contenedor
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 110,
        backgroundColor:'cyan'
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'space-around',
      },
      title: {
        fontSize: 16,
      },
      detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      price: {
        fontSize: 16,
      },
      weight: {
        
        fontSize: 14,
      },
});
export default ProductItem;
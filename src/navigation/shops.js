import Categories from '../screens/Categories';
import Products from '../screens/Products';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import productDetail from '../screens/productDetail';

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
            headerStyle: {
              backgroundColor: "#37A8B3",
            },
            headerTintColor: "white",
            navigationBarColor: "#37A8B3",
            headerTitleStyle: {
              fontSize: 18,
              color: "white",
            },
          }}
        >
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown:false, //habilito o no status bar 
            title:'Categorias'
        }}
          
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={({route}) =>({
            title:route.params.title,
          })
            
        
        }
        />
        <Stack.Screen
          name="productDetail"
          component={productDetail}
          options= {({route}) =>({
            title:route.params.title,
          })}
        />
      </Stack.Navigator>
    );
  };
  
  export default ShopNavigator;
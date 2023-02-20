import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cart from "../screens/Cart";


const Stack = createNativeStackNavigator();


const CartNavigation = () =>{
    return(
        <Stack.Navigator
        initialRouteName="Cart"
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
        <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartNavigation;
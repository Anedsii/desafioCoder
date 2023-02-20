import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Orders from "../screens/Orders";


const Stack = createNativeStackNavigator();


const OrdersNavigation = () =>{
    return(
        <Stack.Navigator
        initialRouteName="Orders"
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
        <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
    )
}

export default OrdersNavigation;